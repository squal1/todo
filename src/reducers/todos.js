const initialState = {
    todos: [
        {
            name: "This is a exercise for a todo-app with React and Redux",
            date: "10/28",
            state: "Unfinished",
        },
    ],
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "DELETETODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) =>
                        action.payload.name !== todo.name ||
                        action.payload.date !== todo.date ||
                        action.payload.state !== todo.state
                ),
            };
        case "DONETODO":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (
                        todo.name === action.payload.name &&
                        todo.date === action.payload.date &&
                        todo.state === action.payload.state
                    ) {
                        return { ...todo, state: "Finished" };
                    }
                    return todo;
                }),
            };
        default:
            return state;
    }
};

export default todoReducer;
