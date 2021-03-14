import {TODO_CREATE, TODO_REMOVE} from "./types";


const initialState = [];

export const todoReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case TODO_CREATE:
            return [...state, payload];

        case TODO_REMOVE:
            return state.filter(i => i.id !== payload);

        default: return state;
    }
};