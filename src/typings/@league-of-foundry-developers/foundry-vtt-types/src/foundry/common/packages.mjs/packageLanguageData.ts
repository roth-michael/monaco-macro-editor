
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\packages.mjs\\packageLanguageData.d.ts",
      "import { FieldReturnType, PropertiesToSource } from '../../../types/helperTypes';\nimport { DocumentData } from '../abstract/module.mjs';\nimport * as fields from '../data/fields.mjs';\n\ninterface PackageLanguageDataSchema extends DocumentSchema {\n  lang: FieldReturnType<\n    typeof fields.REQUIRED_STRING,\n    {\n      validate: (lang: string) => boolean;\n      validationError: 'Invalid language code provided which is not supported by Intl.getCanonicalLocales';\n    }\n  >;\n  name: typeof fields.STRING_FIELD;\n  path: typeof fields.STRING_FIELD;\n  system: typeof fields.STRING_FIELD;\n  module: typeof fields.STRING_FIELD;\n}\n\ninterface PackageLanguageDataProperties {\n  /** A string language code which is validated by Intl.getCanonicalLocales */\n  lang: string;\n\n  /** The human-readable language name */\n  name?: string;\n\n  /** The relative path to included JSON translation strings */\n  path?: string;\n\n  /** Only apply this set of translations when a specific system is being used */\n  system?: string;\n\n  module?: string;\n}\n\ninterface PackageLanguageDataConstructorData {\n  /** A string language code which is validated by Intl.getCanonicalLocales */\n  lang: string;\n\n  /** The human-readable language name */\n  name?: string | null;\n\n  /** The relative path to included JSON translation strings */\n  path?: string | null;\n\n  /** Only apply this set of translations when a specific system is being used */\n  system?: string | null;\n\n  module?: string | null;\n}\n\n/**\n * An inner data object which represents a single language specification provided by a package in the languages array.\n */\nexport declare class PackageLanguageData extends DocumentData<\n  PackageLanguageDataSchema,\n  PackageLanguageDataProperties,\n  PropertiesToSource<PackageLanguageDataProperties>,\n  PackageLanguageDataConstructorData\n> {\n  static defineSchema(): PackageLanguageDataSchema;\n\n  /** @override */\n  protected _initialize(): void;\n\n  /**\n   * Validate that a language code is supported as a canonical locale\n   * @param lang - The candidate language to validate\n   * @returns Is it valid?\n   */\n  static validateLocale(lang: string): boolean;\n}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport declare interface PackageLanguageData extends PackageLanguageDataProperties {}\n"
    ]
  