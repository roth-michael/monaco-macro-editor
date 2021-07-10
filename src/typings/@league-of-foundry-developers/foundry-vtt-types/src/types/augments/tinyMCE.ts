
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\types\\augments\\tinyMCE.d.ts",
      "import _tinymce from 'tinymce';\nimport type * as _tinymceTypes from 'tinymce';\ndeclare global {\n  // eslint-disable-next-line no-var\n  var tinyMCE: typeof _tinymce;\n  namespace tinyMCE {\n    type AddOnManager<T> = _tinymceTypes.AddOnManager<T>;\n    type Annotator = _tinymceTypes.Annotator;\n    type AstNode = _tinymceTypes.AstNode;\n    type Bookmark = _tinymceTypes.Bookmark;\n    type BookmarkManager = _tinymceTypes.BookmarkManager;\n    type Class = _tinymceTypes.Class;\n    type Color = _tinymceTypes.Color;\n    type ControlSelection = _tinymceTypes.ControlSelection;\n    type DOMUtils = _tinymceTypes.DOMUtils;\n    type Delay = _tinymceTypes.Delay;\n    type DomParser = _tinymceTypes.DomParser;\n    type DomParserSettings = _tinymceTypes.DomParserSettings;\n    type DomQuery = _tinymceTypes.DomQuery;\n    type DomSerializer = _tinymceTypes.DomSerializer;\n    type DomSerializerSettings = _tinymceTypes.DomSerializerSettings;\n    type DomTreeWalker = _tinymceTypes.DomTreeWalker;\n    type Editor = _tinymceTypes.Editor;\n    type EditorCommands = _tinymceTypes.EditorCommands;\n    type EditorEvent<T> = _tinymceTypes.EditorEvent<T>;\n    type EditorManager = _tinymceTypes.EditorManager;\n    type EditorModeApi = _tinymceTypes.EditorModeApi;\n    type EditorObservable = _tinymceTypes.EditorObservable;\n    type EditorSelection = _tinymceTypes.EditorSelection;\n    type EditorSettings = _tinymceTypes.EditorSettings;\n    type Entities = _tinymceTypes.Entities;\n    type Env = _tinymceTypes.Env;\n    type EventDispatcher<T> = _tinymceTypes.EventDispatcher<T>;\n    type EventUtils = _tinymceTypes.EventUtils;\n    type FocusManager = _tinymceTypes.FocusManager;\n    type Formatter = _tinymceTypes.Formatter;\n    type GeomRect = _tinymceTypes.GeomRect;\n    type HtmlSerializer = _tinymceTypes.HtmlSerializer;\n    type HtmlSerializerSettings = _tinymceTypes.HtmlSerializerSettings;\n    type I18n = _tinymceTypes.I18n;\n    type IconManager = _tinymceTypes.IconManager;\n    type JSON = _tinymceTypes.JSON;\n    type JSONP = _tinymceTypes.JSONP;\n    type JSONRequest = _tinymceTypes.JSONRequest;\n    type JSONRequestArgs = _tinymceTypes.JSONRequestArgs;\n    type JSONRequestSettings = _tinymceTypes.JSONRequestSettings;\n    type NotificationApi = _tinymceTypes.NotificationApi;\n    type NotificationManager = _tinymceTypes.NotificationManager;\n    type NotificationSpec = _tinymceTypes.NotificationSpec;\n    type Observable<T> = _tinymceTypes.Observable<T>;\n    type Plugin = _tinymceTypes.Plugin;\n    type PluginManager = _tinymceTypes.PluginManager;\n    type RangeUtils = _tinymceTypes.RangeUtils;\n    type RawEditorSettings = _tinymceTypes.RawEditorSettings;\n    type Rect = _tinymceTypes.Rect;\n    type Resource = _tinymceTypes.Resource;\n    type SaxParser = _tinymceTypes.SaxParser;\n    type SaxParserSettings = _tinymceTypes.SaxParserSettings;\n    type Schema = _tinymceTypes.Schema;\n    type SchemaSettings = _tinymceTypes.SchemaSettings;\n    type ScriptLoader = _tinymceTypes.ScriptLoader;\n    type Shortcuts = _tinymceTypes.Shortcuts;\n    type StyleSheetLoader = _tinymceTypes.StyleSheetLoader;\n    type Styles = _tinymceTypes.Styles;\n    type TextSeeker = _tinymceTypes.TextSeeker;\n    type Theme = _tinymceTypes.Theme;\n    type ThemeManager = _tinymceTypes.ThemeManager;\n    type TinyMCE = _tinymceTypes.TinyMCE;\n    type Tools = _tinymceTypes.Tools;\n    type URI = _tinymceTypes.URI;\n    type UndoManager = _tinymceTypes.UndoManager;\n    type VK = _tinymceTypes.VK;\n    type WindowManager = _tinymceTypes.WindowManager;\n    type Writer = _tinymceTypes.Writer;\n    type WriterSettings = _tinymceTypes.WriterSettings;\n    type XHR = _tinymceTypes.XHR;\n    type XHRSettings = _tinymceTypes.XHRSettings;\n  }\n\n  // eslint-disable-next-line no-var\n  var tinymce: typeof _tinymce;\n}\n"
    ]
  