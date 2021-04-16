//
//  GoogleSpeechManager.m
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//
#import <AVFoundation/AVFoundation.h>

#import "GoogleSpeechManager.h"
#import "AudioControllerVC.h"
#import "SpeechRecognitionService.h"
#import <React/RCTLog.h>
//#import "google/cloud/speech/v1/CloudSpeech.pbrpc.h"

#define SAMPLE_RATE 16000.0f

@interface GoogleSpeechManager () <AudioControllerDelegate>
@property (nonatomic, strong) NSMutableData *audioData;
@end

@implementation GoogleSpeechManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startRecording)
{
  [[AudioControllerVC sharedInstance] prepare];
  [[SpeechRecognitionService sharedInstance] setSampleRate:SAMPLE_RATE];
  [[AudioControllerVC sharedInstance] start];
}

RCT_EXPORT_METHOD(stopRecording)
{
  [[AudioControllerVC sharedInstance] stop];
  [[SpeechRecognitionService sharedInstance] stopStreaming];
}

//RCT_EXPORT_METHOD(processSampleData:(NSData *)data)
//{
//  [self.audioData appendData:data];
//  NSInteger frameCount = [data length] / 2;
//  int16_t *samples = (int16_t *) [data bytes];
//  int64_t sum = 0;
//  for (int i = 0; i < frameCount; i++) {
//    sum += abs(samples[i]);
//  }
//  NSLog(@"audio %d %d", (int) frameCount, (int) (sum * 1.0 / frameCount));
//  
//  // We recommend sending samples in 100ms chunks
//  int chunk_size = 0.1 /* seconds/chunk */ * SAMPLE_RATE * 2 /* bytes/sample */ ; /* bytes/chunk */
//  
//  if ([self.audioData length] > chunk_size) {
//    NSLog(@"SENDING");
//    [[SpeechRecognitionService sharedInstance] streamAudioData:self.audioData
//                                                withCompletion:^(StreamingRecognizeResponse *response, NSError *error) {
//      if (error) {
//        NSLog(@"ERROR: %@", error);
//        //                                                    [[AudioControllerVC sharedInstance] stop];
//      } else if (response) {
//        BOOL finished = NO;
//        NSLog(@"RESPONSE: %@", response);
//        for (StreamingRecognitionResult *result in response.resultsArray) {
//          if (result.isFinal) {
//            finished = YES;
//          }
//        }
//        if (finished) {
//          [self stopAudio:nil];
//        }
//      }
//    }
//     ];
//    self.audioData = [[NSMutableData alloc] init];
//  }}

@end
