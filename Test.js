//{} is used for attributes eg. id 
// react.createelement is not much a javascript object.
// render function takes this javascript object and convert it into html.

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
