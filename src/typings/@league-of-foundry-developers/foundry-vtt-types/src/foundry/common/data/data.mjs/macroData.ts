
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\data.mjs\\macroData.d.ts",
      "import { FieldReturnType, PropertiesToSource } from '../../../../types/helperTypes';\nimport { DocumentData } from '../../abstract/module.mjs';\nimport * as fields from '../fields.mjs';\nimport * as documents from '../../documents.mjs';\nimport * as CONST from '../../constants.mjs';\n\ninterface MacroDataSchema extends DocumentSchema {\n  _id: typeof fields.DOCUMENT_ID;\n  name: typeof fields.REQUIRED_STRING;\n  type: DocumentField<string> & {\n    type: String;\n    required: true;\n    default: typeof CONST.MACRO_TYPES.CHAT;\n    validate: (t: unknown) => boolean;\n    validationError: 'The provided Macro type must be in CONST.MACRO_TYPES';\n  };\n  author: fields.ForeignDocumentField<{\n    type: typeof documents.BaseUser;\n    default: () => Game['user'];\n  }>;\n  img: FieldReturnType<typeof fields.IMAGE_FIELD, { required: true; default: typeof CONST.DEFAULT_MACRO_ICON }>;\n  scope: DocumentField<string> & {\n    type: String;\n    required: true;\n    default: typeof CONST.MACRO_SCOPES[0];\n    validate: (t: unknown) => boolean;\n    validationError: 'The provided Macro scope must be in CONST.MACRO_SCOPES';\n  };\n  command: typeof fields.BLANK_STRING;\n  folder: fields.ForeignDocumentField<{ type: typeof documents.BaseFolder }>;\n  sort: typeof fields.INTEGER_SORT_FIELD;\n  permission: typeof fields.DOCUMENT_PERMISSIONS;\n  flags: typeof fields.OBJECT_FIELD;\n}\n\ninterface MacroDataProperties {\n  /**\n   * The _id which uniquely identifies this Macro document\n   */\n  _id: string | null;\n\n  /**\n   * The name of this Macro\n   */\n  name: string;\n\n  /**\n   * A Macro subtype from CONST.MACRO_TYPES\n   */\n  type: foundry.CONST.MacroTypes;\n\n  /**\n   * The _id of a User document which created this Macro *\n   */\n  author: string;\n\n  /**\n   * An image file path which provides the thumbnail artwork for this Macro\n   * @defaultValue `CONST.DEFAULT_MACRO_ICON`\n   */\n  img: string | null;\n\n  /**\n   * The scope of this Macro application from CONST.MACRO_SCOPES\n   * @defaultValue `'global'`\n   */\n  scope: foundry.CONST.MacroScopes;\n\n  /**\n   * The string content of the macro command\n   * @defaultValue `''`\n   */\n  command: string;\n\n  /**\n   * The _id of a Folder which contains this Macro\n   * @defaultValue `null`\n   */\n  folder: string | null;\n\n  /**\n   * The numeric sort value which orders this Macro relative to its siblings\n   * @defaultValue `0`\n   */\n  sort: number;\n\n  /**\n   * An object which configures user permissions to this Macro\n   * @defaultValue `{ default: CONST.ENTITY_PERMISSIONS.NONE }`\n   */\n  permission: Partial<Record<string, foundry.CONST.EntityPermission>>;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags: Record<string, unknown>;\n}\n\ninterface MacroDataConstructorData {\n  /**\n   * The _id which uniquely identifies this Macro document\n   */\n  _id?: string | null;\n\n  /**\n   * The name of this Macro\n   */\n  name: string;\n\n  /**\n   * A Macro subtype from CONST.MACRO_TYPES\n   */\n  type?: foundry.CONST.MacroTypes | null;\n\n  /**\n   * The _id of a User document which created this Macro *\n   */\n  author?: string | null;\n\n  /**\n   * An image file path which provides the thumbnail artwork for this Macro\n   * @defaultValue `CONST.DEFAULT_MACRO_ICON`\n   */\n  img?: string | null;\n\n  /**\n   * The scope of this Macro application from CONST.MACRO_SCOPES\n   * @defaultValue `'global'`\n   */\n  scope?: foundry.CONST.MacroScopes | null;\n\n  /**\n   * The string content of the macro command\n   * @defaultValue `''`\n   */\n  command?: string | null;\n\n  /**\n   * The _id of a Folder which contains this Macro\n   * @defaultValue `null`\n   */\n  folder?: string | null;\n\n  /**\n   * The numeric sort value which orders this Macro relative to its siblings\n   * @defaultValue `0`\n   */\n  sort?: number | null;\n\n  /**\n   * An object which configures user permissions to this Macro\n   * @defaultValue `{ default: CONST.ENTITY_PERMISSIONS.NONE }`\n   */\n  permission?: Partial<Record<string, foundry.CONST.EntityPermission>> | null;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags?: Record<string, unknown> | null;\n}\n\n/**\n * The data schema for a Macro document.\n * @see BaseMacro\n */\nexport declare class MacroData extends DocumentData<\n  MacroDataSchema,\n  MacroDataProperties,\n  PropertiesToSource<MacroDataProperties>,\n  MacroDataConstructorData,\n  documents.BaseMacro\n> {\n  constructor(data: MacroDataConstructorData, document?: documents.BaseMacro | null);\n\n  static defineSchema(): MacroDataSchema;\n}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport declare interface MacroData extends MacroDataProperties {}\n"
    ]
  