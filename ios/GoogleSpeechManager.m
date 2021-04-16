//
//  GoogleSpeechManager.m
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//

#import "GoogleSpeechManager.h"
#import "AudioControllerVC.h"
#import "SpeechRecognitionService.h"
#import <React/RCTLog.h>

#define SAMPLE_RATE 16000.0f

@implementation GoogleSpeechManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
 NSInteger eventId = 234324;
 callback(@[@(eventId)]);

 RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}

//+(void)startRecording{
//    [[AudioControllerVC sharedInstance] prepare];
////  [[SpeechRecognitionService sharedInstance] setSampleRate:SAMPLE_RATE];
//    [[AudioControllerVC sharedInstance] start];
//}
//
//+(void)stopRecording{
//  [[AudioControllerVC sharedInstance] stop];
//}

@end
