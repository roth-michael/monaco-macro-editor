
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\placeableObjects\\note.d.ts",
      "import { BaseNote } from '../../../../common/documents.mjs';\n\ndeclare global {\n  /**\n   * A Note is an implementation of PlaceableObject which represents an annotated location within the Scene.\n   * Each Note links to a JournalEntry entity and represents it's location on the map.\n   *\n   * @example\n   * ```typescript\n   * Note.create<Note>({\n   *   entryId: journalEntry.id,\n   *   x: 1000,\n   *   y: 1000,\n   *   icon: \"icons/my-journal-icon.svg\",\n   *   iconSize: 40,\n   *   iconTint: \"#00FF000\",\n   *   text: \"A custom label\",\n   *   fontSize: 48,\n   *   textAnchor: CONST.TEXT_ANCHOR_POINTS.CENTER,\n   *   textColor: \"#00FFFF\"\n   * });\n   * ```\n   */\n  class Note extends PlaceableObject<BaseNote> {\n    /**\n     * The associated JournalEntry which is described by this note\n     */\n    entry: JournalEntry;\n\n    /** @override */\n    static get embeddedName(): 'Note';\n\n    /**\n     * @remarks\n     * Not implemented for Note\n     */\n    get bounds(): never;\n\n    /**\n     * Return the text label which describes the Note\n     * Use a manually specified label with a fallback to the JournalEntry name\n     */\n    get text(): string;\n\n    /**\n     * The Map Note icon size\n     */\n    get size(): number;\n\n    /** @override */\n    draw(): Promise<this>;\n\n    /**\n     * Draw the ControlIcon for the Map Note\n     */\n    protected _drawControlIcon(): ControlIcon;\n\n    /**\n     * Draw the map note Tooltip as a Text object\n     */\n    protected _drawTooltip(): PreciseText;\n\n    /**\n     * Define a PIXI TextStyle object which is used for the tooltip displayed for this Note\n     */\n    protected _getTextStyle(): PIXI.TextStyle;\n\n    /** @override */\n    refresh(): this;\n\n    /** @override */\n    protected _onUpdate(data: Note.Data): Promise<this>;\n\n    /** @override */\n    protected _canHover(user: User): true;\n\n    /** @override */\n    protected _canView(user: User): boolean;\n\n    /** @override */\n    protected _onHoverIn(\n      event: PIXI.InteractionEvent,\n      options?: Parameters<PlaceableObject<BaseNote>['_onHoverIn']>[1]\n    ): false | void;\n\n    /** @override */\n    protected _onHoverOut(event: PIXI.InteractionEvent): false | void;\n\n    /** @override */\n    protected _onClickLeft2(event: PIXI.InteractionEvent): void;\n  }\n}\n\ndeclare namespace Note {\n  interface Data {\n    entryId: string;\n    fontFamily: string;\n    fontSize: number;\n    icon: string;\n    iconSize: number;\n    iconTint: string;\n    text: string;\n    textAnchor: foundry.CONST.TextAnchorPoint;\n    textColor: string;\n    x: number;\n    y: number;\n  }\n}\n"
    ]
  