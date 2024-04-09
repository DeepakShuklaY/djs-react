/*
<div id = "parent">
    <div id = "child">
        <h1> I am an h1 tag. </h1>
        <h1> I am an h1 tag. </h1>
    <div>
<div>


*/





const elements = React.createElement("div", {id:"parent"} , 
    React.createElement("div", {id:"child"} , 
        [React.createElement("h1", {} , ["I am an h1 tag.", "Djs","Love"]) , React.createElement("h2", {} , "I am an h2 tag.")]
    )
);

console.log("heading = ",elements);
console.log(elements.$$typeof);

function abc(){}

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root = ",root);

console.log("root.render(heading); = ",root.render(elements));
