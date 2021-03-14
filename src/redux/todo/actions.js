import {TODO_CREATE, TODO_REMOVE} from "./types";

export const addTodo = (todo) => ({type: TODO_CREATE, payload: todo});
export const removeTodo = (id) => ({type: TODO_REMOVE, payload: id});