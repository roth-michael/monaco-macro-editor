
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollection.d.ts",
      "import { ConfiguredDocumentClass, DocumentConstructor } from '../../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * A collection of world-level Document objects with a singleton instance per primary Document type.\n   * Each primary Document type has an associated subclass of WorldCollection which contains them.\n   * @see {@link Game#collections}\n   */\n  abstract class WorldCollection<T extends DocumentConstructor, Name extends string> extends DocumentCollection<\n    T,\n    Name\n  > {\n    /**\n     *\n     * @param data - An array of data objects from which to create Document instances\n     *               (default: `[]`)\n     */\n    constructor(data?: InstanceType<ConfiguredDocumentClass<T>>['data']['_source'][]);\n\n    readonly _source: InstanceType<ConfiguredDocumentClass<T>>['data']['_source'][];\n\n    /**\n     * Initialize the WorldCollection object by constructing its contained Document instances\n     */\n    protected _initialize(): void;\n\n    /**\n     * @remarks In the abstract {@link WorldCollection}, this actually returns `null` but all deriving classes implement it properly.\n     */\n    get documentName(): ConfiguredDocumentClass<T>['metadata']['name'];\n\n    /**\n     * The base Document type which is contained within this WorldCollection\n     * @defaultValue `null`\n     * @remarks\n     * All deriving classes must set this to the string matching the name of the document type they contain because it\n     * is used as value for {@link WorldCollection#documentName}.\n     */\n    static documentName: string | null;\n\n    /**\n     * Return a reference to the SidebarDirectory application for this WorldCollection, or null if it has not yet been created.\n     * @remarks\n     * In the case where `Lowercase<Name>` is not a property of {@link ui}, this actually always returns `null` but\n     * {@link RollTables} overrides this so we need to allow a wider return type.\n     */\n    get directory(): Lowercase<Name> extends keyof typeof ui\n      ? typeof ui[Lowercase<Name>]\n      : null | SidebarDirectory | undefined;\n\n    /**\n     * Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.\n     */\n    static get instance(): WorldCollection<DocumentConstructor, any>; // TODO: Find a way to type this more concretely. One option would be to separate the static and non static side of this class, which allows accessing the the static this type to use the `documentName`.\n\n    /** @override */\n    set(id: string, document: InstanceType<ConfiguredDocumentClass<T>>): this;\n\n    delete: (id: string) => boolean;\n\n    /**\n     * Import a Document from a Compendium collection, adding it to the current World.\n     * @param pack       - The CompendiumCollection instance from which to import\n     * @param id         - The ID of the compendium entry to import\n     * @param updateData - Optional additional data used to modify the imported Document before it is created\n     * @param options    - Optional arguments passed to the Document.create method\n     * @returns The imported Document instance\n     */\n    importFromCompendium(\n      pack: any, // TODO: CompendiumCollection\n      id: string,\n      updateData?: DeepPartial<InstanceType<ConfiguredDocumentClass<T>>['data']['_source']>,\n      options?: DocumentModificationContext\n    ): Promise<InstanceType<ConfiguredDocumentClass<T>>>;\n\n    /**\n     * Apply data transformations when importing a Document from a Compendium pack\n     * @param document - The source Document, or a plain data object\n     * @returns The processed data ready for world Document creation\n     */\n    fromCompendium(\n      document: InstanceType<ConfiguredDocumentClass<T>> | InstanceType<ConfiguredDocumentClass<T>>['data']['_source']\n    ): Omit<InstanceType<ConfiguredDocumentClass<T>>['data']['_source'], '_id' | 'folder'>;\n\n    /**\n     * The WorldCollection#insert method is deprecated in favor of the WorldCollection#set method and will be removed in 0.9.0\n     * @deprecated since 0.8.0\n     */\n    insert(document: InstanceType<ConfiguredDocumentClass<T>>): this;\n\n    /**\n     * The WorldCollection#remove method is deprecated in favor of the WorldCollection#delete method and will be removed in 0.9.0\n     * @deprecated since 0.8.0\n     */\n    remove(id: string): boolean;\n\n    /**\n     * The WorldCollection#entities property is deprecated in favor of the Collection#contents attribute and will be removed in 0.9.0\n     * @deprecated since 0.8.0\n     */\n    get entities(): this['contents'];\n\n    /**\n     * The WorldCollection#object property has been deprecated in favor of WorldCollection#documentClass. Support will be removed in 0.9.0\n     * @deprecated since 0.8.0\n     */\n    get object(): this['documentClass'];\n\n    /**\n     * The WorldCollection#importFromCollection method has been deprecated in favor of WorldCollection#importFromCompendium. Support for the old method name will be removed in 0.9.0\n     * @deprecated since 0.8.0\n     */\n    importFromCollection(\n      packName: string,\n      ...args: Parameters<this['importFromCompendium']> extends [any, ...infer U] ? U : never\n    ): ReturnType<this['importFromCompendium']>;\n  }\n}\n"
    ]
  