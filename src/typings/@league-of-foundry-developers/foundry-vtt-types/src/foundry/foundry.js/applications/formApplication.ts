
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplication.d.ts",
      "/**\n * An abstract pattern for defining an Application responsible for updating some object using an HTML form\n *\n * A few critical assumptions:\n * 1) This application is used to only edit one object at a time\n * 2) The template used contains one (and only one) HTML form as it's outer-most element\n * 3) This abstract layer has no knowledge of what is being updated, so the implementation must define _updateObject\n *\n * @typeParam Options        - the type of the options object\n * @typeParam Data           - The data structure used to render the handlebars template.\n * @typeParam ConcreteObject - the type of the object or {@link foundry.abstract.Document} which is modified by this form\n */\ndeclare abstract class FormApplication<\n  Options extends FormApplication.Options = FormApplication.Options,\n  Data extends object = FormApplication.Data<{}, Options>,\n  ConcreteObject = Data extends FormApplication.Data<infer T, Options> ? T : {}\n> extends Application<Options> {\n  /**\n   * @param object  - Some object or entity which is the target to be updated.\n   * @param options - Additional options which modify the rendering of the sheet.\n   *                  (default: `{}`)\n   * @remarks Foundry allows passing no value to the constructor at all.\n   */\n  constructor(object: ConcreteObject, options?: Partial<Options>);\n\n  /**\n   * The object target which we are using this form to modify\n   */\n  object: ConcreteObject;\n\n  /**\n   * A convenience reference to the form HTLMElement\n   * @defaultValue `null`\n   */\n  form: HTMLElement | null;\n\n  /**\n   * Keep track of any FilePicker instances which are associated with this form\n   * The values of this Array are inner-objects with references to the FilePicker instances and other metadata\n   * @defaultValue `[]`\n   */\n  filepickers: FilePicker[];\n\n  /**\n   * Keep track of any mce editors which may be active as part of this form\n   * The values of this Array are inner-objects with references to the MCE editor and other metadata\n   * @defaultValue `{}`\n   */\n  editors: Partial<Record<string, FormApplication.FormApplicationEditor>>;\n\n  /**\n   * Assign the default options which are supported by the entity edit sheet.\n   * @returns The default options for this FormApplication class\n   * @override\n   * @see {@link Application.defaultOptions}\n   * @defaultValue\n   * ```typescript\n   * foundry.utils.mergeObject(super.defaultOptions, {\n   *   classes: ['form'],\n   *   closeOnSubmit: true,\n   *   submitOnChange: false,\n   *   submitOnClose: false,\n   *   editable: true\n   * });\n   * ```\n   */\n  static get defaultOptions(): FormApplication.Options;\n\n  /**\n   * Is the Form Application currently editable?\n   */\n  get isEditable(): boolean;\n\n  /**\n   * @param options - (default: `{}`)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): Data | Promise<Data>;\n\n  /**\n   * @override\n   */\n  protected _render(force?: boolean, options?: Application.RenderOptions): Promise<void>;\n\n  /**\n   * @override\n   */\n  protected _renderInner(data: Data): Promise<JQuery>;\n\n  /**\n   * @override\n   */\n  protected _activateCoreListeners(html: JQuery): void;\n\n  /**\n   * @override\n   */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * If the form is not editable, disable its input fields\n   * @param form - The form HTML\n   */\n  protected _disableFields(form: HTMLElement): void;\n\n  /**\n   * Handle standard form submission steps\n   * @param event         - The submit event which triggered this handler\n   * @param updateData    - Additional specific data keys/values which override or extend the contents of\n   *                        the parsed form. This can be used to update other flags or data fields at the\n   *                        same time as processing a form submission to avoid multiple database operations.\n   *                        (default: `null`)\n   * @param preventClose  - Override the standard behavior of whether to close the form on submit\n   *                        (default: `false`)\n   * @param preventRender - Prevent the application from re-rendering as a result of form submission\n   *                        (default: `false`)\n   * @returns A promise which resolves to the validated update data\n   */\n  protected _onSubmit(\n    event: Event,\n    { updateData, preventClose, preventRender }?: FormApplication.OnSubmitOptions\n  ): Promise<Partial<Record<string, unknown>>>;\n\n  /**\n   * Get an object of update data used to update the form's target object\n   * @param updateData - Additional data that should be merged with the form data\n   *                     (default: `{}`)\n   * @returns The prepared update data\n   */\n  // TODO: Maybe we can calculate how the flattened `updateData` looks like, then it would be Partial<Record<string, unknown>> & Flattened<T>\n  protected _getSubmitData(updateData?: object | null): Partial<Record<string, unknown>>;\n\n  /**\n   * Handle changes to an input element, submitting the form if options.submitOnChange is true.\n   * Do not preventDefault in this handler as other interactions on the form may also be occurring.\n   * @param event - The initial change event\n   */\n  protected _onChangeInput(event: JQuery.ChangeEvent): void | Promise<Partial<Record<string, unknown>>>;\n\n  /**\n   * Handle the change of a color picker input which enters it's chosen value into a related input field\n   */\n  protected _onChangeColorPicker(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Handle changes to a range type input by propagating those changes to the sibling range-value element\n   * @param event - The initial change event\n   */\n  protected _onChangeRange(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Additional handling which should trigger when a FilePicker contained within this FormApplication is submitted.\n   * @param selection  - The target path which was selected\n   * @param filePicker - The FilePicker instance which was submitted\n   */\n  protected _onSelectFile(selection: string, filePicker: FilePicker): void;\n\n  /**\n   * This method is called upon form submission after form data is validated\n   * @param event    - The initial triggering submission event\n   *                   (unused)\n   * @param formData - The object of validated form data with which to update the object\n   *                   (unused)\n   * @returns A Promise which resolves once the update operation has completed\n   */\n  protected abstract _updateObject(event: Event, formData?: object): Promise<unknown>;\n\n  /**\n   * Activate a named TinyMCE text editor\n   * @param name           - The named data field which the editor modifies.\n   * @param options        - TinyMCE initialization options passed to TextEditor.create\n   *                         (default: `{}`)\n   * @param initialContent - Initial text content for the editor area.\n   *                         (default: `''`)\n   */\n  activateEditor(name: string, options?: TextEditor.Options, initialContent?: string): void;\n\n  /**\n   * Handle saving the content of a specific editor by name\n   * @param name   - The named editor to save\n   * @param remove - Remove the editor after saving its content\n   *                 (default: `true`)\n   */\n  saveEditor(name: string, { remove }?: { remove?: boolean }): Promise<void>;\n\n  /**\n   * Activate a TinyMCE editor instance present within the form\n   */\n  protected _activateEditor(div: HTMLElement): void;\n\n  /**\n   * Activate a FilePicker instance present within the form\n   * @param event - The mouse click event on a file picker activation button\n   */\n  protected _activateFilePicker(event: PointerEvent): void;\n\n  /**\n   * Determine the configuration options used to initialize a FilePicker instance within this FormApplication.\n   * Subclasses can extend this method to customize the behavior of pickers within their form.\n   * @param event - The initiating mouse click event which opens the picker\n   * @returns Options passed to the FilePicker constructor\n   */\n  protected _getFilePickerOptions(event: PointerEvent): FilePickerOptions;\n\n  /**\n   * @param options - (default: `{}`)\n   * @override\n   */\n  close(options?: FormApplication.CloseOptions): Promise<void>;\n\n  /**\n   * Submit the contents of a Form Application, processing its content as defined by the Application\n   * @param options - Options passed to the _onSubmit event handler\n   *                  (default: `{}`)\n   * @returns Return a self-reference for convenient method chaining\n   */\n  submit(options?: FormApplication.OnSubmitOptions): Promise<this> | void;\n}\n\ndeclare interface ApplicationOptions {\n  /**\n   * Whether to automatically close the application when it's contained\n   * form is submitted.\n   * @defaultValue `true`\n   */\n  closeOnSubmit: boolean;\n\n  /**\n   * Whether to automatically submit the contained HTML form when an input\n   * or select element is changed.\n   * @defaultValue `false`\n   */\n  submitOnChange: boolean;\n\n  /**\n   * Whether to automatically submit the contained HTML form when the\n   * application window is manually closed.\n   * @defaultValue `false`\n   */\n  submitOnClose: boolean;\n\n  /**\n   * Whether the application form is editable - if true, it's fields will\n   * be unlocked and the form can be submitted. If false, all form fields\n   * will be disabled and the form cannot be submitted.\n   * @defaultValue `true`\n   */\n  editable: boolean;\n}\n\ndeclare namespace FormApplication {\n  interface CloseOptions extends Application.CloseOptions {\n    submit?: boolean;\n  }\n\n  /**\n   * @typeParam ConcreteObject - the type of the object\n   * @typeParam Options        - the type of the options object\n   */\n  interface Data<ConcreteObject, Options extends FormApplication.Options = FormApplication.Options> {\n    object: ConcreteObject;\n    options: Options;\n    title: string;\n  }\n\n  interface FormApplicationEditor {\n    target: string;\n    button: HTMLElement;\n    hasButton: boolean;\n    mce: tinyMCE.Editor | null;\n    active: boolean;\n    changed: boolean;\n    options: TextEditor.Options;\n    initial: string;\n  }\n\n  interface OnSubmitOptions {\n    /**\n     * Additional specific data keys/values which override or extend the contents of\n     * the parsed form. This can be used to update other flags or data fields at the\n     * same time as processing a form submission to avoid multiple database operations.\n     * @defaultValue `null`\n     */\n    updateData?: object;\n\n    /**\n     * Override the standard behavior of whether to close the form on submit\n     * @defaultValue `false`\n     */\n    preventClose?: boolean;\n\n    /**\n     * Prevent the application from re-rendering as a result of form submission\n     * @defaultValue `false`\n     */\n    preventRender?: boolean;\n  }\n\n  interface Options extends Application.Options, ApplicationOptions {\n    /**\n     * @defaultValue `['form']`\n     */\n    classes: string[];\n  }\n}\n\ninterface FilePickerOptions {\n  field: HTMLElement | null;\n  type: string;\n  current: string;\n  button: HTMLElement;\n  callback: FormApplication['_onSelectFile'];\n}\n"
    ]
  