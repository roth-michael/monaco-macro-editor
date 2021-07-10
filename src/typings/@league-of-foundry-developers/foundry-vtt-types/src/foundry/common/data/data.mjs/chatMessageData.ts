
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\data.mjs\\chatMessageData.d.ts",
      "import { FieldReturnType, PropertiesToSource } from '../../../../types/helperTypes';\nimport { DocumentData } from '../../abstract/module.mjs';\nimport { CONST, documents } from '../../module.mjs';\nimport * as fields from '../fields.mjs';\nimport { ChatSpeakerData, ChatSpeakerDataConstructorData } from './chatSpeakerData';\n\ninterface ChatMessageDataSchema extends DocumentSchema {\n  _id: typeof fields.DOCUMENT_ID;\n  type: DocumentField<CONST.ChatMessageType> & {\n    type: typeof Number;\n    required: true;\n    default: typeof CONST.CHAT_MESSAGE_TYPES.OTHER;\n    validate: typeof _validateChatMessageType;\n    validationError: 'The provided ChatMessage type must be in CONST.CHAT_MESSAGE_TYPES';\n  };\n  user: fields.ForeignDocumentField<{ type: typeof documents.BaseUser; required: true }>;\n  timestamp: FieldReturnType<typeof fields.TIMESTAMP_FIELD, { required: true }>;\n  flavor: typeof fields.STRING_FIELD;\n  content: typeof fields.BLANK_STRING;\n  speaker: DocumentField<ChatSpeakerData> & { type: typeof ChatSpeakerData; required: true; default: {} };\n  whisper: DocumentField<string[]> & {\n    type: typeof String[];\n    clean: (users: Array<{ id: string } | string>) => string[];\n    required: true;\n    default: string[];\n  };\n  blind: typeof fields.BOOLEAN_FIELD;\n  roll: typeof fields.JSON_FIELD;\n  sound: typeof fields.AUDIO_FIELD;\n  emote: typeof fields.BOOLEAN_FIELD;\n  flags: typeof fields.OBJECT_FIELD;\n}\n\ninterface ChatMessageDataProperties {\n  /**\n   * The _id which uniquely identifies this ChatMessage document\n   */\n  _id: string | null;\n\n  /**\n   * The message type from CONST.CHAT_MESSAGE_TYPES\n   * @defaultValue `CONST.CHAT_MESSAGE_TYPES.OTHER`\n   */\n  type: CONST.ChatMessageType;\n\n  /**\n   * The _id of the User document who generated this message\n   */\n  user: string | null;\n\n  /**\n   * The timestamp at which point this message was generated\n   * @defaultValue `Date.now()`\n   */\n  timestamp: number;\n\n  /**\n   * An optional flavor text message which summarizes this message\n   */\n  flavor?: string;\n\n  /**\n   * The HTML content of this chat message\n   * @defaultValue `\"\"`\n   */\n  content: string;\n\n  /**\n   * A ChatSpeakerData object which describes the origin of the ChatMessage\n   */\n  speaker: ChatSpeakerData;\n\n  /**\n   * An array of User _id values to whom this message is privately whispered\n   * @defaultValue `[]`\n   */\n  whisper: string[];\n\n  /**\n   * Is this message sent blindly where the creating User cannot see it?\n   * @defaultValue `false`\n   */\n  blind: boolean;\n\n  /**\n   * The serialized content of a Roll instance which belongs to the ChatMessage\n   * @defaultValue `undefined`\n   */\n  roll?: string;\n\n  /**\n   * The URL of an audio file which plays when this message is received\n   * @defaultValue `undefined`\n   */\n  sound?: string | null;\n\n  /**\n   * Is this message styled as an emote?\n   * @defaultValue `false`\n   */\n  emote: boolean;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags: Record<string, unknown>;\n}\n\nexport interface ChatMessageDataConstructorData {\n  /**\n   * The _id which uniquely identifies this ChatMessage document\n   */\n  _id?: string | null;\n\n  /**\n   * The message type from CONST.CHAT_MESSAGE_TYPES\n   * @defaultValue `CONST.CHAT_MESSAGE_TYPES.OTHER`\n   */\n  type?: CONST.ChatMessageType | null;\n\n  /**\n   * The _id of the User document who generated this message\n   */\n  user?: string | null;\n\n  /**\n   * The timestamp at which point this message was generated\n   * @defaultValue `Date.now()`\n   */\n  timestamp?: number | null;\n\n  /**\n   * An optional flavor text message which summarizes this message\n   */\n  flavor?: string | null;\n\n  /**\n   * The HTML content of this chat message\n   * @defaultValue `\"\"`\n   */\n  content?: string | null;\n\n  /**\n   * A ChatSpeakerData object which describes the origin of the ChatMessage\n   */\n  speaker?: ChatSpeakerDataConstructorData | null;\n\n  /**\n   * An array of User _id values to whom this message is privately whispered\n   * @defaultValue `[]`\n   */\n  whisper?: string[] | null;\n\n  /**\n   * Is this message sent blindly where the creating User cannot see it?\n   * @defaultValue `false`\n   */\n  blind?: boolean | null;\n\n  /**\n   * The serialized content of a Roll instance which belongs to the ChatMessage\n   * @defaultValue `undefined`\n   */\n  roll?: string | null;\n\n  /**\n   * The URL of an audio file which plays when this message is received\n   * @defaultValue `undefined`\n   */\n  sound?: string | null;\n\n  /**\n   * Is this message styled as an emote?\n   * @defaultValue `false`\n   */\n  emote?: boolean | null;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags?: Record<string, unknown> | null;\n}\n\n/**\n * An embedded data object which defines the properties of a light source animation\n */\nexport declare class ChatMessageData extends DocumentData<\n  ChatMessageDataSchema,\n  ChatMessageDataProperties,\n  PropertiesToSource<ChatMessageDataProperties>,\n  ChatMessageDataConstructorData,\n  documents.BaseChatMessage\n> {\n  static defineSchema(): ChatMessageDataSchema;\n}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport declare interface ChatMessageData extends ChatMessageDataProperties {}\n\n/**\n * Validate that a ChatMessage has a valid type\n * @param type - The assigned message type\n * @returns Is it valid?\n */\ndeclare function _validateChatMessageType(type: number): boolean;\n"
    ]
  