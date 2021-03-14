import {combineReducers} from "redux";
import {todoReducer} from "./todo/reducer";
import {themeReducer} from "./theme/reducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer
});