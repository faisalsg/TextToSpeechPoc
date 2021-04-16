// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/cloud/dialogflow/v2beta1/entity_type.proto

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

@class DFEntityType;
@class DFEntityTypeBatch;
@class DFEntityType_Entity;
@class GPBFieldMask;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Enum DFEntityType_Kind

/** Represents kinds of entities. */
typedef GPB_ENUM(DFEntityType_Kind) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  DFEntityType_Kind_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  /** Not specified. This value should be never used. */
  DFEntityType_Kind_KindUnspecified = 0,

  /**
   * Map entity types allow mapping of a group of synonyms to a canonical
   * value.
   **/
  DFEntityType_Kind_KindMap = 1,

  /**
   * List entity types contain a set of entries that do not map to canonical
   * values. However, list entity types can contain references to other entity
   * types (with or without aliases).
   **/
  DFEntityType_Kind_KindList = 2,
};

GPBEnumDescriptor *DFEntityType_Kind_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL DFEntityType_Kind_IsValidValue(int32_t value);

#pragma mark - Enum DFEntityType_AutoExpansionMode

/**
 * Represents different entity type expansion modes. Automated expansion
 * allows an agent to recognize values that have not been explicitly listed in
 * the entity (for example, new kinds of shopping list items).
 **/
typedef GPB_ENUM(DFEntityType_AutoExpansionMode) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  DFEntityType_AutoExpansionMode_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  /** Auto expansion disabled for the entity. */
  DFEntityType_AutoExpansionMode_AutoExpansionModeUnspecified = 0,

  /**
   * Allows an agent to recognize values that have not been explicitly
   * listed in the entity.
   **/
  DFEntityType_AutoExpansionMode_AutoExpansionModeDefault = 1,
};

GPBEnumDescriptor *DFEntityType_AutoExpansionMode_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL DFEntityType_AutoExpansionMode_IsValidValue(int32_t value);

#pragma mark - DFEntityTypeRoot

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
GPB_FINAL @interface DFEntityTypeRoot : GPBRootObject
@end

#pragma mark - DFEntityType

typedef GPB_ENUM(DFEntityType_FieldNumber) {
  DFEntityType_FieldNumber_Name = 1,
  DFEntityType_FieldNumber_DisplayName = 2,
  DFEntityType_FieldNumber_Kind = 3,
  DFEntityType_FieldNumber_AutoExpansionMode = 4,
  DFEntityType_FieldNumber_EntitiesArray = 6,
};

/**
 * Represents an entity type.
 * Entity types serve as a tool for extracting parameter values from natural
 * language queries.
 **/
GPB_FINAL @interface DFEntityType : GPBMessage

/**
 * Required for all methods except `create` (`create` populates the name
 * automatically.
 * The unique identifier of the entity type. Format:
 * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

/** Required. The name of the entity. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *displayName;

/** Required. Indicates the kind of entity type. */
@property(nonatomic, readwrite) DFEntityType_Kind kind;

/**
 * Optional. Indicates whether the entity type can be automatically
 * expanded.
 **/
@property(nonatomic, readwrite) DFEntityType_AutoExpansionMode autoExpansionMode;

/** Optional. The collection of entities associated with the entity type. */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType_Entity*> *entitiesArray;
/** The number of items in @c entitiesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entitiesArray_Count;

@end

/**
 * Fetches the raw value of a @c DFEntityType's @c kind property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t DFEntityType_Kind_RawValue(DFEntityType *message);
/**
 * Sets the raw value of an @c DFEntityType's @c kind property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetDFEntityType_Kind_RawValue(DFEntityType *message, int32_t value);

/**
 * Fetches the raw value of a @c DFEntityType's @c autoExpansionMode property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t DFEntityType_AutoExpansionMode_RawValue(DFEntityType *message);
/**
 * Sets the raw value of an @c DFEntityType's @c autoExpansionMode property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetDFEntityType_AutoExpansionMode_RawValue(DFEntityType *message, int32_t value);

#pragma mark - DFEntityType_Entity

typedef GPB_ENUM(DFEntityType_Entity_FieldNumber) {
  DFEntityType_Entity_FieldNumber_Value = 1,
  DFEntityType_Entity_FieldNumber_SynonymsArray = 2,
};

/**
 * Optional. Represents an entity.
 **/
GPB_FINAL @interface DFEntityType_Entity : GPBMessage

