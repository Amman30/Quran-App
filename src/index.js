import React from "react";
import ReactDOM from "react-dom";
import config from "../package.json";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
