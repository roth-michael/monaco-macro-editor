
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\wallConfig.d.ts",
      "/**\n * Wall Configuration Sheet\n */\ndeclare class WallConfig<P extends WallConfig.Options = WallConfig.Options> extends FormApplication<\n  P,\n  WallConfig.Data,\n  Wall\n> {\n  /**\n   * @param object  - The Wall object for which settings are being configured\n   * @param options - Additional options which configure the rendering of the configuration sheet.\n   */\n  constructor(object: Wall, options?: Partial<P>);\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * const options = super.defaultOptions;\n   * options.id = \"wall-config\";\n   * options.title = \"Wall Configuration\";\n   * options.template = \"templates/scene/wall-config.html\";\n   * options.width = 400;\n   * options.editTargets = [];\n   * ```\n   */\n  static get defaultOptions(): WallConfig.Options;\n\n  /**\n   * Provide a dynamically rendered title for the Wall Configuration sheet\n   */\n  get title(): string;\n\n  /**\n   * Construct and return the data object used to render the HTML template for this form application.\n   */\n  getData(): WallConfig.Data;\n\n  /**\n   * This method is called upon form submission after form data is validated\n   * @param event    - The initial triggering submission event\n   * @param formData - The object of validated form data with which to update the object\n   */\n  protected _updateObject(event: Event, formData: WallConfig.FormData): Promise<Wall>;\n}\n\ndeclare namespace WallConfig {\n  interface Data {\n    object: foundry.utils.Duplicated<WallConfig['object']['data']>;\n    options: WallConfig['options'];\n    moveTypes: {\n      [Key in keyof typeof foundry.CONST['WALL_MOVEMENT_TYPES'] as typeof foundry.CONST['WALL_MOVEMENT_TYPES'][Key]]: Titlecase<Key>;\n    };\n    senseTypes: {\n      [Key in keyof typeof foundry.CONST['WALL_SENSE_TYPES'] as typeof foundry.CONST['WALL_SENSE_TYPES'][Key]]: Titlecase<Key>;\n    };\n    dirTypes: {\n      [Key in keyof typeof foundry.CONST['WALL_DIRECTIONS'] as typeof foundry.CONST['WALL_DIRECTIONS'][Key]]: Titlecase<Key>;\n    };\n    doorTypes: {\n      [Key in keyof typeof foundry.CONST['WALL_DOOR_TYPES'] as typeof foundry.CONST['WALL_DOOR_TYPES'][Key]]: Titlecase<Key>;\n    };\n    doorStates: {\n      [Key in keyof typeof foundry.CONST['WALL_DOOR_STATES'] as typeof foundry.CONST['WALL_DOOR_STATES'][Key]]: Titlecase<Key>;\n    };\n    isDoor: boolean;\n  }\n\n  interface FormData {\n    dir: foundry.CONST.WallDirection;\n    door: Wall.Data['door'];\n    ds?: Wall.Data['ds'];\n    move: Wall.Data['move'];\n    sense: Wall.Data['sense'];\n  }\n\n  interface Options extends FormApplication.Options {\n    /**\n     * @defaultValue `[]`\n     */\n    editTargets: string[];\n  }\n}\n"
    ]
  