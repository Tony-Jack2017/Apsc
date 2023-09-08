import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"
import App from "./src/App"

import "./src/styles/main.less"

const root = createRoot(document.getElementById("root") as Element)

root.render(
    <HashRouter>
        <App />
    </HashRouter>
)