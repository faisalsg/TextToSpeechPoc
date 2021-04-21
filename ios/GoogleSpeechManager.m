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
#import "google/cloud/speech/v1/CloudSpeech.pbrpc.h"

#define SAMPLE_RATE 16000.0f

@interface GoogleSpeechManager ()<AudioControllerDelegate>
@property (nonatomic, strong) NSMutableData *audioData;
@property (nonatomic, strong) NSMutableArray *audioResponse;
@property (nonatomic) RCTResponseSenderBlock globalCallback;

@end

@implementation GoogleSpeechManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startRecording)
{
  self.audioResponse = [[NSMutableArray alloc] init];
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
        if (self.globalCallback) {
          self.globalCallback(@[error]);
        }
        [[AudioController sharedInstance] stop];

      } else if (response) {
        BOOL finished = NO;
        NSLog(@"RESULT RESPONSE: %@", response.resultsArray);

        for (StreamingRecognitionResult *result in response.resultsArray) {
          if (result.isFinal) {
            NSLog(@"Finished RESPONSE: %@", response.resultsArray);
            NSMutableArray *formattedArray = [[NSMutableArray alloc] init];
            for(int i = 0; i< result.alternativesArray.count; i++) {
              SpeechRecognitionAlternative *speechRecognition = (SpeechRecognitionAlternative *)result.alternativesArray[i];
              NSDictionary *speechRecognitionDict = @{@"transcript": speechRecognition.transcript, @"confidence": [NSNumber numberWithFloat:speechRecognition.confidence]};
              [formattedArray addObject: speechRecognitionDict];
            }

            [self.audioResponse addObject: formattedArray];
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

RCT_EXPORT_METHOD(sendAudioResponse:(NSString *)title callback: (RCTResponseSenderBlock)callback)
{
  callback(@[self.audioResponse]);
}

@end
