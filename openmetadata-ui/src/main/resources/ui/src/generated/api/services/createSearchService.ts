/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


 /**
 * Create Search Service entity request
 */
export interface CreateSearchService {
    connection?: SearchConnection;
    /**
     * List of fully qualified names of data products this entity is part of.
     */
    dataProducts?: string[];
    /**
     * Description of search service entity.
     */
    description?: string;
    /**
     * Display Name that identifies this search service. It could be title or label from the
     * source services.
     */
    displayName?: string;
    /**
     * Fully qualified name of the domain the Search Service belongs to.
     */
    domain?: string;
    /**
     * Name that identifies the this entity instance uniquely
     */
    name: string;
    /**
     * Owners of this search service.
     */
    owners?:     EntityReference[];
    serviceType: SearchServiceType;
    /**
     * Tags for this Search Service.
     */
    tags?: TagLabel[];
}

/**
 * search Connection.
 */
export interface SearchConnection {
    config?: ConfigClass;
}

/**
 * ElasticSearch Connection.
 *
 * OpenSearch Connection.
 *
 * Custom Search Service connection to build a source that is not supported by OpenMetadata
 * yet.
 */
export interface ConfigClass {
    /**
     * Choose Auth Config Type.
     */
    authType?:            AuthConfigurationType;
    connectionArguments?: { [key: string]: any };
    /**
     * Connection Timeout in Seconds
     */
    connectionTimeoutSecs?: number;
    /**
     * Host and port of the ElasticSearch service.
     *
     * Host and port of the OpenSearch service.
     */
    hostPort?:                   string;
    sslConfig?:                  SSLConfig;
    supportsMetadataExtraction?: boolean;
    /**
     * ElasticSearch Type
     *
     * Service Type
     *
     * Custom search service type
     */
    type?:              SearchServiceType;
    connectionOptions?: { [key: string]: string };
    /**
     * Keep Alive Timeout in Seconds
     */
    keepAliveTimeoutSecs?: number;
    /**
     * OpenSearch Password for Login
     */
    password?: string;
    /**
     * Http/Https connection scheme
     */
    scheme?: string;
    /**
     * Socket Timeout in Seconds
     */
    socketTimeoutSecs?: number;
    /**
     * Truststore Password
     */
    truststorePassword?: string;
    /**
     * Truststore Path
     */
    truststorePath?: string;
    /**
     * OpenSearch Username for Login
     */
    username?: string;
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?: string;
}

/**
 * Choose Auth Config Type.
 *
 * Basic Auth Configuration for ElasticSearch
 *
 * API Key Authentication for ElasticSearch
 */
export interface AuthConfigurationType {
    /**
     * Elastic Search Password for Login
     */
    password?: string;
    /**
     * Elastic Search Username for Login
     */
    username?: string;
    /**
     * Elastic Search API Key for API Authentication
     */
    apiKey?: string;
    /**
     * Elastic Search API Key ID for API Authentication
     */
    apiKeyId?: string;
}

/**
 * SSL Config
 */
export interface SSLConfig {
    /**
     * SSL Certificates
     */
    certificates?: SSLCertificates;
    [property: string]: any;
}

/**
 * SSL Certificates
 *
 * SSL Certificates By Path
 *
 * SSL Certificates By Values
 */
export interface SSLCertificates {
    /**
     * CA Certificate Path
     */
    caCertPath?: string;
    /**
     * Client Certificate Path
     */
    clientCertPath?: string;
    /**
     * Private Key Path
     */
    privateKeyPath?: string;
    /**
     * CA Certificate Value
     */
    caCertValue?: string;
    /**
     * Client Certificate Value
     */
    clientCertValue?: string;
    /**
     * Private Key Value
     */
    privateKeyValue?: string;
    /**
     * Staging Directory Path
     */
    stagingDir?: string;
}

/**
 * ElasticSearch Type
 *
 * ElasticSearch service type
 *
 * Service Type
 *
 * OpenSearch service type
 *
 * Custom search service type
 *
 * Type of search service such as ElasticSearch or OpenSearch.
 */
export enum SearchServiceType {
    CustomSearch = "CustomSearch",
    ElasticSearch = "ElasticSearch",
    OpenSearch = "OpenSearch",
}

/**
 * Owners of this search service.
 *
 * This schema defines the EntityReferenceList type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * If true the relationship indicated by this entity reference is inherited from the parent
     * entity.
     */
    inherited?: boolean;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * This schema defines the type for labeling an entity with a Tag.
 */
export interface TagLabel {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Display Name that identifies this tag.
     */
    displayName?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Name of the tag or glossary term.
     */
    name?: string;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    style?: Style;
    tagFQN: string;
}

/**
 * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
 * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
 * relationship (see Classification.json for more details). 'Propagated` indicates a tag
 * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
 * used to determine the tag label.
 */
export enum LabelType {
    Automated = "Automated",
    Derived = "Derived",
    Manual = "Manual",
    Propagated = "Propagated",
}

/**
 * Label is from Tags or Glossary.
 */
export enum TagSource {
    Classification = "Classification",
    Glossary = "Glossary",
}

/**
 * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
 * entity must confirm the suggested labels before it is marked as 'Confirmed'.
 */
export enum State {
    Confirmed = "Confirmed",
    Suggested = "Suggested",
}

/**
 * UI Style is used to associate a color code and/or icon to entity to customize the look of
 * that entity in UI.
 */
export interface Style {
    /**
     * Hex Color Code to mark an entity such as GlossaryTerm, Tag, Domain or Data Product.
     */
    color?: string;
    /**
     * An icon to associate with GlossaryTerm, Tag, Domain or Data Product.
     */
    iconURL?: string;
}