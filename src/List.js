import React from "react";
import "./List.css";
import Task from "./Task";
import { useSelector } from "react-redux";

function List() {
    const displayAddTodo = useSelector((state) => state.displayAddTodo);
    const displayTodo = useSelector((state) => state.displayTodo);
    const todos = useSelector((state) => state.todos);

    return (
        <div className="List">
            {displayAddTodo ? <Task addTask /> : null}

            {todos.todos.map((todo) =>
                todo.state === displayTodo ? (
                    <div className="List_Task">
                        <Task
                            content={todo.name}
                            time={todo.date}
                            state={todo.state}
                        />
                    </div>
                ) : null
            )}
        </div>
    );
}

export default List;
