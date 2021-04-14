// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/cloud/dialogflow/v2beta1/context.proto

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

#import "google/cloud/dialogflow/v2beta1/Context.pbobjc.h"
#import "google/api/Annotations.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"

#pragma mark - Objective C Class declarations
// Forward declarations of Objective C classes that we can use as
// static values in struct initializers.
// We don't use [Foo class] because it is not a static value.
GPBObjCClassDeclaration(DFContext);
GPBObjCClassDeclaration(GPBFieldMask);
GPBObjCClassDeclaration(GPBStruct);

#pragma mark - DFContextRoot

@implementation DFContextRoot

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

#pragma mark - DFContextRoot_FileDescriptor

static GPBFileDescriptor *DFContextRoot_FileDescriptor(void) {
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

#pragma mark - DFContext

@implementation DFContext

@dynamic name;
@dynamic lifespanCount;
@dynamic hasParameters, parameters;

typedef struct DFContext__storage_ {
  uint32_t _has_storage_[1];
  int32_t lifespanCount;
  NSString *name;
  GPBStruct *parameters;
} DFContext__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "name",
        .dataTypeSpecific.clazz = Nil,
        .number = DFContext_FieldNumber_Name,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFContext__storage_, name),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "lifespanCount",
        .dataTypeSpecific.clazz = Nil,
        .number = DFContext_FieldNumber_LifespanCount,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFContext__storage_, lifespanCount),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeInt32,
      },
      {
        .name = "parameters",
        .dataTypeSpecific.clazz = GPBObjCClass(GPBStruct),
        .number = DFContext_FieldNumber_Parameters,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(DFContext__storage_, parameters),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFContext class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFContext__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFListContextsRequest

@implementation DFListContextsRequest

@dynamic parent;
@dynamic pageSize;
@dynamic pageToken;

typedef struct DFListContextsRequest__storage_ {
  uint32_t _has_storage_[1];
  int32_t pageSize;
  NSString *parent;
  NSString *pageToken;
} DFListContextsRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "parent",
        .dataTypeSpecific.clazz = Nil,
        .number = DFListContextsRequest_FieldNumber_Parent,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFListContextsRequest__storage_, parent),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "pageSize",
        .dataTypeSpecific.clazz = Nil,
        .number = DFListContextsRequest_FieldNumber_PageSize,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFListContextsRequest__storage_, pageSize),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeInt32,
      },
      {
        .name = "pageToken",
        .dataTypeSpecific.clazz = Nil,
        .number = DFListContextsRequest_FieldNumber_PageToken,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(DFListContextsRequest__storage_, pageToken),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFListContextsRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFListContextsRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFListContextsResponse

@implementation DFListContextsResponse

@dynamic contextsArray, contextsArray_Count;
@dynamic nextPageToken;

typedef struct DFListContextsResponse__storage_ {
  uint32_t _has_storage_[1];
  NSMutableArray *contextsArray;
  NSString *nextPageToken;
} DFListContextsResponse__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "contextsArray",
        .dataTypeSpecific.clazz = GPBObjCClass(DFContext),
        .number = DFListContextsResponse_FieldNumber_ContextsArray,
        .hasIndex = GPBNoHasBit,
        .offset = (uint32_t)offsetof(DFListContextsResponse__storage_, contextsArray),
        .flags = GPBFieldRepeated,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "nextPageToken",
        .dataTypeSpecific.clazz = Nil,
        .number = DFListContextsResponse_FieldNumber_NextPageToken,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFListContextsResponse__storage_, nextPageToken),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFListContextsResponse class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFListContextsResponse__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFGetContextRequest

@implementation DFGetContextRequest

@dynamic name;

typedef struct DFGetContextRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *name;
} DFGetContextRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "name",
        .dataTypeSpecific.clazz = Nil,
        .number = DFGetContextRequest_FieldNumber_Name,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFGetContextRequest__storage_, name),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFGetContextRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFGetContextRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFCreateContextRequest

@implementation DFCreateContextRequest

@dynamic parent;
@dynamic hasContext, context;

typedef struct DFCreateContextRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *parent;
  DFContext *context;
} DFCreateContextRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "parent",
        .dataTypeSpecific.clazz = Nil,
        .number = DFCreateContextRequest_FieldNumber_Parent,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFCreateContextRequest__storage_, parent),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "context",
        .dataTypeSpecific.clazz = GPBObjCClass(DFContext),
        .number = DFCreateContextRequest_FieldNumber_Context,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFCreateContextRequest__storage_, context),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFCreateContextRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFCreateContextRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFUpdateContextRequest

@implementation DFUpdateContextRequest

@dynamic hasContext, context;
@dynamic hasUpdateMask, updateMask;

typedef struct DFUpdateContextRequest__storage_ {
  uint32_t _has_storage_[1];
  DFContext *context;
  GPBFieldMask *updateMask;
} DFUpdateContextRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "context",
        .dataTypeSpecific.clazz = GPBObjCClass(DFContext),
        .number = DFUpdateContextRequest_FieldNumber_Context,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFUpdateContextRequest__storage_, context),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "updateMask",
        .dataTypeSpecific.clazz = GPBObjCClass(GPBFieldMask),
        .number = DFUpdateContextRequest_FieldNumber_UpdateMask,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(DFUpdateContextRequest__storage_, updateMask),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFUpdateContextRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFUpdateContextRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFDeleteContextRequest

@implementation DFDeleteContextRequest

@dynamic name;

typedef struct DFDeleteContextRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *name;
} DFDeleteContextRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "name",
        .dataTypeSpecific.clazz = Nil,
        .number = DFDeleteContextRequest_FieldNumber_Name,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFDeleteContextRequest__storage_, name),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFDeleteContextRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFDeleteContextRequest__storage_)
                                         flags:(GPBDescriptorInitializationFlags)(GPBDescriptorInitializationFlag_UsesClassRefs | GPBDescriptorInitializationFlag_Proto3OptionalKnown)];
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - DFDeleteAllContextsRequest

@implementation DFDeleteAllContextsRequest

@dynamic parent;

typedef struct DFDeleteAllContextsRequest__storage_ {
  uint32_t _has_storage_[1];
  NSString *parent;
} DFDeleteAllContextsRequest__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "parent",
        .dataTypeSpecific.clazz = Nil,
        .number = DFDeleteAllContextsRequest_FieldNumber_Parent,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(DFDeleteAllContextsRequest__storage_, parent),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldClearHasIvarOnZero),
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[DFDeleteAllContextsRequest class]
                                     rootClass:[DFContextRoot class]
                                          file:DFContextRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(DFDeleteAllContextsRequest__storage_)
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
