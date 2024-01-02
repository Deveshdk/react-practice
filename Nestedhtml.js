/**
 * 
 * <div id="parent">
 *  <div id="childen1">
 *      <h1>I am an h1 tag</h1>
 *      <h2>I am an h2 tag</h2>
 *  </div>
 *  <div id="childen2s">
 *      <h1>I am an h1 tag</h1>
 *      <h2>I am an h2 tag</h2>
 *  </div>
 * </div>
 * 
 * To have sibling childen we can use an array of children.
 * 
 */
import React from "react";
import { ReactDOM } from "react-dom";


const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
            "div",
            {id:"children1"},
            [React.createElement(
                "h1",{id:"heading"},"I am an h1 tag."
            ),React.createElement("h2",{id:"heading"},"I am an h2 tag.")]
        ),
        React.createElement(
            "div",
            {id:"children2"},
            [React.createElement(
                "h1",{id:"heading"},"I am an h1 tag."
            ),React.createElement("h2",{id:"heading"},"I am an h2 tag.")]
        )
    ]
   
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);