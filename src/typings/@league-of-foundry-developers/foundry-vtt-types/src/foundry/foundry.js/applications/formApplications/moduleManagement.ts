
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\moduleManagement.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * The Module Management Application.\n * This application provides a view of which modules are available to be used and allows for configuration of the\n * set of modules which are active within the World.\n */\ndeclare class ModuleManagement extends FormApplication<FormApplication.Options, ModuleManagement.Data, any> {\n  /**\n   * @defaultValue `'all'`\n   */\n  protected _filter: ModuleManagement.FilterName;\n\n  /**\n   * @defaultValue `false`\n   */\n  protected _expanded: boolean;\n\n  /**\n   * @defaultValue `{}`\n   */\n  protected _checked: Partial<Record<string, boolean>>;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   title: game.i18n.localize(\"MODMANAGE.Title\"),\n   *   id: \"module-management\",\n   *   template: \"templates/sidebar/apps/module-management.html\",\n   *   popOut: true,\n   *   width: 680,\n   *   height: \"auto\",\n   *   scrollY: [\".package-list\"],\n   *   closeOnSubmit: false,\n   *   filters: [{inputSelector: 'input[name=\"search\"]', contentSelector: \".package-list\"}]\n   * });\n   * ```\n   */\n  static get defaultOptions(): typeof FormApplication['defaultOptions'];\n\n  /** @override */\n  get isEditable(): boolean;\n\n  /** @override */\n  getData(options?: Application.RenderOptions): ModuleManagement.Data;\n\n  /** @override */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * @param event - (unused)\n   * @override\n   */\n  // TODO: type return value when the class' config setting is typed\n  protected _updateObject(event: Event, formData: ModuleManagement.FormData): Promise<unknown>;\n\n  /**\n   * Handle changes to a module checkbox to prompt for whether or not to enable dependencies\n   */\n  protected _onChangeCheckbox(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Handle a button-click to deactivate all modules\n   */\n  protected _onDeactivateAll(event: JQuery.ClickEvent): void;\n\n  /**\n   * Handle expanding or collapsing the display of descriptive elements\n   */\n  protected _onExpandCollapse(event: JQuery.ClickEvent): void;\n\n  /**\n   * Handle a button-click to deactivate all modules\n   */\n  protected _onFilterList(event: JQuery.ClickEvent): void;\n\n  /** @override */\n  protected _onSearchFilter(event: KeyboardEvent, query: string, rgx: RegExp, html: HTMLElement): void;\n\n  static readonly CONFIG_SETTING: 'moduleConfiguration';\n}\n\ndeclare namespace ModuleManagement {\n  interface Data {\n    editable: ModuleManagement['isEditable'];\n    filters: [Data.Filter<'all'>, Data.Filter<'active'>, Data.Filter<'inactive'>];\n    modules: Data.Module[];\n    query: undefined; // TODO: this seems to reference an undefined value (`this._query`)\n    expanded: ModuleManagement['_expanded'];\n  }\n\n  namespace Data {\n    interface Filter<F extends FilterName> {\n      id: F;\n      label: string;\n      css: ' active' | '';\n      count: number;\n    }\n\n    interface Module extends foundry.utils.Duplicated<Game.Module> {\n      active: boolean;\n      css: ' active' | '';\n      hasPacks: boolean;\n      hasScripts: boolean;\n      hasStyles: boolean;\n      systemOnly: boolean;\n      systemTag: Game['system']['id'];\n      incompatible: any; // TODO\n      unavailable: any; // TODO\n      dependencies: string[] | null;\n    }\n  }\n\n  type FilterName = 'all' | 'active' | 'inactive';\n\n  interface FormData {\n    search: string;\n  }\n}\n"
    ]
  