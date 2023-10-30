import { setupMonaco, updateActiveEditors } from "../editor";
import { NewOptionsType } from "../types";
import { titleCase } from "../utils/titleCase";

type JSPrimitive<T> = {
  constructor: ClientSettings.PartialSetting<T>["type"];
};

type Settings = {
  fontFamily: string;
  fontLigatures: string;
  theme: string;
  fontSize: number;
  wordWrap: boolean;
  enableMonacoEditor: boolean;
  loadTypesImmediately: boolean;
  delayedLoading: boolean;
  windowSize: string;
};

/**
 * Because I'm lazy
 */
export const settings: Settings = new Proxy({} as unknown as Settings, {
  get(_t: never, k: string) {
    if (!("settings" in game)) {
      throw new Error("Settings missing");
    }
    return game.settings.get("monaco-macro-editor", k);
  },
});

export function registerSettings() {
  defineSetting("theme", {
    default: "vs-dark",
    choices: {
      "vs-dark": "Dark",
      vs: "Light",
      "hc-black": "High Contrast",
    },
  });

  defineSetting("windowSize", {
    default: "medium",
    choices: {
      "small": "900 x 650",
      "medium": "1500 x 1000",
      "large": "1800 x 1200"
    },
  });

  defineSetting("delayedLoading", {
    hint: "Delay the loading of the monaco editor until the first editor is opened",
    default: true,
    onChange (value) {
      if(!value) {
        setupMonaco()
      }
    }
  })

  defineSetting('loadTypesImmediately', {
    default:false,
    hint: "Load types as soon as possible. If this is false then they'll be loaded when the first editor is opened.",
    onChange: () => {
      window.location.reload()
    }
  })

  defineSetting("fontFamily", {
    default: `Jetbrains Mono, Fira Code, monospace`,
  });

  defineSetting("fontLigatures", {
    default: true,
  });

  defineSetting("fontSize", {
    default: 12,
  });

  defineSetting("wordWrap", {
    default: true,
    onChange(value) {
      updateActiveEditors("wordWrap", value ? "on" : "off");
    },
  });

  defineSetting("enableMonacoEditor", {
    default: true,
    onChange: () => {
      // force a reload
      window.location.reload();
    },
  });


}

function defineSetting<T>(
  settingName: keyof Settings,
  options: Partial<ClientSettings.PartialSetting<T>>
): void {
  if ("settings" in game) {
    game.settings.register<string, string, T>(
      "monaco-macro-editor",
      settingName,
      {
        scope: "client",
        config: true,
        name: titleCase(settingName),
        type:
          options.type ??
          (options.default as unknown as JSPrimitive<T>).constructor ??
          undefined,
        onChange: (value) => {
          updateActiveEditors(settingName as keyof NewOptionsType, value);
        },
        ...options,
      }
    );
  }
}
