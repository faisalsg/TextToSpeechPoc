//
//  GoogleSpeechManager.h
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface GoogleSpeechManager : NSObject<RCTBridgeModule>

+(void)startRecording;

+(void)stopRecording;

@end

NS_ASSUME_NONNULL_END
