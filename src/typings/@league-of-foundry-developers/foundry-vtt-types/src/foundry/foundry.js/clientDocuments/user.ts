
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\user.d.ts",
      "import { ConfiguredDocumentClass } from '../../../types/helperTypes';\nimport { DocumentDataType, DocumentModificationOptions } from '../../common/abstract/document.mjs';\n\ndeclare global {\n  /**\n   * The client-side User document which extends the common BaseUser model.\n   * Each User document contains UserData which defines its data schema.\n   *\n   * @see {@link data.UserData}               The User data schema\n   * @see {@link documents.Users}             The world-level collection of User documents\n   * @see {@link applications.UserConfig}     The User configuration application\n   */\n  class User extends ClientDocumentMixin(foundry.documents.BaseUser) {\n    /**\n     * @param data - Initial data provided to construct the User document\n     *               (default: `{}`)\n     */\n    constructor(\n      data?: ConstructorParameters<ConstructorOf<foundry.documents.BaseUser>>[0],\n      context?: ConstructorParameters<ConstructorOf<foundry.documents.BaseUser>>[1]\n    );\n\n    /**\n     * Track whether the user is currently active in the game\n     * @defaultValue `false`\n     */\n    active: boolean;\n\n    /**\n     * Track references to the current set of Tokens which are targeted by the User\n     */\n    targets: UserTargets;\n\n    /**\n     * Track the ID of the Scene that is currently being viewed by the User\n     * @defaultValue `null`\n     */\n    viewedScene: string | null;\n\n    /**\n     * Return the User avatar icon or the controlled actor's image\n     */\n    get avatar(): string;\n\n    // TODO: Replace return type with ReturnType<Game['actors']['get']> once this is possible\n    /**\n     * Return the Actor instance of the user's impersonated character (or undefined)\n     */\n    get character(): InstanceType<ConfiguredDocumentClass<typeof Actor>> | undefined;\n\n    /**\n     * A convenience shortcut for the permissions object of the current User\n     */\n    get permissions(): foundry.data.UserData['permissions'];\n\n    /**\n     * A flag for whether the current User is a Trusted Player\n     */\n    get isTrusted(): boolean;\n\n    /**\n     * A flag for whether this User is the connected client\n     */\n    get isSelf(): boolean;\n\n    /**\n     * Assign a Macro to a numbered hotbar slot between 1 and 50\n     * @param macro    - The Macro entity to assign\n     * @param slot     - A specific numbered hotbar slot to fill\n     * @param fromSlot - An optional origin slot from which the Macro is being shifted\n     * @returns A Promise which resolves once the User update is complete\n     */\n    assignHotbarMacro(\n      macro: InstanceType<ConfiguredDocumentClass<typeof Macro>> | null,\n      slot: string | number,\n      { fromSlot }?: { fromSlot: number }\n    ): Promise<this>;\n\n    /**\n     * Assign a specific boolean permission to this user.\n     * Modifies the user permissions to grant or restrict access to a feature.\n     *\n     * @param permission - The permission name from USER_PERMISSIONS\n     * @param allowed    - Whether to allow or restrict the permission\n     */\n    assignPermission(permission: keyof typeof CONST.USER_PERMISSIONS, allowed: boolean): Promise<this>;\n\n    /**\n     * Submit User activity data to the server for broadcast to other players.\n     * This type of data is transient, persisting only for the duration of the session and not saved to any database.\n     *\n     * @param activityData - An object of User activity data to submit to the server for broadcast.\n     *                       (default: `{}`)\n     */\n    broadcastActivity(activityData?: User.ActivityData): void;\n\n    /**\n     * Get an Array of Macro Entities on this User's Hotbar by page\n     * @param page - The hotbar page number\n     *               (default: `1`)\n     */\n    getHotbarMacros(\n      page?: number\n    ): Array<{ slot: number; macro: InstanceType<ConfiguredDocumentClass<typeof Macro>> | null }>;\n\n    /**\n     * Update the set of Token targets for the user given an array of provided Token ids.\n     * @param targetIds - An array of Token ids which represents the new target set\n     *                    (default: `[]`)\n     */\n    updateTokenTargets(targetIds?: string[]): void;\n\n    /** @override  */\n    _onUpdate(\n      data: DeepPartial<DocumentDataType<foundry.documents.BaseUser>>,\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /** @override  */\n    _onDelete(options: DocumentModificationOptions, userId: string): void;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    isRole(role: Parameters<User['hasRole']>[0]): boolean;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    setPermission(permission: keyof typeof CONST.USER_PERMISSIONS, allowed: boolean): Promise<this>;\n  }\n\n  namespace User {\n    interface ActivityData {\n      /**\n       * The coordinates of the user's cursor\n       */\n      cursor?: boolean;\n\n      /**\n       * Is the user pulling focus to the cursor coordinates?\n       */\n      focus?: boolean;\n\n      /**\n       * Is the user emitting a ping at the cursor coordinates?\n       */\n      ping?: boolean;\n\n      /**\n       * Serialized Ruler coordinate data in JSON format\n       */\n      ruler?: string;\n\n      /**\n       * The id of the Scene currently being viewed by the User\n       */\n      sceneId?: string;\n\n      /**\n       * An array of Token ids which are targeted by the User\n       */\n      targets?: string[];\n    }\n  }\n}\n\nexport {};\n"
    ]
  