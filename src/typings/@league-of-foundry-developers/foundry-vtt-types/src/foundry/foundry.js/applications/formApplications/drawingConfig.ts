
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\drawingConfig.d.ts",
      "/**\n * Configuration sheet for the Drawing object\n * @typeParam P - the type of the options object\n */\ndeclare class DrawingConfig<P extends DrawingConfig.Options = DrawingConfig.Options> extends FormApplication<\n  P,\n  DrawingConfig.Data,\n  Drawing\n> {\n  /**\n   * @param drawing - The Drawing object being configured\n   * @param options - Additional application rendering options\n   */\n  constructor(drawing: Drawing, options?: Partial<P>);\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   id: \"drawing-config\",\n   *   classes: [\"sheet\"],\n   *   template: \"templates/scene/drawing-config.html\",\n   *   width: 480,\n   *   height: 360,\n   *   configureDefault: false,\n   *   tabs: [{navSelector: \".tabs\", contentSelector: \"form\", initial: \"position\"}]\n   * });\n   * ```\n   */\n  static get defaultOptions(): DrawingConfig.Options;\n\n  /** @override */\n  get title(): string;\n\n  /**\n   * @param options - (unused)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): DrawingConfig.Data;\n\n  /**\n   * Get the names and labels of fill type choices which can be applied\n   */\n  protected static _getFillTypes(): DrawingConfig.FillTypes;\n\n  /**\n   * @param event - (unused)\n   * @override\n   */\n  protected _updateObject<F extends DrawingConfig.FormData>(\n    event: Event,\n    formData: F\n  ): Promise<this['options']['configureDefault'] extends true ? F : Drawing>;\n\n  /** @override */\n  close(options?: FormApplication.CloseOptions): Promise<void>;\n\n  /** @override */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * Reset the user Drawing configuration settings to their default values\n   */\n  protected _onResetDefaults(event: JQuery.ClickEvent): void;\n}\n\ndeclare namespace DrawingConfig {\n  interface Data {\n    author: string;\n    isDefault: Options['configureDefault'];\n    fillTypes: ReturnType<typeof DrawingConfig['_getFillTypes']>;\n    fontFamilies: Record<typeof CONFIG['fontFamilies'][number], typeof CONFIG['fontFamilies'][number]>;\n    object: DrawingConfig['object']['data'];\n    options: DrawingConfig['options'];\n    submitText: string;\n  }\n\n  type FillTypes = {\n    [Key in keyof typeof foundry.CONST['DRAWING_FILL_TYPES'] as typeof foundry.CONST['DRAWING_FILL_TYPES'][Key]]: `DRAWING.FillType${Titlecase<Key>}`;\n  };\n\n  interface FormData {\n    bezierFactor: foundry.data.DrawingData['_source']['bezierFactor'];\n    fillAlpha: foundry.data.DrawingData['_source']['fillAlpha'];\n    fillColor: foundry.data.DrawingData['_source']['fillColor'];\n    fillType: foundry.data.DrawingData['_source']['fillType'];\n    fontFamily: foundry.data.DrawingData['_source']['fontFamily'];\n    fontSize: foundry.data.DrawingData['_source']['fontSize'] | null;\n    height: foundry.data.DrawingData['_source']['height'] | null;\n    rotation: foundry.data.DrawingData['_source']['rotation'] | null;\n    strokeAlpha: foundry.data.DrawingData['_source']['strokeAlpha'];\n    strokeColor: foundry.data.DrawingData['_source']['strokeColor'];\n    strokeWidth: foundry.data.DrawingData['_source']['strokeWidth'] | null;\n    text: string;\n    textAlpha: foundry.data.DrawingData['_source']['textAlpha'];\n    textColor: foundry.data.DrawingData['_source']['textColor'];\n    texture: string;\n    width: foundry.data.DrawingData['_source']['width'] | null;\n    x: foundry.data.DrawingData['_source']['x'] | null;\n    y: foundry.data.DrawingData['_source']['y'] | null;\n    z: foundry.data.DrawingData['_source']['z'] | null;\n  }\n\n  interface Options extends FormApplication.Options {\n    configureDefault: boolean;\n\n    /**\n     * Configure a preview version of the Drawing which is not yet saved\n     */\n    preview?: boolean;\n  }\n}\n"
    ]
  