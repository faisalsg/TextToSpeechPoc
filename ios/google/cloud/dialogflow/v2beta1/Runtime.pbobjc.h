// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/cloud/dialogflow/v2beta1/runtime.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30004
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30004 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

@class GPBFieldMask;
@class GPBTimestamp;
@class Runtime;
@class RuntimeHistory_Entry;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Enum Runtime_State

/**
 * Represents a runtime state. When a runtime is pointed to a new agent
 * version, the runtime is temporarily set to the `LOADING` state. During that
 * time, the runtime keeps on serving the previous version of the agent. After
 * the new agent version is done loading, the runtime is set back to the
 * `RUNNING` state.
 **/
typedef GPB_ENUM(Runtime_State) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  Runtime_State_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  /** Not specified. This value is not used. */
  Runtime_State_StateUnspecified = 0,

  /** Stopped. */
  Runtime_State_StateStopped = 1,

  /** Loading. */
  Runtime_State_StateLoading = 2,

  /** Running. */
  Runtime_State_StateRunning = 3,
};

GPBEnumDescriptor *Runtime_State_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL Runtime_State_IsValidValue(int32_t value);

#pragma mark - RuntimeRoot

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
GPB_FINAL @interface RuntimeRoot : GPBRootObject
@end

#pragma mark - Runtime

typedef GPB_ENUM(Runtime_FieldNumber) {
  Runtime_FieldNumber_Name = 1,
  Runtime_FieldNumber_Description_p = 2,
  Runtime_FieldNumber_AgentVersion = 3,
  Runtime_FieldNumber_State = 4,
  Runtime_FieldNumber_UpdateTime = 5,
};

/**
 * Represents an agent runtime.
 **/
GPB_FINAL @interface Runtime : GPBMessage

/**
 * Required. The unique identifier of this agent runtime.
 * Format: `projects/<Project ID>/agent/runtimes/<Runtime ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

/** Optional. The developer-provided description for this runtime. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *description_p;

/**
 * Optional. The agent version loaded into this runtime.
 * Format: `projects/<Project ID>/agent/versions/<Version ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *agentVersion;

/**
 * The state of this runtime. This field is read-only, i.e., it cannot be set
 * by create and update methods.
 **/
@property(nonatomic, readwrite) Runtime_State state;

/**
 * The last update time of this runtime. This field is read-only, i.e., it
 * cannot be set by create and update methods.
 **/
@property(nonatomic, readwrite, strong, null_resettable) GPBTimestamp *updateTime;
/** Test to see if @c updateTime has been set. */
@property(nonatomic, readwrite) BOOL hasUpdateTime;

@end

/**
 * Fetches the raw value of a @c Runtime's @c state property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t Runtime_State_RawValue(Runtime *message);
/**
 * Sets the raw value of an @c Runtime's @c state property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetRuntime_State_RawValue(Runtime *message, int32_t value);

#pragma mark - ListRuntimesRequest

typedef GPB_ENUM(ListRuntimesRequest_FieldNumber) {
  ListRuntimesRequest_FieldNumber_Parent = 1,
  ListRuntimesRequest_FieldNumber_PageSize = 2,
  ListRuntimesRequest_FieldNumber_PageToken = 3,
};

/**
 * The request message for [Runtimes.ListRuntimes].
 **/
GPB_FINAL @interface ListRuntimesRequest : GPBMessage

/**
 * Required. The agent to list all runtimes from.
 * Format: `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/**
 * Optional. The maximum number of items to return in a single page. By
 * default 100 and at most 1000.
 **/
@property(nonatomic, readwrite) int32_t pageSize;

/** Optional. The next_page_token value returned from a previous list request. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *pageToken;

@end

#pragma mark - ListRuntimesResponse

typedef GPB_ENUM(ListRuntimesResponse_FieldNumber) {
  ListRuntimesResponse_FieldNumber_RuntimesArray = 1,
  ListRuntimesResponse_FieldNumber_NextPageToken = 2,
};

/**
 * The response message for [Runtimes.ListRuntimes].
 **/
GPB_FINAL @interface ListRuntimesResponse : GPBMessage

/**
 * The list of agent runtimes. There will be a maximum number of items
 * returned based on the page_size field in the request.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<Runtime*> *runtimesArray;
/** The number of items in @c runtimesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger runtimesArray_Count;

/**
 * Token to retrieve the next page of results, or empty if there are no
 * more results in the list.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *nextPageToken;

@end

#pragma mark - GetRuntimeRequest

typedef GPB_ENUM(GetRuntimeRequest_FieldNumber) {
  GetRuntimeRequest_FieldNumber_Name = 1,
};

/**
 * The request message for [Runtimes.GetRuntime].
 **/
GPB_FINAL @interface GetRuntimeRequest : GPBMessage

