export const toggleAddTodo = () => {
    return {
        type: "TOGGLEADDTODO",
    };
};

export const displayUnfinishd = () => {
    return {
        type: "DISPLAYUNFINISHED",
    };
};

export const displayFinishd = () => {
    return {
        type: "DISPLAYFINISHED",
    };
};

export const addTodo = ({ name, date }) => {
    return {
        type: "ADDTODO",
        payload: { name: name, date: date, state: "Unfinished" },
    };
};

export const deleteTodo = ({ name, date, state }) => {
    return {
        type: "DELETETODO",
        payload: { name: name, date: date, state: state },
    };
};

export const doneTodo = ({ name, date, state }) => {
    return {
        type: "DONETODO",
        payload: { name: name, date: date, state: state },
    };
};
