
    export default [
      "typescript/lib/lib.es2020.bigint.d.ts",
      "/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib=\"true\"/>\r\n\n\ninterface BigIntToLocaleStringOptions {\r\n    /**\r\n     * The locale matching algorithm to use.The default is \"best fit\". For information about this option, see the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation Intl page}.\r\n     */\r\n    localeMatcher?: string;\r\n    /**\r\n     * The formatting style to use , the default is \"decimal\".\r\n     */\r\n    style?: string;\r\n\r\n    numberingSystem?: string;\r\n    /**\r\n     * The unit to use in unit formatting, Possible values are core unit identifiers, defined in UTS #35, Part 2, Section 6. A subset of units from the full list was selected for use in ECMAScript. Pairs of simple units can be concatenated with \"-per-\" to make a compound unit. There is no default value; if the style is \"unit\", the unit property must be provided.\r\n     */\r\n    unit?: string;\r\n\r\n    /**\r\n     * The unit formatting style to use in unit formatting, the defaults is \"short\".\r\n     */\r\n    unitDisplay?: string;\r\n\r\n    /**\r\n     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as \"USD\" for the US dollar, \"EUR\" for the euro, or \"CNY\" for the Chinese RMB — see the Current currency & funds code list. There is no default value; if the style is \"currency\", the currency property must be provided. It is only used when [[Style]] has the value \"currency\".\r\n     */\r\n    currency?: string;\r\n\r\n    /**\r\n     * How to display the currency in currency formatting. It is only used when [[Style]] has the value \"currency\". The default is \"symbol\".\r\n     *\r\n     * \"symbol\" to use a localized currency symbol such as €,\r\n     *\r\n     * \"code\" to use the ISO currency code,\r\n     *\r\n     * \"name\" to use a localized currency name such as \"dollar\"\r\n     */\r\n    currencyDisplay?: string;\r\n\r\n    /**\r\n     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. The default is true.\r\n     */\r\n    useGrouping?: boolean;\r\n\r\n    /**\r\n     * The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.\r\n     */\r\n    minimumIntegerDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r\n\r\n    /**\r\n     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information).\r\n     */\r\n    minimumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r\n\r\n    /**\r\n     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information); the default for percent formatting is the larger of minimumFractionDigits and 0.\r\n     */\r\n    maximumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r\n\r\n    /**\r\n     * The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.\r\n     */\r\n    minimumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r\n\r\n    /**\r\n     * The maximum number of significant digits to use. Possible values are from 1 to 21; the default is 21.\r\n     */\r\n    maximumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r\n\r\n    /**\r\n     * The formatting that should be displayed for the number, the defaults is \"standard\"\r\n     *\r\n     *     \"standard\" plain number formatting\r\n     *\r\n     *     \"scientific\" return the order-of-magnitude for formatted number.\r\n     *\r\n     *     \"engineering\" return the exponent of ten when divisible by three\r\n     *\r\n     *     \"compact\" string representing exponent, defaults is using the \"short\" form\r\n     */\r\n    notation?: string;\r\n\r\n    /**\r\n     * used only when notation is \"compact\"\r\n     */\r\n    compactDisplay?: string;\r\n}\r\n\r\ninterface BigInt {\r\n    /**\r\n     * Returns a string representation of an object.\r\n     * @param radix Specifies a radix for converting numeric values to strings.\r\n     */\r\n    toString(radix?: number): string;\r\n\r\n    /** Returns a string representation appropriate to the host environment's current locale. */\r\n    toLocaleString(locales?: string, options?: BigIntToLocaleStringOptions): string;\r\n\r\n    /** Returns the primitive value of the specified object. */\r\n    valueOf(): bigint;\r\n\r\n    readonly [Symbol.toStringTag]: \"BigInt\";\r\n}\r\n\r\ninterface BigIntConstructor {\r\n    (value: bigint | boolean | number | string): bigint;\r\n    readonly prototype: BigInt;\r\n\r\n    /**\r\n     * Interprets the low bits of a BigInt as a 2's-complement signed integer.\r\n     * All higher bits are discarded.\r\n     * @param bits The number of low bits to use\r\n     * @param int The BigInt whose bits to extract\r\n     */\r\n    asIntN(bits: number, int: bigint): bigint;\r\n    /**\r\n     * Interprets the low bits of a BigInt as an unsigned integer.\r\n     * All higher bits are discarded.\r\n     * @param bits The number of low bits to use\r\n     * @param int The BigInt whose bits to extract\r\n     */\r\n    asUintN(bits: number, int: bigint): bigint;\r\n}\r\n\r\ndeclare var BigInt: BigIntConstructor;\r\n\r\n/**\r\n * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the\r\n * requested number of bytes could not be allocated, an exception is raised.\r\n */\r\ninterface BigInt64Array {\r\n    /** The size in bytes of each element in the array. */\r\n    readonly BYTES_PER_ELEMENT: number;\r\n\r\n    /** The ArrayBuffer instance referenced by the array. */\r\n    readonly buffer: ArrayBufferLike;\r\n\r\n    /** The length in bytes of the array. */\r\n    readonly byteLength: number;\r\n\r\n    /** The offset in bytes of the array. */\r\n    readonly byteOffset: number;\r\n\r\n    /**\r\n     * Returns the this object after copying a section of the array identified by start and end\r\n     * to the same array starting at position target\r\n     * @param target If target is negative, it is treated as length+target where length is the\r\n     * length of the array.\r\n     * @param start If start is negative, it is treated as length+start. If end is negative, it\r\n     * is treated as length+end.\r\n     * @param end If not specified, length of the this object is used as its default value.\r\n     */\r\n    copyWithin(target: number, start: number, end?: number): this;\r\n\r\n    /** Yields index, value pairs for every entry in the array. */\r\n    entries(): IterableIterator<[number, bigint]>;\r\n\r\n    /**\r\n     * Determines whether all the members of an array satisfy the specified test.\r\n     * @param predicate A function that accepts up to three arguments. The every method calls\r\n     * the predicate function for each element in the array until the predicate returns false,\r\n     * or until the end of the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    every(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r\n\r\n    /**\r\n     * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array\r\n     * @param value value to fill array section with\r\n     * @param start index to start filling the array at. If start is negative, it is treated as\r\n     * length+start where length is the length of the array.\r\n     * @param end index to stop filling the array at. If end is negative, it is treated as\r\n     * length+end.\r\n     */\r\n    fill(value: bigint, start?: number, end?: number): this;\r\n\r\n    /**\r\n     * Returns the elements of an array that meet the condition specified in a callback function.\r\n     * @param predicate A function that accepts up to three arguments. The filter method calls\r\n     * the predicate function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    filter(predicate: (value: bigint, index: number, array: BigInt64Array) => any, thisArg?: any): BigInt64Array;\r\n\r\n    /**\r\n     * Returns the value of the first element in the array where predicate is true, and undefined\r\n     * otherwise.\r\n     * @param predicate find calls predicate once for each element of the array, in ascending\r\n     * order, until it finds one where predicate returns true. If such an element is found, find\r\n     * immediately returns that element value. Otherwise, find returns undefined.\r\n     * @param thisArg If provided, it will be used as the this value for each invocation of\r\n     * predicate. If it is not provided, undefined is used instead.\r\n     */\r\n    find(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): bigint | undefined;\r\n\r\n    /**\r\n     * Returns the index of the first element in the array where predicate is true, and -1\r\n     * otherwise.\r\n     * @param predicate find calls predicate once for each element of the array, in ascending\r\n     * order, until it finds one where predicate returns true. If such an element is found,\r\n     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r\n     * @param thisArg If provided, it will be used as the this value for each invocation of\r\n     * predicate. If it is not provided, undefined is used instead.\r\n     */\r\n    findIndex(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): number;\r\n\r\n    /**\r\n     * Performs the specified action for each element in an array.\r\n     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    forEach(callbackfn: (value: bigint, index: number, array: BigInt64Array) => void, thisArg?: any): void;\r\n\r\n    /**\r\n     * Determines whether an array includes a certain element, returning true or false as appropriate.\r\n     * @param searchElement The element to search for.\r\n     * @param fromIndex The position in this array at which to begin searching for searchElement.\r\n     */\r\n    includes(searchElement: bigint, fromIndex?: number): boolean;\r\n\r\n    /**\r\n     * Returns the index of the first occurrence of a value in an array.\r\n     * @param searchElement The value to locate in the array.\r\n     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r\n     * search starts at index 0.\r\n     */\r\n    indexOf(searchElement: bigint, fromIndex?: number): number;\r\n\r\n    /**\r\n     * Adds all the elements of an array separated by the specified separator string.\r\n     * @param separator A string used to separate one element of an array from the next in the\r\n     * resulting String. If omitted, the array elements are separated with a comma.\r\n     */\r\n    join(separator?: string): string;\r\n\r\n    /** Yields each index in the array. */\r\n    keys(): IterableIterator<number>;\r\n\r\n    /**\r\n     * Returns the index of the last occurrence of a value in an array.\r\n     * @param searchElement The value to locate in the array.\r\n     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r\n     * search starts at index 0.\r\n     */\r\n    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r\n\r\n    /** The length of the array. */\r\n    readonly length: number;\r\n\r\n    /**\r\n     * Calls a defined callback function on each element of an array, and returns an array that\r\n     * contains the results.\r\n     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    map(callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint, thisArg?: any): BigInt64Array;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array. The return value of\r\n     * the callback function is the accumulated result, and is provided as an argument in the next\r\n     * call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array. The return value of\r\n     * the callback function is the accumulated result, and is provided as an argument in the next\r\n     * call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array, in descending order.\r\n     * The return value of the callback function is the accumulated result, and is provided as an\r\n     * argument in the next call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r\n     * the callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an\r\n     * argument instead of an array value.\r\n     */\r\n    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array, in descending order.\r\n     * The return value of the callback function is the accumulated result, and is provided as an\r\n     * argument in the next call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r\n     * the callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r\n\r\n    /** Reverses the elements in the array. */\r\n    reverse(): this;\r\n\r\n    /**\r\n     * Sets a value or an array of values.\r\n     * @param array A typed or untyped array of values to set.\r\n     * @param offset The index in the current array at which the values are to be written.\r\n     */\r\n    set(array: ArrayLike<bigint>, offset?: number): void;\r\n\r\n    /**\r\n     * Returns a section of an array.\r\n     * @param start The beginning of the specified portion of the array.\r\n     * @param end The end of the specified portion of the array.\r\n     */\r\n    slice(start?: number, end?: number): BigInt64Array;\r\n\r\n    /**\r\n     * Determines whether the specified callback function returns true for any element of an array.\r\n     * @param predicate A function that accepts up to three arguments. The some method calls the\r\n     * predicate function for each element in the array until the predicate returns true, or until\r\n     * the end of the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    some(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r\n\r\n    /**\r\n     * Sorts the array.\r\n     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r\n     */\r\n    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r\n\r\n    /**\r\n     * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements\r\n     * at begin, inclusive, up to end, exclusive.\r\n     * @param begin The index of the beginning of the array.\r\n     * @param end The index of the end of the array.\r\n     */\r\n    subarray(begin?: number, end?: number): BigInt64Array;\r\n\r\n    /** Converts the array to a string by using the current locale. */\r\n    toLocaleString(): string;\r\n\r\n    /** Returns a string representation of the array. */\r\n    toString(): string;\r\n\r\n    /** Returns the primitive value of the specified object. */\r\n    valueOf(): BigInt64Array;\r\n\r\n    /** Yields each value in the array. */\r\n    values(): IterableIterator<bigint>;\r\n\r\n    [Symbol.iterator](): IterableIterator<bigint>;\r\n\r\n    readonly [Symbol.toStringTag]: \"BigInt64Array\";\r\n\r\n    [index: number]: bigint;\r\n}\r\n\r\ninterface BigInt64ArrayConstructor {\r\n    readonly prototype: BigInt64Array;\r\n    new(length?: number): BigInt64Array;\r\n    new(array: Iterable<bigint>): BigInt64Array;\r\n    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigInt64Array;\r\n\r\n    /** The size in bytes of each element in the array. */\r\n    readonly BYTES_PER_ELEMENT: number;\r\n\r\n    /**\r\n     * Returns a new array from a set of elements.\r\n     * @param items A set of elements to include in the new array object.\r\n     */\r\n    of(...items: bigint[]): BigInt64Array;\r\n\r\n    /**\r\n     * Creates an array from an array-like or iterable object.\r\n     * @param arrayLike An array-like or iterable object to convert to an array.\r\n     * @param mapfn A mapping function to call on every element of the array.\r\n     * @param thisArg Value of 'this' used to invoke the mapfn.\r\n     */\r\n    from(arrayLike: ArrayLike<bigint>): BigInt64Array;\r\n    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigInt64Array;\r\n}\r\n\r\ndeclare var BigInt64Array: BigInt64ArrayConstructor;\r\n\r\n/**\r\n * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the\r\n * requested number of bytes could not be allocated, an exception is raised.\r\n */\r\ninterface BigUint64Array {\r\n    /** The size in bytes of each element in the array. */\r\n    readonly BYTES_PER_ELEMENT: number;\r\n\r\n    /** The ArrayBuffer instance referenced by the array. */\r\n    readonly buffer: ArrayBufferLike;\r\n\r\n    /** The length in bytes of the array. */\r\n    readonly byteLength: number;\r\n\r\n    /** The offset in bytes of the array. */\r\n    readonly byteOffset: number;\r\n\r\n    /**\r\n     * Returns the this object after copying a section of the array identified by start and end\r\n     * to the same array starting at position target\r\n     * @param target If target is negative, it is treated as length+target where length is the\r\n     * length of the array.\r\n     * @param start If start is negative, it is treated as length+start. If end is negative, it\r\n     * is treated as length+end.\r\n     * @param end If not specified, length of the this object is used as its default value.\r\n     */\r\n    copyWithin(target: number, start: number, end?: number): this;\r\n\r\n    /** Yields index, value pairs for every entry in the array. */\r\n    entries(): IterableIterator<[number, bigint]>;\r\n\r\n    /**\r\n     * Determines whether all the members of an array satisfy the specified test.\r\n     * @param predicate A function that accepts up to three arguments. The every method calls\r\n     * the predicate function for each element in the array until the predicate returns false,\r\n     * or until the end of the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    every(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r\n\r\n    /**\r\n     * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array\r\n     * @param value value to fill array section with\r\n     * @param start index to start filling the array at. If start is negative, it is treated as\r\n     * length+start where length is the length of the array.\r\n     * @param end index to stop filling the array at. If end is negative, it is treated as\r\n     * length+end.\r\n     */\r\n    fill(value: bigint, start?: number, end?: number): this;\r\n\r\n    /**\r\n     * Returns the elements of an array that meet the condition specified in a callback function.\r\n     * @param predicate A function that accepts up to three arguments. The filter method calls\r\n     * the predicate function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    filter(predicate: (value: bigint, index: number, array: BigUint64Array) => any, thisArg?: any): BigUint64Array;\r\n\r\n    /**\r\n     * Returns the value of the first element in the array where predicate is true, and undefined\r\n     * otherwise.\r\n     * @param predicate find calls predicate once for each element of the array, in ascending\r\n     * order, until it finds one where predicate returns true. If such an element is found, find\r\n     * immediately returns that element value. Otherwise, find returns undefined.\r\n     * @param thisArg If provided, it will be used as the this value for each invocation of\r\n     * predicate. If it is not provided, undefined is used instead.\r\n     */\r\n    find(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): bigint | undefined;\r\n\r\n    /**\r\n     * Returns the index of the first element in the array where predicate is true, and -1\r\n     * otherwise.\r\n     * @param predicate find calls predicate once for each element of the array, in ascending\r\n     * order, until it finds one where predicate returns true. If such an element is found,\r\n     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r\n     * @param thisArg If provided, it will be used as the this value for each invocation of\r\n     * predicate. If it is not provided, undefined is used instead.\r\n     */\r\n    findIndex(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): number;\r\n\r\n    /**\r\n     * Performs the specified action for each element in an array.\r\n     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    forEach(callbackfn: (value: bigint, index: number, array: BigUint64Array) => void, thisArg?: any): void;\r\n\r\n    /**\r\n     * Determines whether an array includes a certain element, returning true or false as appropriate.\r\n     * @param searchElement The element to search for.\r\n     * @param fromIndex The position in this array at which to begin searching for searchElement.\r\n     */\r\n    includes(searchElement: bigint, fromIndex?: number): boolean;\r\n\r\n    /**\r\n     * Returns the index of the first occurrence of a value in an array.\r\n     * @param searchElement The value to locate in the array.\r\n     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r\n     * search starts at index 0.\r\n     */\r\n    indexOf(searchElement: bigint, fromIndex?: number): number;\r\n\r\n    /**\r\n     * Adds all the elements of an array separated by the specified separator string.\r\n     * @param separator A string used to separate one element of an array from the next in the\r\n     * resulting String. If omitted, the array elements are separated with a comma.\r\n     */\r\n    join(separator?: string): string;\r\n\r\n    /** Yields each index in the array. */\r\n    keys(): IterableIterator<number>;\r\n\r\n    /**\r\n     * Returns the index of the last occurrence of a value in an array.\r\n     * @param searchElement The value to locate in the array.\r\n     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r\n     * search starts at index 0.\r\n     */\r\n    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r\n\r\n    /** The length of the array. */\r\n    readonly length: number;\r\n\r\n    /**\r\n     * Calls a defined callback function on each element of an array, and returns an array that\r\n     * contains the results.\r\n     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    map(callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint, thisArg?: any): BigUint64Array;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array. The return value of\r\n     * the callback function is the accumulated result, and is provided as an argument in the next\r\n     * call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array. The return value of\r\n     * the callback function is the accumulated result, and is provided as an argument in the next\r\n     * call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r\n     * callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array, in descending order.\r\n     * The return value of the callback function is the accumulated result, and is provided as an\r\n     * argument in the next call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r\n     * the callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an\r\n     * argument instead of an array value.\r\n     */\r\n    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r\n\r\n    /**\r\n     * Calls the specified callback function for all the elements in an array, in descending order.\r\n     * The return value of the callback function is the accumulated result, and is provided as an\r\n     * argument in the next call to the callback function.\r\n     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r\n     * the callbackfn function one time for each element in the array.\r\n     * @param initialValue If initialValue is specified, it is used as the initial value to start\r\n     * the accumulation. The first call to the callbackfn function provides this value as an argument\r\n     * instead of an array value.\r\n     */\r\n    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r\n\r\n    /** Reverses the elements in the array. */\r\n    reverse(): this;\r\n\r\n    /**\r\n     * Sets a value or an array of values.\r\n     * @param array A typed or untyped array of values to set.\r\n     * @param offset The index in the current array at which the values are to be written.\r\n     */\r\n    set(array: ArrayLike<bigint>, offset?: number): void;\r\n\r\n    /**\r\n     * Returns a section of an array.\r\n     * @param start The beginning of the specified portion of the array.\r\n     * @param end The end of the specified portion of the array.\r\n     */\r\n    slice(start?: number, end?: number): BigUint64Array;\r\n\r\n    /**\r\n     * Determines whether the specified callback function returns true for any element of an array.\r\n     * @param predicate A function that accepts up to three arguments. The some method calls the\r\n     * predicate function for each element in the array until the predicate returns true, or until\r\n     * the end of the array.\r\n     * @param thisArg An object to which the this keyword can refer in the predicate function.\r\n     * If thisArg is omitted, undefined is used as the this value.\r\n     */\r\n    some(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r\n\r\n    /**\r\n     * Sorts the array.\r\n     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r\n     */\r\n    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r\n\r\n    /**\r\n     * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements\r\n     * at begin, inclusive, up to end, exclusive.\r\n     * @param begin The index of the beginning of the array.\r\n     * @param end The index of the end of the array.\r\n     */\r\n    subarray(begin?: number, end?: number): BigUint64Array;\r\n\r\n    /** Converts the array to a string by using the current locale. */\r\n    toLocaleString(): string;\r\n\r\n    /** Returns a string representation of the array. */\r\n    toString(): string;\r\n\r\n    /** Returns the primitive value of the specified object. */\r\n    valueOf(): BigUint64Array;\r\n\r\n    /** Yields each value in the array. */\r\n    values(): IterableIterator<bigint>;\r\n\r\n    [Symbol.iterator](): IterableIterator<bigint>;\r\n\r\n    readonly [Symbol.toStringTag]: \"BigUint64Array\";\r\n\r\n    [index: number]: bigint;\r\n}\r\n\r\ninterface BigUint64ArrayConstructor {\r\n    readonly prototype: BigUint64Array;\r\n    new(length?: number): BigUint64Array;\r\n    new(array: Iterable<bigint>): BigUint64Array;\r\n    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigUint64Array;\r\n\r\n    /** The size in bytes of each element in the array. */\r\n    readonly BYTES_PER_ELEMENT: number;\r\n\r\n    /**\r\n     * Returns a new array from a set of elements.\r\n     * @param items A set of elements to include in the new array object.\r\n     */\r\n    of(...items: bigint[]): BigUint64Array;\r\n\r\n    /**\r\n     * Creates an array from an array-like or iterable object.\r\n     * @param arrayLike An array-like or iterable object to convert to an array.\r\n     * @param mapfn A mapping function to call on every element of the array.\r\n     * @param thisArg Value of 'this' used to invoke the mapfn.\r\n     */\r\n    from(arrayLike: ArrayLike<bigint>): BigUint64Array;\r\n    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigUint64Array;\r\n}\r\n\r\ndeclare var BigUint64Array: BigUint64ArrayConstructor;\r\n\r\ninterface DataView {\r\n    /**\r\n     * Gets the BigInt64 value at the specified byte offset from the start of the view. There is\r\n     * no alignment constraint; multi-byte values may be fetched from any offset.\r\n     * @param byteOffset The place in the buffer at which the value should be retrieved.\r\n     */\r\n    getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;\r\n\r\n    /**\r\n     * Gets the BigUint64 value at the specified byte offset from the start of the view. There is\r\n     * no alignment constraint; multi-byte values may be fetched from any offset.\r\n     * @param byteOffset The place in the buffer at which the value should be retrieved.\r\n     */\r\n    getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;\r\n\r\n    /**\r\n     * Stores a BigInt64 value at the specified byte offset from the start of the view.\r\n     * @param byteOffset The place in the buffer at which the value should be set.\r\n     * @param value The value to set.\r\n     * @param littleEndian If false or undefined, a big-endian value should be written,\r\n     * otherwise a little-endian value should be written.\r\n     */\r\n    setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r\n\r\n    /**\r\n     * Stores a BigUint64 value at the specified byte offset from the start of the view.\r\n     * @param byteOffset The place in the buffer at which the value should be set.\r\n     * @param value The value to set.\r\n     * @param littleEndian If false or undefined, a big-endian value should be written,\r\n     * otherwise a little-endian value should be written.\r\n     */\r\n    setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r\n}\r\n\r\ndeclare namespace Intl{\r\n    interface NumberFormat {\r\n        format(value: number | bigint): string;\r\n        resolvedOptions(): ResolvedNumberFormatOptions;\r\n    }\r\n}\r\n"
    ]
  