
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\combat.d.ts",
      "import { ConfiguredDocumentClass, ConstructorDataType, PropertiesToSource } from '../../../types/helperTypes';\nimport { DocumentModificationOptions } from '../../common/abstract/document.mjs';\nimport { CombatantDataProperties } from '../../common/data/data.mjs/combatantData';\n\ndeclare global {\n  /**\n   * The Combat model definition which defines common behavior of an Combat document between both client and server.\n   * Each Combat document contains CombatData which defines its data schema.\n   *\n   * @see {@link data.CombatData}               The Combat data schema\n   * @see {@link documents.Combats}             The world-level collection of Combat documents\n   * @see {@link embedded.Combatant}            The Combatant embedded document which exists within a Combat document\n   * @see {@link applications.CombatConfig}     The Combat configuration application\n   *\n   * @param data - Initial data provided to construct the Combat document\n   */\n  class Combat extends ClientDocumentMixin(foundry.documents.BaseCombat) {\n    constructor(\n      data?: ConstructorParameters<ConstructorOf<foundry.documents.BaseCombat>>[0],\n      context?: ConstructorParameters<ConstructorOf<foundry.documents.BaseCombat>>[1]\n    );\n\n    /** Track the sorted turn order of this combat encounter */\n    turns: InstanceType<ConfiguredDocumentClass<typeof Combatant>>[];\n\n    /** Record the current round, turn, and tokenId to understand changes in the encounter state */\n    protected current: RoundData;\n\n    /** Track the previous round, turn, and tokenId to understand changes in the encounter state */\n    protected previous: RoundData;\n\n    /**\n     * Track whether a sound notification is currently being played to avoid double-dipping\n     * @defaultValue `false`\n     */\n    protected _soundPlaying: boolean;\n\n    /** The configuration setting used to record Combat preferences */\n    static CONFIG_SETTING: 'combatTrackerConfig';\n\n    /** Get the Combatant who has the current turn. */\n    get combatant(): this['turns'][number];\n\n    /** The numeric round of the Combat encounter */\n    get round(): number;\n\n    /**\n     * A reference to the Scene document within which this Combat encounter occurs.\n     * If a specific Scene is not set in the Combat Data, the currently viewed scene is assumed instead.\n     */\n    get scene(): InstanceType<ConfiguredDocumentClass<typeof Scene>> | undefined;\n\n    /** Return the object of settings which modify the Combat Tracker behavior */\n    get settings(): typeof CombatEncounters['settings'];\n\n    /** Has this combat encounter been started? */\n    get started(): boolean;\n\n    /** The numeric turn of the combat round in the Combat encounter */\n    get turn(): number;\n\n    get visible(): true;\n\n    /**\n     * Set the current Combat encounter as active within the Scene.\n     * Deactivate all other Combat encounters within the viewed Scene and set this one as active\n     */\n    activate(): Promise<InstanceType<ConfiguredDocumentClass<typeof Combat>>[]>;\n\n    /** Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker */\n    endCombat(): Promise<InstanceType<ConfiguredDocumentClass<typeof Combat>> | undefined>;\n\n    /**\n     * Get a Combatant using its Token id\n     * @param tokenId - The id of the Token for which to acquire the combatant\n     */\n    getCombatantByToken(tokenId: string): ReturnType<this['combatants']['find']>;\n\n    /** Advance the combat to the next round */\n    nextRound(): Promise<this | undefined>;\n\n    /** Advance the combat to the next turn */\n    nextTurn(): Promise<this | undefined>;\n\n    /** @override */\n    prepareDerivedData(): void;\n\n    /** Rewind the combat to the previous round */\n    previousRound(): Promise<this | undefined>;\n\n    /** Rewind the combat to the previous turn */\n    previousTurn(): Promise<this | undefined>;\n\n    /** Reset all combatant initiative scores, setting the turn back to zero */\n    resetAll(): Promise<this | undefined>;\n\n    /**\n     * Roll initiative for one or multiple Combatants within the Combat entity\n     * @param ids - A Combatant id or Array of ids for which to roll\n     * @param options - Additional options which modify how initiative rolls are created or presented.\n     *                  default `{}`\n     * @returns  A promise which resolves to the updated Combat entity once updates are complete.\n     */\n    rollInitiative(ids: string | string[], options?: InitiativeOptions): Promise<this>;\n\n    /**\n     * Roll initiative for all combatants which have not already rolled\n     * @param options - Additional options forwarded to the Combat.rollInitiative method\n     *                  default `{}`\n     */\n    rollAll(options?: InitiativeOptions): this['rollInitiative'];\n\n    /**\n     * Roll initiative for all non-player actors who have not already rolled\n     * @param options - Additional options forwarded to the Combat.rollInitiative method\n     *                  default `{}`\n     */\n    rollNPC(options?: InitiativeOptions): this['rollInitiative'];\n\n    /**\n     * Assign initiative for a single Combatant within the Combat encounter.\n     * Update the Combat turn order to maintain the same combatant as the current turn.\n     * @param id - The combatant ID for which to set initiative\n     * @param value - A specific initiative value to set\n     */\n    setInitiative(id: string, value: number): Promise<void>;\n\n    /** Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name. */\n    setupTurns(): this['turns'];\n\n    /** Begin the combat encounter, advancing to round 1 and turn 1 */\n    startCombat(): Promise<this | undefined>;\n\n    /**\n     * Define how the array of Combatants is sorted in the displayed list of the tracker.\n     * This method can be overridden by a system or module which needs to display combatants in an alternative order.\n     * By default sort by initiative, next falling back to name, lastly tie-breaking by combatant id.\n     */\n    protected _sortCombatants(\n      a: InstanceType<ConfiguredDocumentClass<typeof Combatant>>,\n      b: InstanceType<ConfiguredDocumentClass<typeof Combatant>>\n    ): number;\n\n    protected _onCreate(data: this['data']['_source'], options: DocumentModificationOptions, userId: string): void;\n\n    protected _onUpdate(\n      changed: DeepPartial<this['data']['_source']>,\n      options: DocumentModificationOptions,\n      userId: string\n    ): void; //TODO Returntype could also be CombatTracker.scrollToTurn\n\n    protected _onDelete(options: DocumentModificationOptions, userId: string): void;\n\n    protected _onCreateEmbeddedDocuments(\n      embeddedName: string,\n      documents: Combatant[],\n      result: DeepPartial<PropertiesToSource<CombatantDataProperties>>[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    protected _onUpdateEmbeddedDocuments(\n      embeddedName: string,\n      documents: Combatant[],\n      result: DeepPartial<PropertiesToSource<CombatantDataProperties>>[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    protected _onDeleteEmbeddedDocuments(\n      embeddedName: string,\n      documents: Combatant[],\n      result: string[],\n      options: DocumentModificationContext,\n      userId: string\n    ): void;\n\n    /** @deprecated since 0.8.0 */\n    getCombatant(id: string): this['combatants']['get'];\n\n    /** @deprecated since 0.8.0 */\n    createCombatant(\n      data:\n        | ConstructorDataType<foundry.data.CombatData>\n        | (ConstructorDataType<foundry.data.CombatData> & Record<string, unknown>),\n      options?: DocumentModificationContext\n    ): this['createEmbeddedDocuments'];\n\n    /** @deprecated since 0.8.0 */\n    updateCombatant(\n      data: DeepPartial<\n        | ConstructorDataType<foundry.data.CombatData>\n        | (ConstructorDataType<foundry.data.CombatData> & Record<string, unknown>)\n      >,\n      options?: DocumentModificationContext\n    ): NonNullable<ReturnType<this['combatants']['get']>>['update'];\n\n    /** @deprecated since 0.8.0 */\n    deleteCombatant(\n      id: string,\n      options?: DocumentModificationContext\n    ): NonNullable<ReturnType<this['combatants']['get']>>['delete'];\n  }\n}\n\ninterface InitiativeOptions {\n  /**\n   * A non-default initiative formula to roll. Otherwise the system default is used.\n   * @defaultValue `null`\n   */\n  formula?: string | null;\n  /**\n   * Update the Combat turn after adding new initiative scores to keep the turn on the same Combatant.\n   * @defaultValue `true`\n   */\n  updateTurn?: boolean;\n  /**\n   * Additional options with which to customize created Chat Messages\n   * @defaultValue `{}`\n   */\n  messageOptions?: object; //TODO Type properly once ChatMessage is typed\n}\n\ninterface RoundData {\n  round: number | null;\n  turn: number | null;\n  tokenId: string | null;\n  combatantid: string | null;\n}\n"
    ]
  