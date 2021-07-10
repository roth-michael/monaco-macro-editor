
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\rollTerms\\parentheticalTerm.d.ts",
      "/**\n * A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.\n */\ndeclare class ParentheticalTerm extends RollTerm {\n  constructor({ term, roll, options }: ParentheticalTerm.TermData);\n\n  /** The original provided string term used to construct the parenthetical */\n  term: ParentheticalTerm.TermData['term'];\n\n  /** Alternatively, an already-evaluated Roll instance may be passed directly */\n  roll: ParentheticalTerm.TermData['roll'];\n\n  /**\n   * The regular expression pattern used to identify the opening of a parenthetical expression.\n   * This could also identify the opening of a math function.\n   */\n  static OPEN_REGEXP: RegExp;\n\n  /** A regular expression pattern used to identify the closing of a parenthetical expression. */\n  static CLOSE_REGEXP: RegExp;\n\n  /** An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll */\n  get dice(): DiceTerm[];\n\n  /**\n   * Construct a ParentheticalTerm from an Array of component terms which should be wrapped inside the parentheses.\n   * @param terms - The array of terms to use as internal parts of the parenthetical\n   * @param options - Additional options passed to the ParentheticalTerm constructor\n   * @returns  The constructed ParentheticalTerm instance\n   *\n   * @example <caption>Create a Parenthetical Term from an array of component RollTerm instances</caption>\n   * ```typescript\n   * const d6 = new Die({number: 4, faces: 6});\n   * const plus = new OperatorTerm({operator: \"+\"});\n   * const bonus = new NumericTerm({number: 4});\n   * t = ParentheticalTerm.fromTerms([d6, plus, bonus]);\n   * t.formula; // (4d6 + 4)\n   * ```\n   */\n  static fromTerms(terms: RollTerm[], options?: Partial<RollTerm.Options>): ParentheticalTerm;\n}\n\ndeclare namespace ParentheticalTerm {\n  interface TermData {\n    term: string;\n    roll: Roll;\n    options: RollTerm.Options;\n  }\n}\n"
    ]
  