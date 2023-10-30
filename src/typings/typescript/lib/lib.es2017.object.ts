
    export default [
      "typescript/lib/lib.es2017.object.d.ts",
      "/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib=\"true\"/>\r\n\n\ninterface ObjectConstructor {\r\n    /**\r\n     * Returns an array of values of the enumerable properties of an object\r\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r\n     */\r\n    values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];\r\n\r\n    /**\r\n     * Returns an array of values of the enumerable properties of an object\r\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r\n     */\r\n    values(o: {}): any[];\r\n\r\n    /**\r\n     * Returns an array of key/values of the enumerable properties of an object\r\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r\n     */\r\n    entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];\r\n\r\n    /**\r\n     * Returns an array of key/values of the enumerable properties of an object\r\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r\n     */\r\n    entries(o: {}): [string, any][];\r\n\r\n    /**\r\n     * Returns an object containing all own property descriptors of an object\r\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r\n     */\r\n    getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };\r\n}\r\n"
    ]
  