
// This is how we  create a elements in react basic structure
// const heading =  React.createElement(
//     "h1", {}, "Hello world from react"
// );

// Nested structure 
const heading =  React.createElement(
        "div", {}, [React.createElement("h2",{},"I'm child"),
        React.createElement("h2",{},"I'm child 2")]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);