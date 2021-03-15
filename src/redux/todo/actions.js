import {TODO_CREATE, TODO_FETCH, TODO_REMOVE} from "./types";

export const addTodo = (todo) => ({type: TODO_CREATE, payload: todo});
export const removeTodo = (id) => ({type: TODO_REMOVE, payload: id});

export const fetchTodos = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos = await response.json();
        dispatch({type: TODO_FETCH, payload: todos.map(i => ({...i, id: Math.random().toString()}))});
    };
}