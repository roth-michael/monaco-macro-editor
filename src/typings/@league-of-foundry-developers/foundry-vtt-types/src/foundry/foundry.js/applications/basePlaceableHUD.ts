
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\basePlaceableHUD.d.ts",
      "/**\n * An abstract base class for displaying a heads-up-display interface bound to a Placeable Object on the canvas\n * @typeParam O - the type of the PlaceableObject\n * @typeParam P - the type of the options object\n */\ndeclare abstract class BasePlaceableHUD<\n  O extends PlaceableObject<any>,\n  P extends Application.Options = Application.Options\n> extends Application<P> {\n  /**\n   * Reference a PlaceableObject this HUD is currently bound to\n   * @defaultValue `null`\n   */\n  object: O | null;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(super.defaultOptions, {\n   *   classes: [\"placeable-hud\"],\n   *   popOut: false\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /**\n   * Convenience access for the canvas layer which this HUD modifies\n   */\n  get layer(): O['layer'];\n\n  /**\n   * Bind the HUD to a new PlaceableObject and display it\n   * @param object - A PlaceableObject instance to which the HUD should be bound\n   */\n  bind(object: O): void;\n\n  /**\n   * Clear the HUD by fading out it's active HTML and recording the new display state\n   */\n  clear(): void;\n\n  /** @override */\n  _render(...args: Parameters<Application['_render']>): Promise<void>;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(this.object.data, {\n   *   id: this.id,\n   *   classes: this.options.classes.join(' '),\n   *   appId: this.appId,\n   *   isGM: game.user.isGM,\n   *   icons: CONFIG.controlIcons\n   * });\n   * ```\n   */\n  getData(options?: Application.RenderOptions): foundry.utils.Duplicated<O['data']> & {\n    id: Application['id'];\n    classes: string;\n    appId: Application['appId'];\n    isGM: boolean;\n    icons: typeof CONFIG['controlIcons'];\n  };\n\n  /**\n   * @override\n   * @remarks Returns `void`\n   */\n  setPosition({ left, top, width, height, scale }?: Partial<Application.Position>): any;\n\n  /** @override */\n  activateListeners(html: JQuery<HTMLElement>): void;\n\n  /**\n   * Toggle the visible state of all controlled objects in the Layer\n   * @param event - The originating click event\n   */\n  protected _onToggleVisibility(event: JQuery.ClickEvent): Promise<void>;\n\n  /**\n   * Toggle locked state of all controlled objects in the Layer\n   * @param event - The originating click event\n   */\n  protected _onToggleLocked(event: JQuery.ClickEvent): Promise<void>;\n\n  /**\n   * Handle sorting the z-order of the object\n   */\n  protected _onSort(up: boolean, event: JQuery.ClickEvent): Promise<void>;\n}\n"
    ]
  