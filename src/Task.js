import React, { useState } from "react";
import "./Task.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { addTodo, deleteTodo, doneTodo, displayUnfinishd } from "./actions";
import { useDispatch } from "react-redux";

function Task({ addTask, content, time, state }) {
    const dispatch = useDispatch();
    const [newTodoName, setNewTodoName] = useState("");
    const [newTodoDeadline, setNewTodoDeadline] = useState("");

    return !addTask ? (
        <div className="Task">
            <div className="Task_Content">
                <div className="Content">{content}</div>
                <p>{time}</p>
            </div>
            <div className="Task_Buttons">
                {state === "Unfinished" ? (
                    <IconButton
                        className="CheckCircleIcon"
                        onClick={() =>
                            dispatch(
                                doneTodo({
                                    name: content,
                                    date: time,
                                    state: state,
                                })
                            )
                        }
                    >
                        <CheckCircleIcon />
                    </IconButton>
                ) : null}

                <IconButton
                    className="DeleteIcon"
                    onClick={() =>
                        dispatch(
                            deleteTodo({
                                name: content,
                                date: time,
                                state: state,
                            })
                        )
                    }
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    ) : (
        /* Adding new task */
        <div className="Add_Task">
            <TextField
                id="standard-basic"
                label="New Task"
                variant="standard"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
            />
            <TextField
                id="standard-basic"
                label="Deadline"
                variant="standard"
                value={newTodoDeadline}
                onChange={(e) => setNewTodoDeadline(e.target.value)}
            />

            <div className="Add_Task_Buttons">
                {newTodoName === "" || newTodoDeadline === "" ? (
                    <Button variant="contained" size="small" disabled>
                        Add Task
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                            dispatch(
                                addTodo({
                                    name: newTodoName,
                                    date: newTodoDeadline,
                                })
                            );
                            setNewTodoName("");
                            setNewTodoDeadline("");
                            dispatch(displayUnfinishd());
                        }}
                    >
                        Add Task
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Task;
