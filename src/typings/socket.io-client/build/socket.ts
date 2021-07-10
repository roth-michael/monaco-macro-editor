
    export default [
      "socket.io-client\\build\\socket.d.ts",
      "import { Packet } from \"socket.io-parser\";\nimport { Manager } from \"./manager\";\nimport { DefaultEventsMap, EventNames, EventParams, EventsMap, StrictEventEmitter } from \"./typed-events\";\nexport interface SocketOptions {\n    /**\n     * the authentication payload sent when connecting to the Namespace\n     */\n    auth: {\n        [key: string]: any;\n    } | ((cb: (data: object) => void) => void);\n}\ninterface SocketReservedEvents {\n    connect: () => void;\n    connect_error: (err: Error) => void;\n    disconnect: (reason: Socket.DisconnectReason) => void;\n}\nexport declare class Socket<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents> extends StrictEventEmitter<ListenEvents, EmitEvents, SocketReservedEvents> {\n    readonly io: Manager<ListenEvents, EmitEvents>;\n    id: string;\n    connected: boolean;\n    disconnected: boolean;\n    auth: {\n        [key: string]: any;\n    } | ((cb: (data: object) => void) => void);\n    receiveBuffer: Array<ReadonlyArray<any>>;\n    sendBuffer: Array<Packet>;\n    private readonly nsp;\n    private ids;\n    private acks;\n    private flags;\n    private subs?;\n    private _anyListeners;\n    /**\n     * `Socket` constructor.\n     *\n     * @public\n     */\n    constructor(io: Manager, nsp: string, opts?: Partial<SocketOptions>);\n    /**\n     * Subscribe to open, close and packet events\n     *\n     * @private\n     */\n    private subEvents;\n    /**\n     * Whether the Socket will try to reconnect when its Manager connects or reconnects\n     */\n    get active(): boolean;\n    /**\n     * \"Opens\" the socket.\n     *\n     * @public\n     */\n    connect(): this;\n    /**\n     * Alias for connect()\n     */\n    open(): this;\n    /**\n     * Sends a `message` event.\n     *\n     * @return self\n     * @public\n     */\n    send(...args: any[]): this;\n    /**\n     * Override `emit`.\n     * If the event is in `events`, it's emitted normally.\n     *\n     * @return self\n     * @public\n     */\n    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): this;\n    /**\n     * Sends a packet.\n     *\n     * @param packet\n     * @private\n     */\n    private packet;\n    /**\n     * Called upon engine `open`.\n     *\n     * @private\n     */\n    private onopen;\n    /**\n     * Called upon engine or manager `error`.\n     *\n     * @param err\n     * @private\n     */\n    private onerror;\n    /**\n     * Called upon engine `close`.\n     *\n     * @param reason\n     * @private\n     */\n    private onclose;\n    /**\n     * Called with socket packet.\n     *\n     * @param packet\n     * @private\n     */\n    private onpacket;\n    /**\n     * Called upon a server event.\n     *\n     * @param packet\n     * @private\n     */\n    private onevent;\n    private emitEvent;\n    /**\n     * Produces an ack callback to emit with an event.\n     *\n     * @private\n     */\n    private ack;\n    /**\n     * Called upon a server acknowlegement.\n     *\n     * @param packet\n     * @private\n     */\n    private onack;\n    /**\n     * Called upon server connect.\n     *\n     * @private\n     */\n    private onconnect;\n    /**\n     * Emit buffered events (received and emitted).\n     *\n     * @private\n     */\n    private emitBuffered;\n    /**\n     * Called upon server disconnect.\n     *\n     * @private\n     */\n    private ondisconnect;\n    /**\n     * Called upon forced client/server side disconnections,\n     * this method ensures the manager stops tracking us and\n     * that reconnections don't get triggered for this.\n     *\n     * @private\n     */\n    private destroy;\n    /**\n     * Disconnects the socket manually.\n     *\n     * @return self\n     * @public\n     */\n    disconnect(): this;\n    /**\n     * Alias for disconnect()\n     *\n     * @return self\n     * @public\n     */\n    close(): this;\n    /**\n     * Sets the compress flag.\n     *\n     * @param compress - if `true`, compresses the sending data\n     * @return self\n     * @public\n     */\n    compress(compress: boolean): this;\n    /**\n     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not\n     * ready to send messages.\n     *\n     * @returns self\n     * @public\n     */\n    get volatile(): this;\n    /**\n     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the\n     * callback.\n     *\n     * @param listener\n     * @public\n     */\n    onAny(listener: (...args: any[]) => void): this;\n    /**\n     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the\n     * callback. The listener is added to the beginning of the listeners array.\n     *\n     * @param listener\n     * @public\n     */\n    prependAny(listener: (...args: any[]) => void): this;\n    /**\n     * Removes the listener that will be fired when any event is emitted.\n     *\n     * @param listener\n     * @public\n     */\n    offAny(listener?: (...args: any[]) => void): this;\n    /**\n     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,\n     * e.g. to remove listeners.\n     *\n     * @public\n     */\n    listenersAny(): ((...args: any[]) => void)[];\n}\nexport declare namespace Socket {\n    type DisconnectReason = \"io server disconnect\" | \"io client disconnect\" | \"ping timeout\" | \"transport close\" | \"transport error\";\n}\nexport {};\n"
    ]
  