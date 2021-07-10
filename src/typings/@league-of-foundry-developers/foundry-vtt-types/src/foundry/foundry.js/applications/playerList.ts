
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\playerList.d.ts",
      "/**\n * The active Player List application\n */\ndeclare class PlayerList extends Application {\n  /**\n   * @defaultValue\n   * ```typescript\n   * {\n   *   ...super.defaultOptions,\n   *   id: 'players',\n   *   template: 'templates/user/players.html',\n   *   popOut: false\n   * }\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /** @override */\n  render(force?: boolean, options?: Application.RenderOptions): this;\n\n  /** @override */\n  getData(options?: Application.RenderOptions): PlayerList.Data | Promise<PlayerList.Data>;\n\n  /** @override */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * Return the default context options available for the Players application\n   */\n  private _getUserContextOptions(): ContextMenu.Item[];\n\n  /**\n   * Toggle display of the Players hud setting for whether or not to display offline players\n   */\n  private _onToggleOfflinePlayers(event: JQuery.ClickEvent): void;\n}\n\ndeclare namespace PlayerList {\n  /**\n   * Data object returned from the PlayerList getData function\n   */\n  interface Data {\n    /** List of users connected to Foundry */\n    users: User[];\n    /** If to show offline users */\n    showOffline: boolean;\n    /** If to hide the player list */\n    hide: boolean;\n  }\n}\n"
    ]
  