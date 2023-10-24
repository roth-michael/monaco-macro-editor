
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/clientDocuments/canvasDocuments/tileDocument.d.ts",
      "/**\n * The client-side Tile document which extends the common BaseTile model.\n * Each Tile document contains TileData which defines its data schema.\n *\n * @see {@link data.TileData}                 The Tile data schema\n * @see {@link documents.Scene}               The Scene document type which contains Tile embedded documents\n * @see {@link applications.TileConfig}       The Tile configuration application\n */\ndeclare class TileDocument extends CanvasDocumentMixin(foundry.documents.BaseTile) {\n  /** @override */\n  prepareDerivedData(): void;\n\n  /** @override */\n  get layer(): ForegroundLayer | BackgroundLayer;\n}\n"
    ]
  