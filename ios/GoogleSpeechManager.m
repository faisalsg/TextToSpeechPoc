//
//  GoogleSpeechManager.m
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//
#import <AVFoundation/AVFoundation.h>
#import "GoogleSpeechManager.h"
#import "AudioController.h"
#import "SpeechRecognitionService.h"
#import <React/RCTLog.h>
#import <React/RCTEventEmitter.h>

#import "google/cloud/speech/v1/CloudSpeech.pbrpc.h"

#define SAMPLE_RATE 16000.0f

@interface GoogleSpeechManager ()<AudioControllerDelegate>
@property (nonatomic, strong) NSMutableData *audioData;
@property (nonatomic, strong) NSMutableArray *audioResponse;

@end

@implementation GoogleSpeechManager
{
  bool hasListeners;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startRecording)
{
  [AudioController sharedInstance].delegate = self;

  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
  [audioSession setCategory:AVAudioSessionCategoryRecord error:nil];

  _audioData = [[NSMutableData alloc] init];
  [[AudioController sharedInstance] prepare];
  [[SpeechRecognitionService sharedInstance] setSampleRate:SAMPLE_RATE];
  [[AudioController sharedInstance] start];
}

RCT_EXPORT_METHOD(stopRecording)
{
  [[AudioController sharedInstance] stop];
  [[SpeechRecognitionService sharedInstance] stopStreaming];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void) processSampleData:(NSData *)data
{
  [self.audioData appendData:data];
  NSInteger frameCount = [data length] / 2;
  int16_t *samples = (int16_t *) [data bytes];
  int64_t sum = 0;
  for (int i = 0; i < frameCount; i++) {
    sum += abs(samples[i]);
  }

  int chunk_size = 0.1 /* seconds/chunk */ * SAMPLE_RATE * 2 /* bytes/sample */ ; /* bytes/chunk */
  
  if ([self.audioData length] > chunk_size) {
    [[SpeechRecognitionService sharedInstance] streamAudioData:self.audioData
                                                withCompletion:^(StreamingRecognizeResponse *response, NSError *error) {
      if (error) {
        NSLog(@"ERROR: %@", error);
        [[AudioController sharedInstance] stop];
      } else if (response) {
        BOOL finished = NO;
        NSLog(@"RESULT RESPONSE: %@", response.resultsArray);

        for (StreamingRecognitionResult *result in response.resultsArray) {
          if (result.isFinal) {
            NSLog(@"Finished RESPONSE: %@", response.resultsArray);
            self.audioResponse = response.resultsArray;
            finished = YES;
          }
        }
        if (finished) {
          [[AudioController sharedInstance] stop];
        }
      }
    }
     ];
    self.audioData = [[NSMutableData alloc] init];
  }}


//NSDictionary *props = @{@"images" : self.audioResponse};
//
//RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
//                                                 moduleName:@"ImageBrowserApp"
                                        //  initialProperties:props];

- (NSArray<NSString *> *)supportedEvents
{
    return @[
             @"onSpeechResults",
             @"onSpeechStart",
             @"onSpeechPartialResults",
             @"onSpeechError",
             @"onSpeechEnd",
             @"onSpeechRecognized",
             @"onSpeechVolumeChanged"
             ];
}

- (void) sendResult:(NSDictionary*)error :(NSString*)bestTranscription :(NSArray*)transcriptions :(NSNumber*)isFinal {
    if (error != nil) {
        [self sendEventWithName:@"onSpeechError" body:@{@"error": error}];
    }
    if (bestTranscription != nil) {
        [self sendEventWithName:@"onSpeechResults" body:@{@"value":@[bestTranscription]} ];
    }
    if (transcriptions != nil) {
        [self sendEventWithName:@"onSpeechPartialResults" body:@{@"value":transcriptions}];
    }
    if (isFinal != nil) {
        [self sendEventWithName:@"onSpeechRecognized" body: @{@"isFinal": isFinal}];
    }
}

RCT_EXPORT_METHOD(sendAudioResponse:(NSString *)title callback: (RCTResponseSenderBlock)callback)
{
  [self sendResult:@{@"code": @"audio", @"message": self.audioResponse} :nil :nil :nil];
 callback(self.audioResponse);
}

@end
