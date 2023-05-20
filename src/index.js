import ReactDOM from "react-dom/client";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import ReactApp from "./react-folder/react";

function Page () {
    return (
        ReactApp()
    )
}


const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(Page());
