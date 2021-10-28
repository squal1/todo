import React from "react";
import "./App.css";
import List from "./List";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
    return (
        <div className="App">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="App_body">
                    <div className="Header">
                        <Navbar />
                    </div>
                    <div className="Body">
                        <Sidebar />
                        <List />
                    </div>
                </div>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default App;
