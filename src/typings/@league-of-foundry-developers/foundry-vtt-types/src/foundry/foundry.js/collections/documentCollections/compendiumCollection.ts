
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\compendiumCollection.d.ts",
      "import { ConfiguredDocumentClassForName, ConstructorDataType } from '../../../../types/helperTypes';\nimport { IdQuery } from '../../../common/abstract/backend.mjs';\nimport { DocumentModificationOptions } from '../../../common/abstract/document.mjs';\n\ndeclare global {\n  /**\n   * A collection of Document objects contained within a specific compendium pack.\n   * Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.\n   *\n   * @see {@link Game#packs}\n   */\n  class CompendiumCollection<T extends CompendiumCollection.Metadata> extends DocumentCollection<\n    DocumentClassForCompendiumMetadata<T>,\n    'CompendiumCollection'\n  > {\n    /** @param metadata - The compendium metadata, an object provided by game.data */\n    constructor(metadata: T);\n\n    /** The compendium metadata which defines the compendium content and location */\n    metadata: T;\n\n    /**  A subsidiary collection which contains the more minimal index of the pack */\n    index: IndexTypeForMetadata<T>;\n\n    /** A debounced function which will clear the contents of the Compendium pack if it is not accessed frequently. */\n    _flush: () => void;\n\n    /**\n     * The amount of time that Document instances within this CompendiumCollection are held in memory.\n     * Accessing the contents of the Compendium pack extends the duration of this lifetime.\n     * @defaultValue `300`\n     */\n    static CACHE_LIFETIME_SECONDS: number;\n\n    /**\n     * The named game setting which contains Compendium configurations.\n     */\n    static CONFIG_SETTING: 'compendiumConfiguration';\n\n    /** The canonical Compendium name - comprised of the originating package and the pack name */\n    get collection(): string;\n\n    /** Access the compendium configuration data for this pack */\n    get config(): CompendiumCollection.Configuration | {};\n\n    get documentName(): this['metadata']['entity'];\n\n    /** Track whether the Compendium Collection is locked for editing */\n    get locked(): boolean;\n\n    /** Track whether the Compendium Collection is private */\n    get private(): boolean;\n\n    /** A convenience reference to the label which should be used as the title for the Compendium pack. */\n    get title(): string;\n\n    get(key: string, { strict }: { strict: true }): DocumentInstanceForCompendiumMetadata<T>;\n    get(key: string, { strict }?: { strict?: false }): DocumentInstanceForCompendiumMetadata<T> | undefined;\n\n    set(id: string, document: DocumentInstanceForCompendiumMetadata<T>): this;\n\n    delete: (id: string) => boolean;\n\n    /** Load the Compendium index and cache it as the keys and values of the Collection. */\n    getIndex(): Promise<this['index']>;\n\n    /**\n     * Get a single Document from this Compendium by ID.\n     * The document may already be locally cached, otherwise it is retrieved from the server.\n     * @param id -  The requested Document id\n     * @returns The retrieved Document instance\n     */\n    getDocument(id: string): Promise<DocumentInstanceForCompendiumMetadata<T> | undefined | null>;\n\n    /**\n     * Load multiple documents from the Compendium pack using a provided query object.\n     * @param query - A database query used to retrieve documents from the underlying database\n     *                default: `{}`\n     * @returns The retrieved Document instances\n     */\n    getDocuments(query?: IdQuery): Promise<DocumentInstanceForCompendiumMetadata<T>[]>;\n\n    /**\n     * Import a Document into this Compendium Collection.\n     * @param document - The existing Document you wish to import\n     * @returns The imported Document instance\n     */\n    importDocument(\n      document: DocumentInstanceForCompendiumMetadata<T>\n    ): Promise<DocumentInstanceForCompendiumMetadata<T> | undefined>;\n\n    /**\n     * Fully import the contents of a Compendium pack into a World folder.\n     * @returns The imported Documents, now existing within the World\n     */\n    importAll({ folderId, folderName, options }: ImportAllOptions): Promise<DocumentInstanceForCompendiumMetadata<T>[]>;\n\n    /**\n     * Add a Document to the index, capturing it's relevant index attributes\n     * @param document -The document to index\n     */\n    indexDocument(document: DocumentInstanceForCompendiumMetadata<T>): void;\n\n    /**\n     * Create a new Compendium Collection using provided metadata.\n     * @param metadata - The compendium metadata used to create the new pack\n     * @param options - Additional options which modify the Compendium creation request\n     *                  default `{}`\n     */\n    static createCompendium<T extends CompendiumCollection.Metadata>(\n      metadata: T,\n      options?: Partial<DocumentModificationOptions>\n    ): Promise<CompendiumCollection<T>>;\n\n    /**\n     * Assign configuration metadata settings to the compendium pack\n     * @param settings - The object of compendium settings to define\n     *                   default: `{}`\n     * @returns A Promise which resolves once the setting is updated\n     */\n    configure(settings?: Partial<CompendiumCollection.Configuration>): Promise<CompendiumCollection.Configuration>;\n\n    /**\n     * Delete an existing world-level Compendium Collection.\n     * This action may only be performed for world-level packs by a Gamemaster User.\n     */\n    deleteCompendium(): Promise<this>;\n\n    /**\n     * Duplicate a compendium pack to the current World.\n     * @param label - A new Compendium label\n     */\n    duplicateCompendium({ label }?: { label?: string }): Promise<this>;\n\n    /**\n     * Validate that the current user is able to modify content of this Compendium pack\n     * @param requireUnlocked - `(default: true)`\n     */\n    protected _assertUserCanModify({ requireUnlocked }?: { requireUnlocked?: boolean }): true;\n\n    /**\n     * Request that a Compendium pack be migrated to the latest System data template\n     * TODO: find better type for options, used in socket dispatch\n     */\n    migrate(options?: object): Promise<this>;\n\n    _onCreateDocuments(\n      documents: DocumentInstanceForCompendiumMetadata<T>[],\n      result: DocumentInstanceForCompendiumMetadata<T>['data']['_source'][],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    _onUpdateDocuments(\n      documents: DocumentInstanceForCompendiumMetadata<T>[],\n      result: DeepPartial<DocumentInstanceForCompendiumMetadata<T>>[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    _onDeleteDocuments(\n      documents: DocumentInstanceForCompendiumMetadata<T>[],\n      result: string[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Follow-up actions taken when Documents within this Compendium pack are modified\n     */\n    protected _onModifyContents(\n      documents: DocumentInstanceForCompendiumMetadata<T>[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /** @deprecated since 0.8.0 */\n    get entity(): this['documentClass']['documentName'];\n\n    /** @deprecated since 0.8.0 */\n    getContent(): ReturnType<this['getDocuments']>;\n\n    /** @deprecated since 0.8.0 */\n    getEntry(id: string): Promise<DocumentInstanceForCompendiumMetadata<T>['data']>;\n\n    /** @deprecated since 0.8.0 */\n    getEntity(id: string): ReturnType<this['getDocument']>;\n\n    /** @deprecated since 0.8.0 */\n    importEntity(document: DocumentInstanceForCompendiumMetadata<T>): ReturnType<this['importDocument']>;\n\n    /** @deprecated since 0.8.0 */\n    createEntity(\n      data:\n        | ConstructorDataType<DocumentInstanceForCompendiumMetadata<T>['data']>\n        | (ConstructorDataType<DocumentInstanceForCompendiumMetadata<T>['data']> & Record<string, unknown>),\n      options?: Partial<DocumentModificationOptions>\n    ): ReturnType<this['documentClass']['create']>;\n\n    /** @deprecated since 0.8.0 */\n    updateEntity(\n      data: DeepPartial<\n        | ConstructorDataType<DocumentInstanceForCompendiumMetadata<T>['data']>\n        | (ConstructorDataType<DocumentInstanceForCompendiumMetadata<T>['data']> & Record<string, unknown>)\n      > & {\n        _id: string;\n      },\n      options?: Partial<DocumentModificationOptions>\n    ): ReturnType<DocumentInstanceForCompendiumMetadata<T>['update']>;\n\n    /** @deprecated since 0.8.0 */\n    deleteEntity(\n      id: string,\n      options?: Partial<DocumentModificationOptions>\n    ): ReturnType<DocumentInstanceForCompendiumMetadata<T>['delete']>;\n  }\n\n  namespace CompendiumCollection {\n    interface Configuration {\n      private: boolean;\n      locked: boolean;\n    }\n    interface Metadata {\n      entity: 'Actor' | 'Item' | 'JournalEntry' | 'Macro' | 'Playlist' | 'RollTable' | 'Scene';\n      name: string;\n      label: string;\n      path: string;\n      private: boolean;\n      package: string;\n      system?: string;\n    }\n  }\n}\n\ninterface ImportAllOptions {\n  /**\n   * An existing Folder _id to use.\n   * @defaultValue `null`\n   * */\n  folderId?: string | null;\n  /**\n   * A new Folder name to create.\n   * @defaultValue `''`\n   * */\n  folderName?: string;\n  /**\n   * Additional options forwarded to Document.createDocuments\n   * @defaultValue `{}`\n   */\n  options?: DocumentModificationContext;\n}\n\ntype DocumentClassForCompendiumMetadata<T extends CompendiumCollection.Metadata> = ConfiguredDocumentClassForName<\n  T['entity']\n>;\n\ntype DocumentInstanceForCompendiumMetadata<T extends CompendiumCollection.Metadata> = InstanceType<\n  DocumentClassForCompendiumMetadata<T>\n>;\n\ntype IndexTypeForMetadata<T extends CompendiumCollection.Metadata> = foundry.utils.Collection<\n  Pick<\n    DocumentInstanceForCompendiumMetadata<T>['data'],\n    '_id' | 'name' | 'img' | 'type' extends keyof DocumentInstanceForCompendiumMetadata<T>['data'] ? 'type' : never\n  >\n>;\n"
    ]
  