/**
 * Required. The name of the runtime.
 * Format: `projects/<Project ID>/agent/runtimes/<Runtime ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

@end

#pragma mark - CreateRuntimeRequest

typedef GPB_ENUM(CreateRuntimeRequest_FieldNumber) {
  CreateRuntimeRequest_FieldNumber_Parent = 1,
  CreateRuntimeRequest_FieldNumber_Runtime = 2,
};

/**
 * The request message for [Runtimes.CreateRuntime].
 **/
GPB_FINAL @interface CreateRuntimeRequest : GPBMessage

/**
 * Required. The agent to create a runtime for.
 * Format: `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/** Required. The runtime to create. */
@property(nonatomic, readwrite, strong, null_resettable) Runtime *runtime;
/** Test to see if @c runtime has been set. */
@property(nonatomic, readwrite) BOOL hasRuntime;

@end

#pragma mark - UpdateRuntimeRequest

typedef GPB_ENUM(UpdateRuntimeRequest_FieldNumber) {
  UpdateRuntimeRequest_FieldNumber_Runtime = 1,
  UpdateRuntimeRequest_FieldNumber_UpdateMask = 2,
};

/**
 * The request message for [Runtimes.UpdateRuntime].
 **/
GPB_FINAL @interface UpdateRuntimeRequest : GPBMessage

/**
 * Required. The runtime to update.
 * Format: `projects/<Project ID>/agent/runtimes/<Runtime ID>`.
 **/
@property(nonatomic, readwrite, strong, null_resettable) Runtime *runtime;
/** Test to see if @c runtime has been set. */
@property(nonatomic, readwrite) BOOL hasRuntime;

/** Optional. The mask to control which fields get updated. */
@property(nonatomic, readwrite, strong, null_resettable) GPBFieldMask *updateMask;
/** Test to see if @c updateMask has been set. */
@property(nonatomic, readwrite) BOOL hasUpdateMask;

@end

#pragma mark - DeleteRuntimeRequest

typedef GPB_ENUM(DeleteRuntimeRequest_FieldNumber) {
  DeleteRuntimeRequest_FieldNumber_Name = 1,
};

/**
 * The request message for [Runtimes.DeleteRuntime].
 **/
GPB_FINAL @interface DeleteRuntimeRequest : GPBMessage

/**
 * Required. The name of the runtime to delete.
 * Format: `projects/<Project ID>/agent/runtimes/<Runtime ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

@end

#pragma mark - GetRuntimeHistoryRequest

typedef GPB_ENUM(GetRuntimeHistoryRequest_FieldNumber) {
  GetRuntimeHistoryRequest_FieldNumber_Name = 1,
  GetRuntimeHistoryRequest_FieldNumber_PageSize = 2,
  GetRuntimeHistoryRequest_FieldNumber_PageToken = 3,
};

/**
 * The request message for [Runtimes.GetRuntimeHistory].
 **/
GPB_FINAL @interface GetRuntimeHistoryRequest : GPBMessage

/**
 * Required. The name of the runtime to retrieve history for.
 * Format: `projects/<Project ID>/agent/runtime`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

/**
 * Optional. The maximum number of items to return in a single page. By
 * default 100 and at most 1000.
 **/
@property(nonatomic, readwrite) int32_t pageSize;

/** Optional. The next_page_token value returned from a previous list request. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *pageToken;

@end

#pragma mark - RuntimeHistory

typedef GPB_ENUM(RuntimeHistory_FieldNumber) {
  RuntimeHistory_FieldNumber_EntriesArray = 1,
  RuntimeHistory_FieldNumber_NextPageToken = 2,
};

/**
 * The response message for [Runtimes.GetRuntimeHistory].
 **/
GPB_FINAL @interface RuntimeHistory : GPBMessage

/**
 * The list of agent runtimes. There will be a maximum number of items
 * returned based on the page_size field in the request.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<RuntimeHistory_Entry*> *entriesArray;
/** The number of items in @c entriesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entriesArray_Count;

/**
 * Token to retrieve the next page of results, or empty if there are no
 * more results in the list.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *nextPageToken;

@end

#pragma mark - RuntimeHistory_Entry

typedef GPB_ENUM(RuntimeHistory_Entry_FieldNumber) {
  RuntimeHistory_Entry_FieldNumber_Description_p = 1,
  RuntimeHistory_Entry_FieldNumber_AgentVersion = 4,
  RuntimeHistory_Entry_FieldNumber_CreateTime = 5,
};

/**
 * Represents a runtime history entry.
 **/
GPB_FINAL @interface RuntimeHistory_Entry : GPBMessage

/** The agent version loaded into this runtime history entry. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *agentVersion;

/** The developer-provided description for this runtime history entry. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *description_p;

/** The creation time of this runtime history entry. */
@property(nonatomic, readwrite, strong, null_resettable) GPBTimestamp *createTime;
/** Test to see if @c createTime has been set. */
@property(nonatomic, readwrite) BOOL hasCreateTime;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
