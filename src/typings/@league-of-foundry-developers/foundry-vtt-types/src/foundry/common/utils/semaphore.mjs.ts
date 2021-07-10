
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\utils\\semaphore.mjs.d.ts",
      "/**\n * A simple Semaphore implementation which provides a limited queue for ensuring proper concurrency.\n *\n * @example\n * ```typescript\n * // Some async function that takes time to execute\n * function fn(x: string): Promise<string> {\n *   return new Promise(resolve => {\n *     setTimeout(() => {\n *       console.log(x);\n *       resolve(x);\n *     }, 1000));\n *   }\n * };\n *\n * // Create a Semaphore and add many concurrent tasks\n * const semaphore = new Semaphore(1);\n * for ( let i of Array.fromRange(100) ) {\n *   semaphore.add(fn, i);\n * }\n * ```\n */\ndeclare class Semaphore {\n  /**\n   * @param max - The maximum number of tasks which are allowed concurrently.\n   *              (default: 1)\n   */\n  constructor(max?: number);\n\n  /**\n   * The maximum number of tasks which can be simultaneously attempted.\n   */\n  max: number;\n\n  /**\n   * A queue of pending function signatures\n   * @defaultValue `[]`\n   * @remarks The first element of an element of `_queue` is always a function and the rest of the elements are\n   * parameters to be passed to that function.\n   */\n  _queue: Array<Array<unknown>>;\n\n  /**\n   * The number of tasks which are currently underway\n   * @defaultValue `0`\n   */\n  protected _active: number;\n\n  /**\n   * The number of pending tasks remaining in the queue\n   */\n  get remaining(): number;\n\n  /**\n   * The number of actively executing tasks\n   */\n  get active(): number;\n\n  /**\n   * Add a new tasks to the managed queue\n   * @param fn   - A callable function\n   * @param args - Function arguments\n   */\n  add<F extends (...args: any[]) => any>(fn: F, ...args: Parameters<F>): void;\n\n  /**\n   * Abandon any tasks which have not yet concluded\n   */\n  clear(): void;\n\n  /**\n   * Attempt to perform a task from the queue.\n   * If all workers are busy, do nothing.\n   * If successful, try again.\n   * @returns Was a function called?\n   */\n  protected _try(): Promise<boolean>;\n}\n\nexport default Semaphore;\n"
    ]
  