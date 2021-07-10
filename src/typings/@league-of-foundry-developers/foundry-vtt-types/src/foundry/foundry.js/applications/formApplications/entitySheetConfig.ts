
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\entitySheetConfig.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * Entity Sheet Configuration Application\n * @typeParam P - the type of the options object\n * @typeParam E - the type of the Entity, this sheet is used to configure\n */\ndeclare class EntitySheetConfig<\n  P extends FormApplication.Options = FormApplication.Options,\n  E extends Entity = Entity\n> extends FormApplication<P, EntitySheetConfig.Data, E> {\n  /**\n   * @param entity  - The Entity object for which the sheet is being configured\n   * @param options - Additional Application options\n   */\n  constructor(entity: E, options?: Partial<P>);\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * const options = super.defaultOptions;\n   * options.id = \"sheet-config\";\n   * options.template = \"templates/sheets/sheet-config.html\";\n   * options.width = 400;\n   * ```\n   */\n  static get defaultOptions(): typeof FormApplication['defaultOptions'];\n\n  /**\n   * Add the Entity name into the window title\n   */\n  get title(): string;\n\n  /**\n   * Construct and return the data object used to render the HTML template for this form application.\n   * @param options - (unused)\n   */\n  getData(options?: Application.RenderOptions): EntitySheetConfig.Data<E>;\n\n  /**\n   * This method is called upon form submission after form data is validated\n   * @param event    - The initial triggering submission event\n   * @param formData - The object of validated form data with which to update the object\n   */\n  protected _updateObject(event: Event, formData: EntitySheetConfig.FormData): Promise<void>;\n\n  /**\n   * Initialize the configured Sheet preferences for Entities which support dynamic Sheet assignment\n   * Create the configuration structure for supported entities\n   * Process any pending sheet registrations\n   * Update the default values from settings data\n   */\n  static initializeSheets(): void;\n\n  /**\n   * Register a sheet class as a candidate which can be used to display entities of a given type\n   * @param entityClass - The Entity for which to register a new Sheet option\n   * @param scope       - Provide a unique namespace scope for this sheet\n   * @param sheetClass  - A defined Application class used to render the sheet\n   * @param label       - A human readable label for the sheet name, which will be localized\n   * @param types       - An array of entity types for which this sheet should be used\n   *                      (default: `[]`)\n   * @param makeDefault - Whether to make this sheet the default for provided types\n   *                      (default: `false`)\n   */\n  static registerSheet(\n    entityClass: ConstructorOf<Entity>,\n    scope: string,\n    sheetClass: ConstructorOf<FormApplication>,\n    { label, types, makeDefault }?: { label?: string; types?: string[]; makeDefault?: boolean }\n  ): void;\n\n  protected static _registerSheet({\n    entityClass,\n    id,\n    label,\n    sheetClass,\n    types,\n    makeDefault\n  }: Exclude<EntitySheetConfig.Config, 'action'>): void;\n\n  /**\n   * Unregister a sheet class, removing it from the list of available Applications to use for an Entity type\n   * @param entityClass - The Entity for which to register a new Sheet option\n   * @param scope       - Provide a unique namespace scope for this sheet\n   * @param sheetClass  - A defined Application class used to render the sheet\n   * @param types       - An Array of types for which this sheet should be removed\n   */\n  static unregisterSheet(\n    entityClass: ConstructorOf<Entity>,\n    scope: string,\n    sheetClass: ConstructorOf<FormApplication>,\n    { types }?: { types?: string[] }\n  ): void;\n\n  protected static _unregisterSheet({\n    entityClass,\n    id,\n    types\n  }: Pick<EntitySheetConfig.Config, 'entityClass' | 'id' | 'types'>): void;\n\n  /**\n   * @typeParam T - the string array, passed as the types parameter\n   */\n  protected static _getEntityTypes<T extends string[]>(entityClass: any, types: T): T;\n  protected static _getEntityTypes(entityClass: ConstructorOf<Entity>): string[];\n\n  /**\n   * Update the currently default Sheets using a new core world setting\n   */\n  protected static _updateDefaultSheets(setting?: Record<'Actor' | 'Item', Record<string, string>>): void;\n\n  protected _pending: EntitySheetConfig.Config[];\n}\n\ndeclare namespace EntitySheetConfig {\n  interface Config {\n    action: 'register' | 'unregister';\n    entityClass: ConstructorOf<Entity>;\n    id: string;\n    label: string;\n    sheetClass: ConstructorOf<FormApplication>;\n    types: string[];\n    makeDefault: boolean;\n  }\n\n  /**\n   * @typeParam P - the type of the options object\n   * @typeParam E - the type of the entity\n   */\n  interface Data<E extends Entity = Entity, P extends FormApplication.Options = FormApplication.Options> {\n    entityName: EntitySheetConfig<P, E>['object']['entity'];\n    isGM: User['isGM'];\n    object: foundry.utils.Duplicated<EntitySheetConfig<P, E>['object']['data']>;\n    options: EntitySheetConfig<P, E>['options'];\n    sheetClass: ReturnType<E['getFlag']> | '';\n    sheetClasses: Record<SheetClass['id'], SheetClass['label']>;\n    defaultClass: SheetClass['id'] | null;\n    blankLabel: ReturnType<Localization['localize']>;\n  }\n\n  type FormData = Pick<Data, 'defaultClass' | 'sheetClass'>;\n\n  interface SheetClass {\n    id: string | number;\n    cls?: ConstructorOf<FormApplication>;\n    label: string;\n    default: boolean;\n  }\n\n  type SheetClasses = Record<string, Record<string, SheetClass>>;\n}\n"
    ]
  