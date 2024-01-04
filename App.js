import React from "react";
import ReactDOM from "react-dom/client";

// JSX React Element
const jsxheading = 
(<h1 className="head" tabIndex="1">Welcome React 🪱</h1>);

// React Functional Component

const SingleLineJSXHeadingComponent =()=>{
    return <h1>This a React Functional Component returning single JSX/ reactElement</h1>
};

const HeadingComponent = () =>(
    <div id="container">
        <h1 id="heading"> This is a Functional Component returning div type react element.</h1>
    </div>
);

// Component Composition
const HeadingComponent2 = ()=>(
    <div id="container2">
        {/* {HeadingComponent()}  or <HeadingComponent/> or <HeadingComponent></HeadingComponent> 
            we can call HeadingComponent inside curly braces as well because at the end of the day component is also a normal javascript function and
            any javascript function can be called inside curly function inside JSX */}
        <HeadingComponent />
        <h1 id="heading">We are adding one componet into another component/ Component Composition</h1>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));

// This is how we render react element.
//root.render(jsxheading);

// This is how we render Functional Component
root.render(<HeadingComponent2 />);