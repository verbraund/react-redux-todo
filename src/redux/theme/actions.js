import {ENABLE_DARK_THEME, DISABLE_DARK_THEME} from "./types";

export const enableDarkTheme = () => ({type: ENABLE_DARK_THEME});
export const disableDarkTheme = () => ({type: DISABLE_DARK_THEME});