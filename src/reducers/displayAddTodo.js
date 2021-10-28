const displayAddTodoReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLEADDTODO":
            return !state;
        default:
            return state;
    }
};

export default displayAddTodoReducer;
