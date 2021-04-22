//
//  SpeechRecognitionServiceVC.h
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//

#import <Foundation/Foundation.h>
#import "google/cloud/speech/v1/CloudSpeech.pbrpc.h"

typedef void (^SpeechRecognitionCompletionHandler)(StreamingRecognizeResponse *object, NSError *error);

@interface SpeechRecognitionService : NSObject

+ (instancetype) sharedInstance;

- (void) streamAudioData:(NSData *) audioData
          withCompletion:(SpeechRecognitionCompletionHandler)completion;

- (void) stopStreaming;

- (BOOL) isStreaming;

@property (nonatomic, assign) double sampleRate;

@end

