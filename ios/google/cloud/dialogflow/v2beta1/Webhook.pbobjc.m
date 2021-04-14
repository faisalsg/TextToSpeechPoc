// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/cloud/dialogflow/v2beta1/webhook.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers_RuntimeSupport.h>
#else
 #import "GPBProtocolBuffers_RuntimeSupport.h"
#endif

#import "google/cloud/dialogflow/v2beta1/Webhook.pbobjc.h"
#import "google/api/Annotations.pbobjc.h"
#import "google/cloud/dialogflow/v2beta1/Context.pbobjc.h"
#import "google/cloud/dialogflow/v2beta1/Intent.pbobjc.h"
#import "google/cloud/dialogflow/v2beta1/Session.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"

#pragma mark - Objective C Class declarations
// Forward declarations of Objective C classes that we can use as
// static values in struct initializers.
// We don't use [Foo class] because it is not a static value.
GPBObjCClassDeclaration(DFContext);
GPBObjCClassDeclaration(DFEventInput);
GPBObjCClassDeclaration(DFIntent_Message);
GPBObjCClassDeclaration(DFOriginalDetectIntentRequest);
GPBObjCClassDeclaration(DFQueryResult);
GPBObjCClassDeclaration(GPBStruct);

#pragma mark - DFWebhookRoot

@implementation DFWebhookRoot

+ (GPBExtensionRegistry*)extensionRegistry {
  // This is called by +initialize so there is no need to worry
  // about thread safety and initialization of registry.
  static GPBExtensionRegistry* registry = nil;
  if (!registry) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    registry = [[GPBExtensionRegistry alloc] init];
    // Merge in the imports (direct or indirect) that defined extensions.
    [registry addExtensions:[AnnotationsRoot extensionRegistry]];
  }
  return registry;
}

@end

#pragma mark - DFWebhookRoot_FileDescriptor

static GPBFileDescriptor *DFWebhookRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"google.cloud.dialogflow.v2beta1"
                                                 objcPrefix:@"DF"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - DFWebhookRequest

@implementation DFWebhookRequest

@dynamic session;
@dynamic responseId;
@dynamic hasQueryResult, queryResult;
@dynamic alternativeQueryResultsArray, alternativeQueryResultsArray_Count;
@dynamic hasOriginalDetectIntentRequest, originalDetectIntentRequest;

typedef struct DFWebhookRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *responseId;
  DFQueryResult *queryResult;
  DFOriginalDetectIntentRequest *originalDetectIntentRequest;
  NSString *session;
  NSMutableArray *alternativeQueryResultsArray;
} DFWebhookRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "responseId",
        .dataTypeSpecific.clazz = Nil,
        .number = DFWebhookRequest_FieldNumber_ResponseId,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFWebhookRequest__storage_, responseId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "queryResult",
        .dataTypeSpecific.clazz = GPBObjCClass(DFQueryResult),
        .number = DFWebhookRequest_FieldNumber_QueryResult,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(DFWebhookRequest__storage_, queryResult),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "originalDetectIntentRequest",
        .dataTypeSpecific.clazz = GPBObjCClass(DFOriginalDetectIntentRequest),
        .number = DFWebhookRequest_FieldNumber_OriginalDetectIntentRequest,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(DFWebhookRequest__storage_, originalDetectIntentRequest),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "session",
        .dataTypeSpecific.clazz = Nil,
        .number = DFWebhookRequest_FieldNumber_Session,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFWebhookRequest__storage_, session),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "alternativeQueryResultsArray",
        .dataTypeSpecific.clazz = GPBObjCClass(DFQueryResult),
        .number = DFWebhookRequest_FieldNumber_AlternativeQueryResultsArray,
        .hasIndex = GPBNoHasBit,
        .offset = (uint32_t)offsetof(DFWebhookRequest__storage_, alternativeQueryResultsArray),
        .flags = GPBFieldRepeated,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFWebhookRequest class]
                                     rootClass:[DFWebhookRoot class]
                                          file:DFWebhookRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFWebhookRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFWebhookResponse

@implementation DFWebhookResponse

@dynamic fulfillmentText;
@dynamic fulfillmentMessagesArray, fulfillmentMessagesArray_Count;
@dynamic source;
@dynamic hasPayload, payload;
@dynamic outputContextsArray, outputContextsArray_Count;
@dynamic hasFollowupEventInput, followupEventInput;
@dynamic endInteraction;

typedef struct DFWebhookResponse__storage_ {
  uint32_t _has_storage_[1];
  NSString *fulfillmentText;
  NSMutableArray *fulfillmentMessagesArray;
  NSString *source;
  GPBStruct *payload;
  NSMutableArray *outputContextsArray;
  DFEventInput *followupEventInput;
} DFWebhookResponse__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "fulfillmentText",
        .dataTypeSpecific.clazz = Nil,
        .number = DFWebhookResponse_FieldNumber_FulfillmentText,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, fulfillmentText),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "fulfillmentMessagesArray",
        .dataTypeSpecific.clazz = GPBObjCClass(DFIntent_Message),
        .number = DFWebhookResponse_FieldNumber_FulfillmentMessagesArray,
        .hasIndex = GPBNoHasBit,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, fulfillmentMessagesArray),
        .flags = GPBFieldRepeated,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "source",
        .dataTypeSpecific.clazz = Nil,
        .number = DFWebhookResponse_FieldNumber_Source,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, source),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "payload",
        .dataTypeSpecific.clazz = GPBObjCClass(GPBStruct),
        .number = DFWebhookResponse_FieldNumber_Payload,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, payload),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "outputContextsArray",
        .dataTypeSpecific.clazz = GPBObjCClass(DFContext),
        .number = DFWebhookResponse_FieldNumber_OutputContextsArray,
        .hasIndex = GPBNoHasBit,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, outputContextsArray),
        .flags = GPBFieldRepeated,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "followupEventInput",
        .dataTypeSpecific.clazz = GPBObjCClass(DFEventInput),
        .number = DFWebhookResponse_FieldNumber_FollowupEventInput,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(DFWebhookResponse__storage_, followupEventInput),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "endInteraction",
        .dataTypeSpecific.clazz = Nil,
        .number = DFWebhookResponse_FieldNumber_EndInteraction,
        .hasIndex = 4,
        .offset = 5,  // Stored in _has_storage_ to save space.
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeBool,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFWebhookResponse class]
                                     rootClass:[DFWebhookRoot class]
                                          file:DFWebhookRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFWebhookResponse__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFOriginalDetectIntentRequest

@implementation DFOriginalDetectIntentRequest

@dynamic source;
@dynamic version;
@dynamic hasPayload, payload;

typedef struct DFOriginalDetectIntentRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *source;
  NSString *version;
  GPBStruct *payload;
} DFOriginalDetectIntentRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "source",
        .dataTypeSpecific.clazz = Nil,
        .number = DFOriginalDetectIntentRequest_FieldNumber_Source,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFOriginalDetectIntentRequest__storage_, source),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "version",
        .dataTypeSpecific.clazz = Nil,
        .number = DFOriginalDetectIntentRequest_FieldNumber_Version,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFOriginalDetectIntentRequest__storage_, version),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "payload",
        .dataTypeSpecific.clazz = GPBObjCClass(GPBStruct),
        .number = DFOriginalDetectIntentRequest_FieldNumber_Payload,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(DFOriginalDetectIntentRequest__storage_, payload),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFOriginalDetectIntentRequest class]
                                     rootClass:[DFWebhookRoot class]
                                          file:DFWebhookRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFOriginalDetectIntentRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
