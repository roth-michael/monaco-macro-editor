
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\documentSheets\\rollTableConfig.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * The RollTable configuration sheet\n * @typeParam P - the type of the options object\n */\ndeclare class RollTableConfig<P extends DocumentSheet.Options = DocumentSheet.Options> extends DocumentSheet<\n  P,\n  RollTableConfig.Data,\n  RollTable\n> {\n  /**\n   * @param table   - The rollable table entity being configured\n   * @param options - Additional application rendering options\n   */\n  constructor(table: RollTable, options?: Partial<P>);\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   classes: [\"sheet\", \"roll-table-config\"],\n   *   template: \"templates/sheets/roll-table-config.html\",\n   *   width: 720,\n   *   height: \"auto\",\n   *   closeOnSubmit: false,\n   *   viewPermission: ENTITY_PERMISSIONS.OBSERVER,\n   *   scrollY: [\"ol.table-results\"],\n   *   dragDrop: [{dragSelector: null, dropSelector: null}]\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof DocumentSheet['defaultOptions'];\n\n  /**\n   * @override\n   */\n  get title(): string;\n\n  /**\n   * @param options - (unused)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): RollTableConfig.Data;\n\n  /**\n   * @override\n   */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * Handle creating a TableResult in the RollTable entity\n   * @param event      - The originating mouse event\n   * @param resultData - An optional object of result data to use\n   */\n  protected _onCreateResult(event: JQuery.ClickEvent | DragEvent, resultData?: object): Promise<RollTable.Result>;\n\n  /**\n   * Submit the entire form when a table result type is changed, in case there are other active changes\n   */\n  protected _onChangeResultType(event: JQuery.ClickEvent): ReturnType<RollTableConfig['_onSubmit']>;\n\n  /**\n   * Handle deleting a TableResult from the RollTable entity\n   */\n  protected _onDeleteResult(event: JQuery.ClickEvent): Promise<RollTable.Result>;\n\n  /**\n   * @override\n   */\n  protected _onDrop(event: DragEvent): ReturnType<RollTableConfig['_onCreateResult']>;\n\n  /**\n   * Handle changing the actor profile image by opening a FilePicker\n   */\n  protected _onEditImage(event: JQuery.ClickEvent): ReturnType<FilePicker['browse']>;\n\n  /**\n   * Handle a button click to re-normalize dice result ranges across all RollTable results\n   */\n  protected _onNormalizeResults(event: JQuery.ClickEvent): Promise<RollTable>;\n\n  /**\n   * Handle toggling the drawn status of the result in the table\n   */\n  protected _onLockResult(event: JQuery.ClickEvent): Promise<RollTable.Result>;\n\n  /**\n   * Reset the Table to it's original composition with all options unlocked\n   */\n  protected _onResetTable(event: JQuery.ClickEvent): Promise<RollTable.Result>;\n\n  /**\n   * Handle drawing a result from the RollTable\n   */\n  protected _onRollTable(event: JQuery.ClickEvent): Promise<void>;\n\n  /**\n   * Configure the update object workflow for the Roll Table configuration sheet\n   * Additional logic is needed here to reconstruct the results array from the editable fields on the sheet\n   * @param event    - The form submission event\n   * @param formData - The validated FormData translated into an Object for submission\n   */\n  protected _updateObject(event: Event, formData: RollTableConfig.FormData): Promise<RollTable>;\n\n  /**\n   * Display a roulette style animation when a Roll Table result is drawn from the sheet\n   * @param results - An Array of drawn table results to highlight\n   */\n  protected _animateRoll(results: RollTable.Result[]): Promise<void>;\n\n  /**\n   * Animate a \"roulette\" through the table until arriving at the final loop and a drawn result\n   */\n  protected _animateRoulette(\n    ol: HTMLOListElement,\n    drawnIds: string[],\n    nLoops: number,\n    animTime: number,\n    animOffset: number\n  ): Promise<void>;\n\n  /**\n   * Display a flashing animation on the selected result to emphasize the draw\n   * @param item - The HTML <li> item of the winning result\n   */\n  protected _flashResult(item: HTMLElement): Promise<void>;\n}\n\ndeclare namespace RollTableConfig {\n  interface Data extends DocumentSheet.Data<RollTable> {\n    results: RollTable.Result;\n    resultTypes: {\n      [Key in keyof typeof foundry.CONST['TABLE_RESULT_TYPES'] as typeof foundry.CONST['TABLE_RESULT_TYPES'][Key]]: Key;\n    };\n    entityTypes: typeof foundry.CONST['COMPENDIUM_ENTITY_TYPES'];\n    compendiumPacks: string[];\n  }\n\n  interface FormData\n    extends Pick<RollTable.Data, 'description' | 'displayRoll' | 'formula' | 'img' | 'name' | 'replacement'> {\n    [index: number]: FormDataResult;\n  }\n\n  interface FormDataResult\n    extends Pick<RollTable.Result, '_id' | 'drawn' | 'img' | 'resultId' | 'text' | 'type' | 'weight'> {\n    rangeH: RollTable.Result['range'][1];\n    rangeL: RollTable.Result['range'][0];\n  }\n}\n"
    ]
  