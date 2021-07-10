
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\playlistSoundConfig.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * Playlist Sound Configuration Sheet\n * @typeParam P - the type of the options object\n */\ndeclare class PlaylistSoundConfig<P extends FormApplication.Options = FormApplication.Options> extends FormApplication<\n  P,\n  PlaylistSoundConfig.Data,\n  Playlist.Sound\n> {\n  /**\n   * @param playlist - The Playlist entity within which the Sound is configured\n   * @param sound    - An Object for the Playlist Sound data\n   * @param options  - Additional application rendering options\n   */\n  constructor(playlist: PlaylistSoundConfig['playlist'], sound: Playlist.Sound, options: Partial<P>);\n\n  playlist: Playlist;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   id: \"track-config\",\n   *   template: \"templates/playlist/edit-track.html\",\n   *   width: 360\n   * });\n   * ```\n   */\n  static get defaultOptions(): typeof FormApplication['defaultOptions'];\n\n  /**\n   * @override\n   */\n  get title(): string;\n\n  /**\n   * @param options - (unused)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): PlaylistSoundConfig.Data;\n\n  /**\n   * @param event - (unused)\n   * @override\n   */\n  protected _updateObject(event: Event, formData: PlaylistSoundConfig.FormData): Promise<Playlist>;\n\n  /**\n   * @override\n   */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * Auto-populate the track name using the provided filename, if a name is not already set\n   */\n  protected _onSourceChange(event: JQuery.ChangeEvent): void;\n}\n\ndeclare namespace PlaylistSoundConfig {\n  interface Data extends foundry.utils.Duplicated<PlaylistSoundConfig['object']> {\n    lvolume: number;\n  }\n\n  type FormData = Pick<Data, 'lvolume'> & Pick<Playlist.Sound, 'name' | 'path' | 'repeat' | 'streaming'>;\n}\n"
    ]
  