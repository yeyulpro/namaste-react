import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1", 
    {id:"heading",
        color:"yellow"
    }, // this object is used to give these attribute (h1) to a tag
    "Hello World from React!!.")

const root = ReactDOM.createRoot(document.getElementById("root"))  // root is a place where all react codes will run.

root.render(heading)     //render is convering obj to html adding brace to tag