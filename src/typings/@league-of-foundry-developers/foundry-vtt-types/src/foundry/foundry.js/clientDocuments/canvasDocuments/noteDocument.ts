
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/clientDocuments/canvasDocuments/noteDocument.d.ts",
      "/**\n * The client-side Note document which extends the common BaseNote model.\n * Each Note document contains NoteData which defines its data schema.\n *\n * @see {@link data.NoteData}                 The Note data schema\n * @see {@link documents.Scene}               The Scene document type which contains Note embedded documents\n * @see {@link applications.NoteConfig}       The Note configuration application\n */\ndeclare class NoteDocument extends CanvasDocumentMixin(foundry.documents.BaseNote) {\n  /**\n   * The associated JournalEntry which is referenced by this Note\n   */\n  get entry(): ReturnType<Journal['get']>;\n\n  /**\n   * The text label used to annotate this Note\n   */\n  get label(): string;\n}\n"
    ]
  