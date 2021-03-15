import {TODO_CREATE, TODO_FETCH, TODO_REMOVE} from "./types";


const initialState = [];

export const todoReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case TODO_CREATE:
            return [...state, payload];

        case TODO_REMOVE:
            return state.filter(i => i.id !== payload);

        case TODO_FETCH:
            return [...state, ...payload];

        default: return state;
    }
};