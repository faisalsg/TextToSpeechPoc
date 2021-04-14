//
//  AudioControllerVC.h
//  AlexaPoc
//
//  Created by Shruti on 4/13/21.
//

#import <Foundation/Foundation.h>

@protocol AudioControllerDelegate <NSObject>

- (void) processSampleData:(NSData *) data;

@end

@interface AudioControllerVC : NSObject

+ (instancetype) sharedInstance;

@property (nonatomic, weak) id<AudioControllerDelegate> delegate;

- (OSStatus) prepare;
- (OSStatus) start;
- (OSStatus) stop;

@end
