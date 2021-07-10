
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\placeableObject.d.ts",
      "import { ConfiguredDocumentClass } from '../../../../types/helperTypes';\nimport { DocumentModificationOptions } from '../../../common/abstract/document.mjs';\nimport { Document } from '../../../common/abstract/module.mjs';\n\ndeclare global {\n  /**\n   * An Abstract Base Class which defines a Placeable Object which represents an Entity placed on the Canvas\n   */\n  abstract class PlaceableObject<\n    D extends Document<any, InstanceType<ConfiguredDocumentClass<typeof Scene>>> = Document<\n      any,\n      InstanceType<ConfiguredDocumentClass<typeof Scene>>\n    >\n  > extends PIXI.Container {\n    /**\n     * @param document - The Document instance which is represented by this object\n     */\n    constructor(document: D);\n\n    /**\n     * Retain a reference to the Scene within which this Placeable Object resides\n     */\n    scene: InstanceType<ConfiguredDocumentClass<typeof Scene>>;\n\n    /**\n     * A reference to the Scene embedded Document instance which this object represents\n     */\n    document: D;\n\n    /**\n     * The underlying data object which provides the basis for this placeable object\n     */\n    data: D['data'];\n\n    /**\n     * Track the field of vision for the placeable object.\n     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa\n     * @defaultValue `{ fov: undefined, los: undefined }`\n     */\n    vision: Vision;\n\n    /**\n     * A control icon for interacting with the object\n     * @defaultValue `null`\n     */\n    controlIcon: ControlIcon | null;\n\n    /**\n     * A mouse interaction manager instance which handles mouse workflows related to this object.\n     * @defaultValue `null`\n     */\n    mouseInteractionManager: MouseInteractionManager<this, ControlIcon | this> | null;\n\n    /**\n     * An indicator for whether the object is currently controlled\n     * @defaultValue `false`\n     */\n    protected _controlled: boolean;\n\n    /**\n     * An indicator for whether the object is currently a hover target\n     * @defaultValue `false`\n     */\n    protected _hover: boolean;\n\n    /**\n     * Identify the official EmbeddedEntity name for this PlaceableObject class\n     * @remarks This getter is abstract in {@link PlaceableObject}.\n     */\n    static embeddedName: string;\n\n    /**\n     * The bounding box for this PlaceableObject.\n     * This is required if the layer uses a Quadtree, otherwise it is optional\n     */\n    get bounds(): Rectangle;\n\n    /**\n     * The central coordinate pair of the placeable object based on it's own width and height\n     * @remarks `{ x: number, y: number }` has been added because of `Token.center`\n     */\n    get center(): PIXI.Point | { x: number; y: number };\n\n    /**\n     * The id of the corresponding Document which this PlaceableObject represents.\n     */\n    get id(): string;\n\n    /**\n     * The field-of-vision polygon for the object, if it has been computed\n     */\n    get fov(): this['vision']['fov'];\n\n    /**\n     * Provide a reference to the CanvasLayer which contains this PlaceableObject.\n     */\n    get layer(): 'layer' extends keyof D ? D['layer'] : PIXI.Container;\n\n    /**\n     * The line-of-sight polygon for the object, if it has been computed\n     */\n    get los(): this['vision']['los'];\n\n    /**\n     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity\n     * it represents.\n     */\n    get sheet(): 'sheet' extends keyof D ? D['sheet'] : FormApplication | null;\n\n    /**\n     * Test whether a user can perform a certain interaction with regards to a Placeable Object\n     * @param user   - The User performing the action\n     * @param action - The named action being attempted\n     * @returns Does the User have rights to perform the action?\n     */\n    can(\n      user: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      action: 'HUD' | 'configure' | 'control' | 'view' | 'create' | 'drag' | 'hover' | 'update' | 'delete' | string\n    ): boolean;\n\n    /**\n     * Can the User access the HUD for this Placeable Object?\n     * @param user  - (unused)\n     * @param event - (unused)\n     */\n    protected _canHUD(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to configure the Placeable Object?\n     * @param user  - (unused)\n     * @param event - (unused)\n     */\n    protected _canConfigure(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to control the Placeable Object?\n     * @param user  - (unused)\n     * @param event - (unused)\n     */\n    protected _canControl(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to view details of the Placeable Object?\n     * @param user  - (unused)\n     * @param event - (unused)\n     */\n    protected _canView(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to create the underlying Embedded Entity?\n     * @param event - (unused)\n     */\n    protected _canCreate(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to drag this Placeable Object?\n     * @param event - (unused)\n     */\n    protected _canDrag(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to hover on this Placeable Object?\n     * @param event - (unused)\n     */\n    protected _canHover(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to update the underlying Embedded Entity?\n     * @param event - (unused)\n     */\n    protected _canUpdate(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Does the User have permission to delete the underlying Embedded Entity?\n     * @param event - (unused)\n     */\n    protected _canDelete(user: InstanceType<ConfiguredDocumentClass<typeof User>>, event?: any): boolean;\n\n    /**\n     * Clear the display of the existing object\n     * @returns The cleared object\n     */\n    clear(): this;\n\n    /**\n     * Clone the placeable object, returning a new object with identical attributes\n     * The returned object is non-interactive, and has no assigned ID\n     * If you plan to use it permanently you should call the create method\n     *\n     * @returns A new object with identical data\n     */\n    clone(): this;\n\n    /** @override */\n    destroy(options?: Parameters<PIXI.Container['destroy']>[0]): void;\n\n    /**\n     * Draw the placeable object into its parent container\n     * @returns The drawn object\n     */\n    abstract draw(): Promise<this>;\n\n    /**\n     * Refresh the current display state of the Placeable Object\n     * @returns The refreshed object\n     * @remarks `void` has been added because of `Drawing.refresh`\n     */\n    abstract refresh(): this | void;\n\n    /**\n     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created\n     * @param data    - (unused)\n     * @param options - (unused)\n     * @param userId  - (unused)\n     * @remarks Second variant has been added because of `Token._onCreate()`\n     */\n    protected _onCreate(data: D['data']['_source'], options: DocumentModificationOptions, userId: string): void;\n\n    /**\n     * Define additional steps taken when an existing placeable object of this type is updated with new data\n     * @param options - (unused)\n     * @param userId  - (unused)\n     * @remarks Called without options and userId in Drowing._onUpdate\n     */\n    protected _onUpdate(\n      changed: DeepPartial<D['data']['_source']>,\n      options?: DocumentModificationOptions,\n      userId?: string\n    ): void;\n\n    /**\n     * Define additional steps taken when an existing placeable object of this type is deleted\n     * @param options - (unused)\n     * @param userId  - (unused)\n     */\n    protected _onDelete(options: DocumentModificationOptions, userId: string): void;\n\n    /**\n     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors\n     * @param options - Additional options which modify the control request\n     *                  (default: `{}`)\n     * @returns A flag denoting whether or not control was successful\n     */\n    control(options?: PlaceableObject.ControlOptions): boolean;\n\n    /**\n     * Additional events which trigger once control of the object is established\n     * @param options - Optional parameters which apply for specific implementations\n     *                  (unused)\n     */\n    protected _onControl(options?: PlaceableObject.ControlOptions): void;\n\n    /**\n     * Release control over a PlaceableObject, removing it from the controlled set\n     * @param options - Options which modify the releasing workflow\n     *                  (default: `{}`)\n     * @returns A Boolean flag confirming the object was released.\n     */\n    release(options?: PlaceableObject.ReleaseOptions): boolean;\n\n    /**\n     * Additional events which trigger once control of the object is released\n     * @param options - Options which modify the releasing workflow\n     *                  (unused)\n     */\n    protected _onRelease(options?: PlaceableObject.ReleaseOptions): void;\n\n    /**\n     * Rotate the PlaceableObject to a certain angle of facing\n     * @param angle - The desired angle of rotation\n     * @param snap  - Snap the angle of rotation to a certain target degree increment\n     * @returns A Promise which resolves once the rotation has completed\n     */\n    rotate(angle: number, snap: number): Promise<this>;\n\n    /**\n     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.\n     * @param options - An object which defines the rotation update parameters\n     * @param angle - An explicit angle, either this or delta must be provided\n     *                (default: `null`)\n     * @param delta - A relative angle delta, either this or the angle must be provided\n     *                (default: `0`)\n     * @param snap  - A precision (in degrees) to which the resulting angle should snap.\n     *                (default: `0`)\n     * @returns The new rotation angle for the object\n     */\n    protected _updateRotation({ angle, delta, snap }?: RotationOptions): number;\n\n    /**\n     * Obtain a shifted position for the Placeable Object\n     * @param dx - The number of grid units to shift along the X-axis\n     * @param dy - The number of grid units to shift along the Y-axis\n     * @returns The shifted target coordinates\n     */\n    protected _getShiftedPosition(dx: number, dy: number): { x: number; y: number };\n\n    /**\n     * Activate interactivity for the Placeable Object\n     */\n    activateListeners(): void;\n\n    /**\n     * Create a standard MouseInteractionManager for the PlaceableObject\n     */\n    protected _createInteractionManager(): NonNullable<this['mouseInteractionManager']>;\n\n    /**\n     * Actions that should be taken for this Placeable Object when a mouseover event occurs\n     * @see MouseInteractionManager#_handleMouseOver\n     * @param event   - The triggering canvas interaction event\n     * @param options - Options which customize event handling\n     *                  (default: `{}`)\n     */\n    protected _onHoverIn(event: PIXI.InteractionEvent, options?: HoverInOptions): false | void;\n\n    /**\n     * Actions that should be taken for this Placeable Object when a mouseout event occurs\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onHoverOut(event: PIXI.InteractionEvent): false | void;\n\n    /**\n     * Callback actions which occur on a single left-click event to assume control of the object\n     * @see MouseInteractionManager#_handleClickLeft\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onClickLeft(event: PIXI.InteractionEvent): boolean | void;\n\n    /**\n     * Callback actions which occur on a double left-click event to activate\n     * @see MouseInteractionManager#_handleClickLeft2\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onClickLeft2(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Callback actions which occur on a single right-click event to configure properties of the object\n     * @see MouseInteractionManager#_handleClickRight\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onClickRight(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Callback actions which occur on a double right-click event to configure properties of the object\n     * @see MouseInteractionManager#_handleClickRight2\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onClickRight2(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Callback actions which occur when a mouse-drag action is first begun.\n     * @see MouseInteractionManager#_handleDragStart\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onDragLeftStart(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Callback actions which occur on a mouse-move operation.\n     * @see MouseInteractionManager#_handleDragMove\n     * @param event - The triggering canvas interaction event\n     */\n    protected _onDragLeftMove(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Callback actions which occur on a mouse-move operation.\n     * @see MouseInteractionManager#_handleDragDrop\n     * @param event - The triggering canvas interaction event\n     * @remarks `ReturnType<D['update']>` is just returned by subclasses.\n     */\n    protected _onDragLeftDrop(event: PIXI.InteractionEvent): Promise<false | this | D[] | ReturnType<D['update']>>;\n\n    /**\n     * Callback actions which occur on a mouse-move operation.\n     * @see MouseInteractionManager#_handleDragCancel\n     * @param event - The triggering mouse click event\n     */\n    protected _onDragLeftCancel(event: MouseEvent): void;\n\n    /**\n     * @deprecated since 0.8.0\n     * @param options - (default: `{}`)\n     */\n    static create(\n      data:\n        | Parameters<InstanceType<ConfiguredDocumentClass<typeof Scene>>['createEmbeddedDocuments']>[1]\n        | Parameters<InstanceType<ConfiguredDocumentClass<typeof Scene>>['createEmbeddedDocuments']>[1][],\n      options?: Parameters<InstanceType<ConfiguredDocumentClass<typeof Scene>>['createEmbeddedDocuments']>[1]\n    ): ReturnType<InstanceType<ConfiguredDocumentClass<typeof Scene>>['createEmbeddedDocuments']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    update(data: Parameters<D['update']>[0], options: Parameters<D['update']>[1]): ReturnType<D['update']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    delete(options: Parameters<D['delete']>[0]): ReturnType<D['delete']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    getFlag(scope: string, key: string): ReturnType<D['getFlag']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    setFlag(scope: string, key: string, value: unknown): ReturnType<D['setFlag']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    unsetFlag(scope: string, key: string): ReturnType<D['unsetFlag']>;\n\n    /**\n     * @deprecated since 0.8.0\n     */\n    get uuid(): string;\n\n    /**\n     * @deprecated since 0.8.2\n     */\n    static get layer(): PlaceablesLayer;\n  }\n\n  namespace PlaceableObject {\n    interface ControlOptions {\n      /**\n       * Release any other controlled objects first\n       */\n      releaseOthers?: boolean;\n    }\n\n    interface ReleaseOptions {\n      trigger?: boolean;\n    }\n  }\n}\n\ninterface Vision {\n  /**\n   * @remarks\n   * This is required but has been set to optional because of PointSource\n   */\n  fov?: PIXI.Polygon | null;\n\n  /**\n   * @remarks\n   * This is required but has been set to optional because of PointSource\n   */\n  los?: PIXI.Polygon | null;\n}\n\ninterface RotationOptions {\n  /**\n   * An explicit angle, either this or delta must be provided\n   * @defaultValue `undefined`\n   */\n  angle?: number;\n\n  /**\n   * A relative angle delta, either this or the angle must be provided\n   * @defaultValue `0`\n   */\n  delta?: number;\n\n  /**\n   * A precision (in degrees) to which the resulting angle should snap. Default is 0.\n   * @defaultValue `0`\n   */\n  snap?: number;\n}\n\ninterface HoverInOptions {\n  /**\n   * Trigger hover-out behavior on sibling objects\n   *\n   * @defaultValue `true`\n   */\n  hoverOutOthers: boolean;\n}\n"
    ]
  