import {DISABLE_DARK_THEME, ENABLE_DARK_THEME} from "./types";

const initialState = {
    dark: false
};

export const themeReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ENABLE_DARK_THEME:
            return {...state, dark: true};

        case DISABLE_DARK_THEME:
            return {...state, dark: false};

        default: return state;
    }

};