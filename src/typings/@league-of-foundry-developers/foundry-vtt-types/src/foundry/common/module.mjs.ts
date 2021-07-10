
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\module.mjs.d.ts",
      "import './types.mjs';\nimport './utils/primitives.mjs';\nimport * as _CONST from './constants.mjs';\nimport * as _abstract from './abstract/module.mjs';\nimport * as _data from './data/module.mjs';\nimport * as _documents from './documents.mjs';\nimport * as _packages from './packages.mjs';\nimport * as _utils from './utils/module.mjs';\n\n/**\n * Constant definitions used throughout the Foundry Virtual Tabletop framework.\n */\nexport * as CONST from './constants.mjs';\n\n/**\n * Abstract class definitions providing fundamental interfaces used throughout the Foundry Virtual Tabletop framework.\n */\nexport * as abstract from './abstract/module.mjs';\n\n/**\n * Data schema definitions providing structure for Documents used throughout the Foundry Virtual Tabletop framework.\n */\nexport * as data from './data/module.mjs';\n\n/**\n * Document definitions used throughout the Foundry Virtual Tabletop framework.\n */\nexport * as documents from './documents.mjs';\n\n/**\n * Package data definitions, validations, and schema\n */\nexport * as packages from './packages.mjs';\n\n/**\n * Utility functions providing helpful functionality.\n */\nexport * as utils from './utils/module.mjs';\n\ndeclare global {\n  namespace foundry {\n    /**\n     * Constant definitions used throughout the Foundry Virtual Tabletop framework.\n     */\n    export import CONST = _CONST; // eslint-disable-line @typescript-eslint/no-unused-vars\n\n    /**\n     * Abstract class definitions providing fundamental interfaces used throughout the Foundry Virtual Tabletop framework.\n     */\n    export import abstract = _abstract; // eslint-disable-line @typescript-eslint/no-unused-vars\n\n    /**\n     * Data schema definitions providing structure for Documents used throughout the Foundry Virtual Tabletop framework.\n     */\n    export import data = _data; // eslint-disable-line @typescript-eslint/no-unused-vars\n\n    /**\n     * Utility functions providing helpful functionality.\n     */\n    export import utils = _utils; // eslint-disable-line @typescript-eslint/no-unused-vars\n\n    /**\n     * Document definitions used throughout the Foundry Virtual Tabletop framework.\n     */\n    export import documents = _documents; // eslint-disable-line @typescript-eslint/no-unused-vars\n\n    /**\n     * Package data definitions, validations, and schema\n     */\n    export import packages = _packages; // eslint-disable-line @typescript-eslint/no-unused-vars\n  }\n\n  /**\n   * Constant definitions used throughout the Foundry Virtual Tabletop framework.\n   */\n  const CONST: typeof _CONST;\n\n  type Collection<T> = _utils.Collection<T>;\n  var Collection: typeof _utils.Collection; // eslint-disable-line no-var\n\n  type Semaphore = _utils.Semaphore;\n  var Semaphore: typeof _utils.Semaphore; // eslint-disable-line no-var\n\n  var benchmark: typeof _utils.benchmark; // eslint-disable-line no-var\n  var debounce: typeof _utils.debounce; // eslint-disable-line no-var\n  var deepClone: typeof _utils.deepClone; // eslint-disable-line no-var\n  var diffObject: typeof _utils.diffObject; // eslint-disable-line no-var\n  var duplicate: typeof _utils.duplicate; // eslint-disable-line no-var\n  var encodeURL: typeof _utils.encodeURL; // eslint-disable-line no-var\n  var expandObject: typeof _utils.expandObject; // eslint-disable-line no-var\n  var filterObject: typeof _utils.filterObject; // eslint-disable-line no-var\n  var flattenObject: typeof _utils.flattenObject; // eslint-disable-line no-var\n  var getParentClasses: typeof _utils.getParentClasses; // eslint-disable-line no-var\n  var getProperty: typeof _utils.getProperty; // eslint-disable-line no-var\n  var getRoute: typeof _utils.getRoute; // eslint-disable-line no-var\n  var getType: typeof _utils.getType; // eslint-disable-line no-var\n  var hasProperty: typeof _utils.hasProperty; // eslint-disable-line no-var\n  var invertObject: typeof _utils.invertObject; // eslint-disable-line no-var\n  var isNewerVersion: typeof _utils.isNewerVersion; // eslint-disable-line no-var\n  var isObjectEmpty: typeof _utils.isObjectEmpty; // eslint-disable-line no-var\n  var mergeObject: typeof _utils.mergeObject; // eslint-disable-line no-var\n  var randomID: typeof _utils.randomID; // eslint-disable-line no-var\n  var setProperty: typeof _utils.setProperty; // eslint-disable-line no-var\n  var timeSince: typeof _utils.timeSince; // eslint-disable-line no-var\n  var rgbToHsv: typeof _utils.rgbToHsv; // eslint-disable-line no-var\n  var hsvToRgb: typeof _utils.hsvToRgb; // eslint-disable-line no-var\n  var rgbToHex: typeof _utils.rgbToHex; // eslint-disable-line no-var\n  var hexToRGB: typeof _utils.hexToRGB; // eslint-disable-line no-var\n  var hexToRGBAString: typeof _utils.hexToRGBAString; // eslint-disable-line no-var\n  var colorStringToHex: typeof _utils.colorStringToHex; // eslint-disable-line no-var\n}\n"
    ]
  