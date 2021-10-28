const displayTodoReducer = (state = "Unfinished", action) => {
    switch (action.type) {
        case "DISPLAYFINISHED":
            return "Finished";
        case "DISPLAYUNFINISHED":
            return "Unfinished";
        default:
            return state;
    }
};

export default displayTodoReducer;
