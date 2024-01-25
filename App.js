const parent= React.createElement("div",{ id: "parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Am an h1 tag"),
        React.createElement("h2",{},"Am an h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Am an h1 tag"),
        React.createElement("h2",{},"Am an h2 tag")
    ])
]);

console.log(parent); //printing the object "parent"
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//const heading= React.createElement("h1",{ id: "heading", abc: "xyz"},"Hello World from react");--creating single h1 tag
//const heading= React.createElement("h1",{ id: "heading", abc: "xyz"},[React.createElement("h1",{},"Am an h1 tag"),React.createElement("h2",{},"Am an h2 tag")]);--creating two sub tags h1 & h2 inside div tag
