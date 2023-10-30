
    export default [
      "typescript/lib/lib.es2020.sharedmemory.d.ts",
      "/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib=\"true\"/>\r\n\n\ninterface Atomics {\r\n    /**\r\n     * Adds a value to the value at the given position in the array, returning the original value.\r\n     * Until this atomic operation completes, any other read or write operation against the array\r\n     * will block.\r\n     */\r\n    add(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * Stores the bitwise AND of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or\r\n     * write operation against the array will block.\r\n     */\r\n    and(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * Replaces the value at the given position in the array if the original value equals the given\r\n     * expected value, returning the original value. Until this atomic operation completes, any\r\n     * other read or write operation against the array will block.\r\n     */\r\n    compareExchange(typedArray: BigInt64Array | BigUint64Array, index: number, expectedValue: bigint, replacementValue: bigint): bigint;\r\n\r\n    /**\r\n     * Replaces the value at the given position in the array, returning the original value. Until\r\n     * this atomic operation completes, any other read or write operation against the array will\r\n     * block.\r\n     */\r\n    exchange(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * Returns the value at the given position in the array. Until this atomic operation completes,\r\n     * any other read or write operation against the array will block.\r\n     */\r\n    load(typedArray: BigInt64Array | BigUint64Array, index: number): bigint;\r\n\r\n    /**\r\n     * Stores the bitwise OR of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or write\r\n     * operation against the array will block.\r\n     */\r\n    or(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * Stores a value at the given position in the array, returning the new value. Until this\r\n     * atomic operation completes, any other read or write operation against the array will block.\r\n     */\r\n    store(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * Subtracts a value from the value at the given position in the array, returning the original\r\n     * value. Until this atomic operation completes, any other read or write operation against the\r\n     * array will block.\r\n     */\r\n    sub(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n\r\n    /**\r\n     * If the value at the given position in the array is equal to the provided value, the current\r\n     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r\n     * `\"timed-out\"`) or until the agent is awoken (returning `\"ok\"`); otherwise, returns\r\n     * `\"not-equal\"`.\r\n     */\r\n    wait(typedArray: BigInt64Array, index: number, value: bigint, timeout?: number): \"ok\" | \"not-equal\" | \"timed-out\";\r\n\r\n    /**\r\n     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r\n     * number of agents that were awoken.\r\n     * @param typedArray A shared BigInt64Array.\r\n     * @param index The position in the typedArray to wake up on.\r\n     * @param count The number of sleeping agents to notify. Defaults to +Infinity.\r\n     */\r\n    notify(typedArray: BigInt64Array, index: number, count?: number): number;\r\n\r\n    /**\r\n     * Stores the bitwise XOR of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or write\r\n     * operation against the array will block.\r\n     */\r\n    xor(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r\n}\r\n"
    ]
  