/**
 * Required.
 * For `KIND_MAP` entity types:
 *   A canonical name to be used in place of synonyms.
 * For `KIND_LIST` entity types:
 *   A string that can contain references to other entity types (with or
 *   without aliases).
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *value;

/**
 * Required. A collection of synonyms. For `KIND_LIST` entity types this
 * must contain exactly one synonym equal to `value`.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<NSString*> *synonymsArray;
/** The number of items in @c synonymsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger synonymsArray_Count;

@end

#pragma mark - DFListEntityTypesRequest

typedef GPB_ENUM(DFListEntityTypesRequest_FieldNumber) {
  DFListEntityTypesRequest_FieldNumber_Parent = 1,
  DFListEntityTypesRequest_FieldNumber_LanguageCode = 2,
  DFListEntityTypesRequest_FieldNumber_PageSize = 3,
  DFListEntityTypesRequest_FieldNumber_PageToken = 4,
};

/**
 * The request message for [EntityTypes.ListEntityTypes][google.cloud.dialogflow.v2beta1.EntityTypes.ListEntityTypes].
 **/
GPB_FINAL @interface DFListEntityTypesRequest : GPBMessage

/**
 * Required. The agent to list all entity types from.
 * Format: `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/**
 * Optional. The language to list entity synonyms for. If not specified,
 * the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

/**
 * Optional. The maximum number of items to return in a single page. By
 * default 100 and at most 1000.
 **/
@property(nonatomic, readwrite) int32_t pageSize;

/** Optional. The next_page_token value returned from a previous list request. */
@property(nonatomic, readwrite, copy, null_resettable) NSString *pageToken;

@end

#pragma mark - DFListEntityTypesResponse

typedef GPB_ENUM(DFListEntityTypesResponse_FieldNumber) {
  DFListEntityTypesResponse_FieldNumber_EntityTypesArray = 1,
  DFListEntityTypesResponse_FieldNumber_NextPageToken = 2,
};

/**
 * The response message for [EntityTypes.ListEntityTypes][google.cloud.dialogflow.v2beta1.EntityTypes.ListEntityTypes].
 **/
GPB_FINAL @interface DFListEntityTypesResponse : GPBMessage

/**
 * The list of agent entity types. There will be a maximum number of items
 * returned based on the page_size field in the request.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType*> *entityTypesArray;
/** The number of items in @c entityTypesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entityTypesArray_Count;

/**
 * Token to retrieve the next page of results, or empty if there are no
 * more results in the list.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *nextPageToken;

@end

#pragma mark - DFGetEntityTypeRequest

typedef GPB_ENUM(DFGetEntityTypeRequest_FieldNumber) {
  DFGetEntityTypeRequest_FieldNumber_Name = 1,
  DFGetEntityTypeRequest_FieldNumber_LanguageCode = 2,
};

/**
 * The request message for [EntityTypes.GetEntityType][google.cloud.dialogflow.v2beta1.EntityTypes.GetEntityType].
 **/
GPB_FINAL @interface DFGetEntityTypeRequest : GPBMessage

/**
 * Required. The name of the entity type.
 * Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

/**
 * Optional. The language to retrieve entity synonyms for. If not specified,
 * the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

@end

#pragma mark - DFCreateEntityTypeRequest

typedef GPB_ENUM(DFCreateEntityTypeRequest_FieldNumber) {
  DFCreateEntityTypeRequest_FieldNumber_Parent = 1,
  DFCreateEntityTypeRequest_FieldNumber_EntityType = 2,
  DFCreateEntityTypeRequest_FieldNumber_LanguageCode = 3,
};

/**
 * The request message for [EntityTypes.CreateEntityType][google.cloud.dialogflow.v2beta1.EntityTypes.CreateEntityType].
 **/
GPB_FINAL @interface DFCreateEntityTypeRequest : GPBMessage

/**
 * Required. The agent to create a entity type for.
 * Format: `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/** Required. The entity type to create. */
@property(nonatomic, readwrite, strong, null_resettable) DFEntityType *entityType;
/** Test to see if @c entityType has been set. */
@property(nonatomic, readwrite) BOOL hasEntityType;

/**
 * Optional. The language of entity synonyms defined in `entity_type`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

@end

#pragma mark - DFUpdateEntityTypeRequest

typedef GPB_ENUM(DFUpdateEntityTypeRequest_FieldNumber) {
  DFUpdateEntityTypeRequest_FieldNumber_EntityType = 1,
  DFUpdateEntityTypeRequest_FieldNumber_LanguageCode = 2,
  DFUpdateEntityTypeRequest_FieldNumber_UpdateMask = 3,
};

/**
 * The request message for [EntityTypes.UpdateEntityType][google.cloud.dialogflow.v2beta1.EntityTypes.UpdateEntityType].
 **/
GPB_FINAL @interface DFUpdateEntityTypeRequest : GPBMessage

/**
 * Required. The entity type to update.
 * Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 **/
@property(nonatomic, readwrite, strong, null_resettable) DFEntityType *entityType;
/** Test to see if @c entityType has been set. */
@property(nonatomic, readwrite) BOOL hasEntityType;

