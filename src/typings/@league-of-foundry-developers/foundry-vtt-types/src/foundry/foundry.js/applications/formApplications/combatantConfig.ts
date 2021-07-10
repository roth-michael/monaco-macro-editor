
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\combatantConfig.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * Configure or create a single Combatant within a Combat entity.\n */\ndeclare class CombatantConfig extends FormApplication {\n  /**\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   id: \"combatant-config\",\n   *   title: game.i18n.localize(\"COMBAT.CombatantConfig\"),\n   *   classes: [\"sheet\", \"combat-sheet\"],\n   *   template: \"templates/sheets/combatant-config.html\",\n   *   width: 420\n   * });\n   * ```\n   */\n  static get defaultOptions(): typeof FormApplication['defaultOptions'];\n\n  /**\n   * @override\n   */\n  get title(): string;\n\n  /**\n   * @param event - (unused)\n   * @override\n   */\n  protected _updateObject(event: Event, formData: CombatantConfig.FormData): Promise<Combat.Combatant>;\n}\n\ndeclare namespace CombatantConfig {\n  type FormData = Required<Pick<Combat.Combatant, 'defeated' | 'hidden' | 'img' | 'initiative' | 'name'>>;\n}\n"
    ]
  