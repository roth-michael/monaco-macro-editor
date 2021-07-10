
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\abstract\\embedded-collection.mjs.d.ts",
      "import _Collection from '../utils/collection.mjs';\nimport { AnyDocumentData } from './data.mjs';\nimport { DocumentConstructor, ToObjectFalseType } from '../../../types/helperTypes';\n\ntype Collection<T> = Omit<_Collection<T>, 'set' | 'delete'>;\n\ninterface CollectionConstructor {\n  new (): Collection<any>;\n  new <T>(entries?: readonly (readonly [string, T])[] | null): Collection<T>;\n  new <T>(iterable: Iterable<readonly [string, T]>): Collection<T>;\n  readonly [Symbol.species]: CollectionConstructor;\n  readonly prototype: Collection<any>;\n}\n\ndeclare const Collection: CollectionConstructor;\n\n/**\n * An extension of the Collection.\n * Used for the specific task of containing embedded Document instances within a parent Document.\n */\ndeclare class EmbeddedCollection<\n  ContainedDocumentConstructor extends DocumentConstructor,\n  ParentDocumentData extends AnyDocumentData\n> extends Collection<InstanceType<ContainedDocumentConstructor>> {\n  /**\n   * @param documentData  - The parent DocumentData instance to which this collection belongs\n   * @param sourceArray   - The source data array for the collection in the parent Document data\n   * @param documentClass - The Document class implementation contained by the collection\n   */\n  constructor(\n    documentData: ParentDocumentData,\n    sourceArray: ConstructorParameters<ContainedDocumentConstructor>[0][],\n    documentClass: ContainedDocumentConstructor\n  );\n\n  /**\n   * The parent DocumentData to which this EmbeddedCollection instance belongs.\n   */\n  readonly parent: ParentDocumentData;\n\n  /**\n   * The parent DocumentData to which this EmbeddedCollection instance belongs.\n   */\n  readonly document: ParentDocumentData['document'];\n\n  /**\n   * The Document implementation used to construct instances within this collection\n   */\n  readonly documentClass: ContainedDocumentConstructor;\n\n  /**\n   * The source data array from which the embedded collection is created\n   */\n  readonly _source: DeepPartial<InstanceType<ContainedDocumentConstructor>['data']['_source']>[];\n\n  /**\n   * Initialize the EmbeddedCollection object by constructing its contained Document instances\n   */\n  protected _initialize(): void;\n\n  set(\n    key: string,\n    value: InstanceType<ContainedDocumentConstructor>,\n    { modifySource }: { modifySource?: boolean }\n  ): this;\n\n  delete(key: string, { modifySource }: { modifySource?: boolean }): boolean;\n\n  /**\n   * Convert the EmbeddedCollection to an array of simple objects.\n   * @param source - Draw data for contained Documents from the underlying data source?\n   *                 (default: `true`)\n   * @returns The extracted array of primitive objects\n   */\n  toObject(source?: true): ReturnType<InstanceType<ContainedDocumentConstructor>['data']['toJSON']>[];\n  toObject(source: false): ToObjectFalseType<InstanceType<ContainedDocumentConstructor>['data']>[];\n}\n\nexport default EmbeddedCollection;\n"
    ]
  