/**
 * Optional. The language of entity synonyms defined in `entity_type`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

/** Optional. The mask to control which fields get updated. */
@property(nonatomic, readwrite, strong, null_resettable) GPBFieldMask *updateMask;
/** Test to see if @c updateMask has been set. */
@property(nonatomic, readwrite) BOOL hasUpdateMask;

@end

#pragma mark - DFDeleteEntityTypeRequest

typedef GPB_ENUM(DFDeleteEntityTypeRequest_FieldNumber) {
  DFDeleteEntityTypeRequest_FieldNumber_Name = 1,
};

/**
 * The request message for [EntityTypes.DeleteEntityType][google.cloud.dialogflow.v2beta1.EntityTypes.DeleteEntityType].
 **/
GPB_FINAL @interface DFDeleteEntityTypeRequest : GPBMessage

/**
 * Required. The name of the entity type to delete.
 * Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *name;

@end

#pragma mark - DFBatchUpdateEntityTypesRequest

typedef GPB_ENUM(DFBatchUpdateEntityTypesRequest_FieldNumber) {
  DFBatchUpdateEntityTypesRequest_FieldNumber_Parent = 1,
  DFBatchUpdateEntityTypesRequest_FieldNumber_EntityTypeBatchUri = 2,
  DFBatchUpdateEntityTypesRequest_FieldNumber_EntityTypeBatchInline = 3,
  DFBatchUpdateEntityTypesRequest_FieldNumber_LanguageCode = 4,
  DFBatchUpdateEntityTypesRequest_FieldNumber_UpdateMask = 5,
};

typedef GPB_ENUM(DFBatchUpdateEntityTypesRequest_EntityTypeBatch_OneOfCase) {
  DFBatchUpdateEntityTypesRequest_EntityTypeBatch_OneOfCase_GPBUnsetOneOfCase = 0,
  DFBatchUpdateEntityTypesRequest_EntityTypeBatch_OneOfCase_EntityTypeBatchUri = 2,
  DFBatchUpdateEntityTypesRequest_EntityTypeBatch_OneOfCase_EntityTypeBatchInline = 3,
};

/**
 * The request message for [EntityTypes.BatchUpdateEntityTypes][google.cloud.dialogflow.v2beta1.EntityTypes.BatchUpdateEntityTypes].
 **/
GPB_FINAL @interface DFBatchUpdateEntityTypesRequest : GPBMessage

/**
 * Required. The name of the agent to update or create entity types in.
 * Format: `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/**
 * Required. The source of the entity type batch.
 *
 * For each entity type in the batch:
 * * If `name` is specified, we update an existing entity type.
 * * If `name` is not specified, we create a new entity type.
 **/
@property(nonatomic, readonly) DFBatchUpdateEntityTypesRequest_EntityTypeBatch_OneOfCase entityTypeBatchOneOfCase;

/**
 * The URI to a Google Cloud Storage file containing entity types to update
 * or create. The file format can either be a serialized proto (of
 * EntityBatch type) or a JSON object. Note: The URI must start with
 * "gs://".
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *entityTypeBatchUri;

/** The collection of entity type to update or create. */
@property(nonatomic, readwrite, strong, null_resettable) DFEntityTypeBatch *entityTypeBatchInline;

/**
 * Optional. The language of entity synonyms defined in `entity_types`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

/** Optional. The mask to control which fields get updated. */
@property(nonatomic, readwrite, strong, null_resettable) GPBFieldMask *updateMask;
/** Test to see if @c updateMask has been set. */
@property(nonatomic, readwrite) BOOL hasUpdateMask;

@end

/**
 * Clears whatever value was set for the oneof 'entityTypeBatch'.
 **/
void DFBatchUpdateEntityTypesRequest_ClearEntityTypeBatchOneOfCase(DFBatchUpdateEntityTypesRequest *message);

#pragma mark - DFBatchUpdateEntityTypesResponse

typedef GPB_ENUM(DFBatchUpdateEntityTypesResponse_FieldNumber) {
  DFBatchUpdateEntityTypesResponse_FieldNumber_EntityTypesArray = 1,
};

/**
 * The response message for [EntityTypes.BatchUpdateEntityTypes][google.cloud.dialogflow.v2beta1.EntityTypes.BatchUpdateEntityTypes].
 **/
GPB_FINAL @interface DFBatchUpdateEntityTypesResponse : GPBMessage

/** The collection of updated or created entity types. */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType*> *entityTypesArray;
/** The number of items in @c entityTypesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entityTypesArray_Count;

@end

#pragma mark - DFBatchDeleteEntityTypesRequest

typedef GPB_ENUM(DFBatchDeleteEntityTypesRequest_FieldNumber) {
  DFBatchDeleteEntityTypesRequest_FieldNumber_Parent = 1,
  DFBatchDeleteEntityTypesRequest_FieldNumber_EntityTypeNamesArray = 2,
};

/**
 * The request message for [EntityTypes.BatchDeleteEntityTypes][google.cloud.dialogflow.v2beta1.EntityTypes.BatchDeleteEntityTypes].
 **/
