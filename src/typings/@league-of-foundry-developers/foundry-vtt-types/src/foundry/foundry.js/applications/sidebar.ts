
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\sidebar.d.ts",
      "/**\n * Render the Sidebar container, and after rendering insert Sidebar tabs\n * @typeParam P - the type of the options object\n */\ndeclare class Sidebar<P extends Sidebar.Options = Sidebar.Options> extends Application<P> {\n  /**\n   * Sidebar application instances\n   * @defaultValue `[]`\n   */\n  apps: Application[];\n\n  /**\n   * Track whether the sidebar container is currently collapsed\n   * @defaultValue `false`\n   */\n  protected _collapsed: boolean;\n\n  /**\n   * @override\n   */\n  static get defaultOptions(): Sidebar.Options;\n\n  /**\n   * Return the name of the active Sidebar tab\n   */\n  get activeTab(): string;\n\n  /**\n   * Return an Array of pop-out sidebar tab Application instances\n   */\n  get popouts(): Application[];\n\n  /**\n   * @param options - (unused)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): Sidebar.Data;\n\n  /**\n   * @override\n   */\n  protected _render(force?: boolean, options?: Application.RenderOptions): Promise<void>;\n\n  /**\n   * Activate a Sidebar tab by it's name\n   * @param tabName - The tab name corresponding to it's \"data-tab\" attribute\n   */\n  activateTab(tabName: string): void;\n\n  /**\n   * Expand the Sidebar container from a collapsed state.\n   * Take no action if the sidebar is already expanded.\n   */\n  expand(): void;\n\n  /**\n   * Collapse the sidebar to a minimized state.\n   * Take no action if the sidebar is already collapsed.\n   */\n  collapse(): void;\n\n  /**\n   * @override\n   */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * @param event - (unused)\n   * @param tabs - (unused)\n   * @override\n   */\n  protected _onChangeTab(event: MouseEvent | null, tabs: Tabs, active: string): void;\n\n  /**\n   * Handle right-click events on tab controls to trigger pop-out containers for each tab\n   * @param event - The originating contextmenu event\n   */\n  protected _onRightClickTab(event: MouseEvent): void;\n\n  /**\n   * Handle toggling of the Sidebar container's collapsed or expanded state\n   */\n  protected _onToggleCollapse(event: MouseEvent): void;\n}\n\ndeclare namespace Sidebar {\n  interface Data {\n    coreUpdate: string | false;\n    user: User;\n  }\n\n  interface Options extends Application.Options {\n    /**\n     * @defaultValue `'sidebar'`\n     */\n    id: string;\n\n    /**\n     * @defaultValue `'templates/sidebar/sidebar.html'`\n     */\n    template: string;\n\n    /**\n     * @defaultValue `false`\n     */\n    popOut: boolean;\n\n    /**\n     * @defaultValue `300`\n     */\n    width: number;\n\n    tabs: Array<\n      Tabs.Options & {\n        /**\n         * @defaultValue `'.tabs'`\n         */\n        navSelector: string;\n\n        /**\n         * @defaultValue `'#sidebar'`\n         */\n        contentSelector: string;\n\n        /**\n         * @defaultValue `'chat'`\n         */\n        initial: string;\n      }\n    >;\n  }\n}\n"
    ]
  