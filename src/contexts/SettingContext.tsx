"use client";

import { Direction } from "@mui/material/styles";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

// ============================================================
export type SettingsOptions = { direction: Direction };
// ============================================================

// SET "rtl" OR "ltr" HERE
// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCAL STORAGE
const initialSettings: SettingsOptions = { direction: "ltr" };

export const SettingsContext = createContext({
  settings: initialSettings,
  updateSettings: (arg: SettingsOptions) => {}
});

export default function SettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState(initialSettings);

  const updateSettings = (updatedSetting: SettingsOptions) => {
    setSettings(updatedSetting);
    window.localStorage.setItem("settings", JSON.stringify(updatedSetting));
  };

  useEffect(() => {
    if (!window) return;
    const getItem = window.localStorage.getItem("settings");
    if (getItem) setSettings(JSON.parse(getItem));
    else setSettings(initialSettings);
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
