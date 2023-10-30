
    export default [
      "typescript/lib/lib.es2015.reflect.d.ts",
      "/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib=\"true\"/>\r\n\n\ndeclare namespace Reflect {\r\n    /**\r\n     * Calls the function with the specified object as the this value\r\n     * and the elements of specified array as the arguments.\r\n     * @param target The function to call.\r\n     * @param thisArgument The object to be used as the this object.\r\n     * @param argumentsList An array of argument values to be passed to the function.\r\n     */\r\n    function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;\r\n\r\n    /**\r\n     * Constructs the target with the elements of specified array as the arguments\r\n     * and the specified constructor as the `new.target` value.\r\n     * @param target The constructor to invoke.\r\n     * @param argumentsList An array of argument values to be passed to the constructor.\r\n     * @param newTarget The constructor to be used as the `new.target` object.\r\n     */\r\n    function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;\r\n\r\n    /**\r\n     * Adds a property to an object, or modifies attributes of an existing property.\r\n     * @param target Object on which to add or modify the property. This can be a native JavaScript object\r\n     *        (that is, a user-defined object or a built in object) or a DOM object.\r\n     * @param propertyKey The property name.\r\n     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\r\n     */\r\n    function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;\r\n\r\n    /**\r\n     * Removes a property from an object, equivalent to `delete target[propertyKey]`,\r\n     * except it won't throw if `target[propertyKey]` is non-configurable.\r\n     * @param target Object from which to remove the own property.\r\n     * @param propertyKey The property name.\r\n     */\r\n    function deleteProperty(target: object, propertyKey: PropertyKey): boolean;\r\n\r\n    /**\r\n     * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.\r\n     * @param target Object that contains the property on itself or in its prototype chain.\r\n     * @param propertyKey The property name.\r\n     * @param receiver The reference to use as the `this` value in the getter function,\r\n     *        if `target[propertyKey]` is an accessor property.\r\n     */\r\n    function get(target: object, propertyKey: PropertyKey, receiver?: any): any;\r\n\r\n    /**\r\n     * Gets the own property descriptor of the specified object.\r\n     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.\r\n     * @param target Object that contains the property.\r\n     * @param propertyKey The property name.\r\n     */\r\n    function getOwnPropertyDescriptor(target: object, propertyKey: PropertyKey): PropertyDescriptor | undefined;\r\n\r\n    /**\r\n     * Returns the prototype of an object.\r\n     * @param target The object that references the prototype.\r\n     */\r\n    function getPrototypeOf(target: object): object | null;\r\n\r\n    /**\r\n     * Equivalent to `propertyKey in target`.\r\n     * @param target Object that contains the property on itself or in its prototype chain.\r\n     * @param propertyKey Name of the property.\r\n     */\r\n    function has(target: object, propertyKey: PropertyKey): boolean;\r\n\r\n    /**\r\n     * Returns a value that indicates whether new properties can be added to an object.\r\n     * @param target Object to test.\r\n     */\r\n    function isExtensible(target: object): boolean;\r\n\r\n    /**\r\n     * Returns the string and symbol keys of the own properties of an object. The own properties of an object\r\n     * are those that are defined directly on that object, and are not inherited from the object's prototype.\r\n     * @param target Object that contains the own properties.\r\n     */\r\n    function ownKeys(target: object): (string | symbol)[];\r\n\r\n    /**\r\n     * Prevents the addition of new properties to an object.\r\n     * @param target Object to make non-extensible.\r\n     * @return Whether the object has been made non-extensible.\r\n     */\r\n    function preventExtensions(target: object): boolean;\r\n\r\n    /**\r\n     * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.\r\n     * @param target Object that contains the property on itself or in its prototype chain.\r\n     * @param propertyKey Name of the property.\r\n     * @param receiver The reference to use as the `this` value in the setter function,\r\n     *        if `target[propertyKey]` is an accessor property.\r\n     */\r\n    function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;\r\n\r\n    /**\r\n     * Sets the prototype of a specified object o to object proto or null.\r\n     * @param target The object to change its prototype.\r\n     * @param proto The value of the new prototype or null.\r\n     * @return Whether setting the prototype was successful.\r\n     */\r\n    function setPrototypeOf(target: object, proto: object | null): boolean;\r\n}\r\n"
    ]
  