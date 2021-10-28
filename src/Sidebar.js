import React from "react";
import "./Sidebar.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toggleAddTodo, displayFinishd, displayUnfinishd } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const theme = createTheme({
    palette: {
        add: {
            main: "#647483",
        },
        unfinished: {
            main: "#e74444",
        },
        finished: {
            main: "#44e750",
        },
    },
});

function Sidebar() {
    const dispatch = useDispatch();
    const displayTodo = useSelector((state) => state.displayTodo);
    const displayAddTodo = useSelector((state) => state.displayAddTodo);

    return (
        <div className="Sidebar">
            <ThemeProvider theme={theme}>
                <div className="Sidebar_button">
                    <Button
                        variant={displayAddTodo === true ? "contained" : "text"}
                        size="large"
                        color="add"
                        onClick={() => {
                            dispatch(toggleAddTodo());
                        }}
                    >
                        <h3>Add Task</h3>
                    </Button>
                </div>
                <div className="Sidebar_button">
                    <Button
                        variant={
                            displayTodo === "Unfinished" ? "contained" : "text"
                        }
                        size="large"
                        color="unfinished"
                        onClick={() => {
                            dispatch(displayUnfinishd());
                        }}
                    >
                        <h3>Unfinished tasks</h3>
                    </Button>
                </div>
                <div className="Sidebar_button">
                    <Button
                        variant={
                            displayTodo !== "Unfinished" ? "contained" : "text"
                        }
                        size="large"
                        color="finished"
                        onClick={() => dispatch(displayFinishd())}
                    >
                        <h3>Finished tasks</h3>
                    </Button>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Sidebar;
