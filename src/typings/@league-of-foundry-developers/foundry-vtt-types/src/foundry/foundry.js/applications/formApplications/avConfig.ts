
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\avConfig.d.ts",
      "/**\n * Audio/Video Conferencing Configuration Sheet\n */\ndeclare class AVConfig extends FormApplication<AVConfig.Options, AVConfig.Data, AVMaster> {\n  /** @override */\n  static get defaultOptions(): AVConfig.Options;\n\n  /** @override */\n  getData(options: Application.RenderOptions): Promise<AVConfig.Data>;\n\n  /** @override */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * Set a section's input to enabled or disabled\n   * @param selector - Selector for the section to enable or disable\n   * @param enabled  - Whether to enable or disable this section\n   *                   (default: true)\n   */\n  protected _setConfigSectionEnabled(selector: string, enabled?: boolean): void;\n\n  /**\n   * Determine whether a given video or audio source, or audio sink has become\n   * unavailable since the last time it was set.\n   * @param sources - The available devices\n   * @param source  - The selected device\n   */\n  protected _isSourceUnavailable(sources: Record<string, string>, source: string): boolean;\n\n  /**\n   * Callback when the server type changes\n   * Will enable or disable the server section based on whether the user selected a custom server or not\n   * @param event - The event that triggered the server type change\n   */\n  protected _onServerTypeChanged(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Callback when the turn server type changes\n   * Will enable or disable the turn section based on whether the user selected a custom turn or not\n   * @param event - The event that triggered the turn server type change\n   */\n  protected _onTurnTypeChanged(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Handle the assignment of a push-to-talk/push-to-mute key\n   */\n  protected _onPTTKeyDown(event: JQuery.KeyDownEvent): void;\n\n  /**\n   * Handle the assignment of a push-to-talk/push-to-mute mouse key\n   */\n  protected _onPTTMouseDown(event: JQuery.MouseDownEvent): void;\n\n  /** @override */\n  protected _updateObject(event: Event, formData?: object): Promise<void>;\n}\n\ndeclare namespace AVConfig {\n  interface Options extends FormApplication.Options {\n    /**\n     * @defaultValue `game.i18n.localize('WEBRTC.Title')`\n     */\n    title: string;\n\n    /**\n     * @defaultValue `'av-config'`\n     */\n    id: string;\n\n    /**\n     * @defaultValue `'templates/sidebar/apps/av-config.html'`\n     */\n    template: string;\n\n    /**\n     * @defaultValue `true`\n     */\n    popOut: boolean;\n\n    /**\n     * @defaultValue `480`\n     */\n    width: number;\n\n    /**\n     * @defaultValue `'auto'`\n     */\n    height: number | 'auto';\n\n    /**\n     * @defaultValue `[{navSelector: '.tabs', contentSelector: 'form', initial: 'general'}]`\n     */\n    tabs: (Tabs.Options & { contentSelector: string; initial: string })[];\n  }\n\n  interface Data {\n    user: Game['user'];\n    modes: {\n      [Key in ValueOf<typeof AVSettings.AV_MODES>]: string;\n    };\n    voiceModes: {\n      [Key in ValueOf<typeof AVSettings.VOICE_MODES>]: string;\n    };\n    serverTypes: {\n      FVTT: string;\n      custom: string;\n    };\n    turnTypes: {\n      FVTT: string;\n      custom: string;\n    };\n    settings: AVSettings;\n    canSelectMode: boolean;\n    noSSL: boolean;\n    videoSources: Record<string, string>;\n    audioSources: Record<string, string>;\n    audioSinks: Record<string, string> | false;\n    videoSrcUnavailable: boolean;\n    audioSrcUnavailable: boolean;\n    audioSinkUnavailable: boolean;\n    audioDisabled: boolean;\n    videoDisabled: boolean;\n  }\n}\n"
    ]
  