import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import BodyLayout  from "./components/BodyLayout.js"

const AppLayout = () => (
    <div>
        <Header/>
        <BodyLayout/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
