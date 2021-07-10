
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\abstract\\data.mjs.d.ts",
      "import Document from './document.mjs';\nimport EmbeddedCollection from './embedded-collection.mjs';\nimport {\n  DocumentConstructor,\n  PropertiesToSource,\n  PropertyTypeToSourceParameterType,\n  ToObjectFalseType\n} from '../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * A schema entry which describes a field of DocumentData\n   * @typeparam T - the inner type of the document field\n   */\n  interface DocumentField<T> {\n    /**\n     * An object which defines the data type of this field\n     */\n    type: object;\n\n    /**\n     * Is this field required to have an assigned value? Default is false.\n     */\n    required: boolean;\n\n    /**\n     * Can the field be populated by a null value? Default is true.\n     */\n    nullable?: boolean;\n\n    /**\n     * A static default value or a function which assigns a default value\n     */\n    default?: PropertyTypeToSourceParameterType<T> | ((data?: object) => T);\n\n    collection?: boolean;\n\n    /**\n     * An optional cleaning function which sanitizes input data to this field\n     */\n    clean?: (input: unknown) => T;\n\n    /**\n     * A function which asserts that the value of this field is valid\n     */\n    validate?: (value: T) => boolean;\n\n    /**\n     * An error message which is displayed if validation fails\n     */\n    validationError?: string;\n\n    /**\n     * Is the field an embedded Document collection?\n     */\n    isCollection?: boolean;\n  }\n\n  /**\n   * The schema of a Document\n   */\n  type DocumentSchema = Partial<Record<string, DocumentField<any>>>;\n}\n\n/**\n * The abstract base class which defines the data schema contained within a Document.\n * @typeParam ConcreteDocumentSchema - the schema of the document data\n * @typeParam PropertiesData - the runtime document properties of the the DocumentData\n * @typeParam SourceData - the type of the `_source` property\n * @typeParam ConstructorData - the data to construct a new instance of this DocumentData\n * @typeParam ConcreteDocument - the document, the document data belongs to\n */\ndeclare abstract class DocumentData<\n  ConcreteDocumentSchema extends DocumentSchema,\n  PropertiesData extends object,\n  SourceData extends object = PropertiesToSource<PropertiesData>,\n  ConstructorData extends object = DeepPartial<SourceData>,\n  ConcreteDocument extends Document<any, any> | null = null\n> {\n  /**\n   * @param data     - Initial data used to construct the data object\n   *                   (default: `{}`)\n   * @param document - The document to which this data object belongs\n   *                   (default: `null`)\n   */\n  constructor(data?: ConstructorData, document?: ConcreteDocument | null);\n\n  /**\n   * An immutable reverse-reference to the Document to which this data belongs, possibly null.\n   */\n  readonly document: ConcreteDocument | null;\n\n  /**\n   * The source data object. The contents of this object can be updated, but the object itself may not be replaced.\n   */\n  readonly _source: SourceData;\n\n  /**\n   * The primary identifier for the Document to which this data object applies.\n   * This identifier is unique within the parent collection which contains the Document.\n   * @defaultValue `null`\n   */\n  _id: string | null;\n\n  /**\n   * Define the data schema for documents of this type.\n   * The schema is populated the first time it is accessed and cached for future reuse.\n   *\n   * @remarks This method needs to be implemented by subclasses.\n   */\n  static defineSchema(): DocumentSchema;\n\n  /**\n   * Define the data schema for documents of this type.\n   */\n  static get schema(): DocumentSchema;\n\n  /**\n   * Define the data schema for this document instance.\n   */\n  get schema(): ConcreteDocumentSchema;\n\n  /**\n   * Initialize the source data object in-place\n   */\n  _initializeSource(data: ConstructorData): SourceData;\n\n  /**\n   * Get the default value for a schema field, conditional on the provided data\n   * @param field - The configured data field\n   * @param data  - The provided data object\n   * @returns The default value for the field\n   */\n  protected static _getFieldDefaultValue<ConcreteDocumentField extends DocumentField<any>>(\n    field: ConcreteDocumentField,\n    data: object\n  ): ConcreteDocumentField extends { default?: undefined }\n    ? undefined\n    : ConcreteDocumentField extends { default: (data?: object) => infer V }\n    ? V\n    : ConcreteDocumentField['default'];\n\n  /**\n   * Initialize the instance by copying data from the source object to instance attributes.\n   */\n  protected _initialize(): void;\n\n  /**\n   * Initialize the value for a given data type\n   * @param type  - The type of the data field\n   * @param value - The un-initialized value\n   * @returns The initialized value\n   */\n  protected _initializeType(type: undefined, value: unknown): void;\n  protected _initializeType<Value extends object>(type: typeof Object, value: Value): Value;\n  protected _initializeType<Type extends typeof String | typeof Number | typeof Boolean>(\n    type: Type,\n    value: ReturnType<Type> | Parameters<Type>[0]\n  ): ReturnType<Type>;\n  protected _initializeType<Value extends Array<any> | ConstructorParameters<typeof Array>>(\n    type: typeof Array,\n    value: Value\n  ): Value extends Array<any> ? Value : Array<any>;\n  protected _initializeType<Value extends number | string>(type: typeof Date, value: Value): number;\n  protected _initializeType<Type extends ConstructorOf<Document<any, any>>>(\n    type: Type,\n    value: ConstructorParameters<Type>[0]\n  ): InstanceType<Type>; // TODO: Actually this returns an instance of the subclass configured in CONFIG\n  protected _initializeType<Type extends ConstructorOf<AnyDocumentData>>(\n    type: Type,\n    value: ConstructorParameters<Type>[0]\n  ): InstanceType<Type>;\n\n  /**\n   * Validate the data contained in the document to check for type and content\n   * This function throws an error if data within the document is not valid\n   *\n   * @param changes  - Only validate the keys of an object that was changed.\n   * @param children - Validate the data of child embedded documents? Default is true.\n   * @param clean    - Apply field-specific cleaning functions to the provided value.\n   * @param replace  - Replace any invalid values with valid defaults? Default is false.\n   * @param strict   - If strict, will throw errors for any invalid data. Default is false.\n   * @returns An indicator for whether or not the document contains valid data\n   */\n  validate({\n    changes,\n    children,\n    clean,\n    replace,\n    strict\n  }: {\n    changes?: DeepPartial<ConstructorData>;\n    children?: boolean;\n    clean?: boolean;\n    replace?: boolean;\n    strict?: boolean;\n  }): boolean;\n\n  /**\n   * Build and return the error message for a Missing Field\n   * @param name  - The named field that is missing\n   * @param field - The configured DocumentField from the Schema\n   * @returns The error message\n   */\n  protected _getMissingFieldErrorMessage(name: string, field: DocumentField<unknown>): string;\n\n  /**\n   * Build and return the error message for an Invalid Field Value\n   * @param name  - The named field that is invalid\n   * @param field - The configured DocumentField from the Schema\n   * @param value - The value that is invalid\n   * @returns The error message\n   */\n  protected _getInvalidFieldValueErrorMessage(name: string, field: DocumentField<unknown>, value: unknown): string;\n\n  /**\n   * Validate a single field in the data object.\n   * Assert that required fields are present and that each value passes it's validator function if one is provided.\n   * @param name     - The named field being validated\n   * @param field    - The configured DocumentField from the Schema\n   * @param value    - The current field value\n   * @param children - Validate the data of child embedded documents? Default is true.\n   *                   (default: `true`)\n   */\n  protected _validateField<Name extends keyof ConcreteDocumentSchema>(\n    name: Name,\n    field: ConcreteDocumentSchema[Name],\n    value: unknown,\n    { children }: { children?: boolean }\n  ): void;\n\n  /**\n   * Jointly validate the overall document after each field has been individually validated.\n   * Throw an Error if any issue is encountered.\n   *\n   * @remarks\n   * The base implementation doesn't do anything. Supposedly, subclasses can implement their own validation here.\n   */\n  protected _validateDocument(): void;\n\n  /**\n   * Reset the state of this data instance back to mirror the contained source data, erasing any changes.\n   */\n  reset(): void;\n\n  /**\n   * Update the data by applying a new data object. Data is compared against and merged with the existing data.\n   * Updating data which already exists is strict - it must pass validation or else the update is rejected.\n   * An object is returned which documents the set of changes which were applied to the original data.\n   * @see foundry.utils.mergeObject\n   * @param data    - New values with which to update the Data object\n   *                  (default: `{}`)\n   * @param options - Options which determine how the new data is merged\n   *                  (default: `{}`)\n   * @returns The changed keys and values which are different than the previous data\n   */\n  update<U>(\n    data?: Expanded<U> extends DeepPartial<ConstructorData> ? U : DeepPartial<ConstructorData>,\n    options?: UpdateOptions\n  ): Expanded<U> extends DeepPartial<SourceData> ? DeepPartial<U> : DeepPartial<SourceData>;\n\n  /**\n   * Update an EmbeddedCollection using an array of provided document data\n   * @param collection   - The EmbeddedCollection to update\n   * @param documentData - An array of provided Document data\n   * @param options      - Additional options which modify how the collection is updated\n   *                       (default: `{}`)\n   */\n  updateCollection<T extends DocumentConstructor>(\n    collection: EmbeddedCollection<T, this>,\n    documentData: DeepPartial<InstanceType<T>['data']['_source']>[],\n    options?: UpdateOptions\n  ): void;\n\n  /**\n   * Copy and transform the DocumentData into a plain object.\n   * Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.\n   * @param source - Draw values from the underlying data source rather than transformed values\n   *                 (default: `true`)\n   * @returns The extracted primitive object\n   */\n  toObject(source?: true): ReturnType<this['toJSON']>;\n  toObject(source: false): {\n    [Key in keyof ConcreteDocumentSchema as string extends Key ? never : Key]: Key extends keyof this\n      ? ToObjectFalseType<this[Key]>\n      : undefined;\n  };\n\n  /**\n   * Extract the source data for the DocumentData into a simple object format that can be serialized.\n   * @returns The document source data expressed as a plain object\n   */\n  toJSON(): SourceData;\n\n  /**\n   * Create a DocumentData instance using a provided serialized JSON string.\n   * @param json - Serialized document data in string format\n   * @returns constructed data instance\n   */\n  static fromJSON<ConcreteDocumentData extends AnyDocumentData>(\n    this: ConcreteDocumentData,\n    json: string\n  ): ConcreteDocumentData;\n}\n\ninterface UpdateOptions {\n  diff?: boolean;\n  recursive?: boolean;\n  insertValues?: boolean;\n  insertKeys?: boolean;\n  enforceTypes?: boolean;\n}\n\nexport default DocumentData;\n\nexport type AnyDocumentData = DocumentData<any, any, any, any, any>;\n"
    ]
  