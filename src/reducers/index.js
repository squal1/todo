import displayAddTodoReducer from "./displayAddTodo";
import displayTodoReducer from "./displayTodo";
import expReducer from "./experiment";
import todoReducer from "./todos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    todos: todoReducer,
    displayAddTodo: displayAddTodoReducer,
    displayTodo: displayTodoReducer,
    exp: expReducer,
});

export default allReducers;
