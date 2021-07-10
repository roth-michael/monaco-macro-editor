
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\chatPopout.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * @typeParam P - the type of the options object\n */\ndeclare class ChatPopout<P extends Application.Options = Application.Options> extends Application<P> {\n  constructor(message: ChatPopout['message'], options?: Partial<P>);\n\n  /**\n   * The displayed Chat Message entity\n   */\n  message: ChatMessage;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   width: 300,\n   *   height: \"auto\",\n   *   classes: [\"chat-popout\"]\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /** @override */\n  get id(): string;\n\n  /** @override */\n  get title(): string;\n\n  /**\n   * @param data    - (unused)\n   * @param options - (unused)\n   * @override\n   */\n  protected _renderInner(data?: any, options?: any): ReturnType<this['message']['render']>;\n}\n"
    ]
  