GPB_FINAL @interface DFBatchDeleteEntityTypesRequest : GPBMessage

/**
 * Required. The name of the agent to delete all entities types for. Format:
 * `projects/<Project ID>/agent`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/**
 * Required. The names entity types to delete. All names must point to the
 * same agent as `parent`.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<NSString*> *entityTypeNamesArray;
/** The number of items in @c entityTypeNamesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entityTypeNamesArray_Count;

@end

#pragma mark - DFBatchCreateEntitiesRequest

typedef GPB_ENUM(DFBatchCreateEntitiesRequest_FieldNumber) {
  DFBatchCreateEntitiesRequest_FieldNumber_Parent = 1,
  DFBatchCreateEntitiesRequest_FieldNumber_EntitiesArray = 2,
  DFBatchCreateEntitiesRequest_FieldNumber_LanguageCode = 3,
};

/**
 * The request message for [EntityTypes.BatchCreateEntities][google.cloud.dialogflow.v2beta1.EntityTypes.BatchCreateEntities].
 **/
GPB_FINAL @interface DFBatchCreateEntitiesRequest : GPBMessage

/**
 * Required. The name of the entity type to create entities in. Format:
 * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/** Required. The collection of entities to create. */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType_Entity*> *entitiesArray;
/** The number of items in @c entitiesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entitiesArray_Count;

/**
 * Optional. The language of entity synonyms defined in `entities`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

@end

#pragma mark - DFBatchUpdateEntitiesRequest

typedef GPB_ENUM(DFBatchUpdateEntitiesRequest_FieldNumber) {
  DFBatchUpdateEntitiesRequest_FieldNumber_Parent = 1,
  DFBatchUpdateEntitiesRequest_FieldNumber_EntitiesArray = 2,
  DFBatchUpdateEntitiesRequest_FieldNumber_LanguageCode = 3,
  DFBatchUpdateEntitiesRequest_FieldNumber_UpdateMask = 4,
};

/**
 * The response message for [EntityTypes.BatchCreateEntities][google.cloud.dialogflow.v2beta1.EntityTypes.BatchCreateEntities].
 **/
GPB_FINAL @interface DFBatchUpdateEntitiesRequest : GPBMessage

/**
 * Required. The name of the entity type to update the entities in. Format:
 * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/** Required. The collection of new entities to replace the existing entities. */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType_Entity*> *entitiesArray;
/** The number of items in @c entitiesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entitiesArray_Count;

/**
 * Optional. The language of entity synonyms defined in `entities`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

/** Optional. The mask to control which fields get updated. */
@property(nonatomic, readwrite, strong, null_resettable) GPBFieldMask *updateMask;
/** Test to see if @c updateMask has been set. */
@property(nonatomic, readwrite) BOOL hasUpdateMask;

@end

#pragma mark - DFBatchDeleteEntitiesRequest

typedef GPB_ENUM(DFBatchDeleteEntitiesRequest_FieldNumber) {
  DFBatchDeleteEntitiesRequest_FieldNumber_Parent = 1,
  DFBatchDeleteEntitiesRequest_FieldNumber_EntityValuesArray = 2,
  DFBatchDeleteEntitiesRequest_FieldNumber_LanguageCode = 3,
};

/**
 * The request message for [EntityTypes.BatchDeleteEntities][google.cloud.dialogflow.v2beta1.EntityTypes.BatchDeleteEntities].
 **/
GPB_FINAL @interface DFBatchDeleteEntitiesRequest : GPBMessage

/**
 * Required. The name of the entity type to delete entries for. Format:
 * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *parent;

/**
 * Required. The canonical `values` of the entities to delete. Note that
 * these are not fully-qualified names, i.e. they don't start with
 * `projects/<Project ID>`.
 **/
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<NSString*> *entityValuesArray;
/** The number of items in @c entityValuesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entityValuesArray_Count;

/**
 * Optional. The language of entity synonyms defined in `entities`. If not
 * specified, the agent's default language is used.
 * [More than a dozen
 * languages](https://dialogflow.com/docs/reference/language) are supported.
 * Note: languages must be enabled in the agent, before they can be used.
 **/
@property(nonatomic, readwrite, copy, null_resettable) NSString *languageCode;

@end

#pragma mark - DFEntityTypeBatch

typedef GPB_ENUM(DFEntityTypeBatch_FieldNumber) {
  DFEntityTypeBatch_FieldNumber_EntityTypesArray = 1,
};

/**
 * This message is a wrapper around a collection of entity types.
 **/
GPB_FINAL @interface DFEntityTypeBatch : GPBMessage

/** A collection of entity types. */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<DFEntityType*> *entityTypesArray;
/** The number of items in @c entityTypesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger entityTypesArray_Count;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
