const rootNode = document.getElementById("app");
console.log(rootNode);
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

console.log(React);

function App() {
    console.log("Called App");

    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me!"),
        )
    );
}

console.log(App);


//before React does the work
let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article")[0];

console.log(articleElements);
console.log(articleElement);    


//after react does it work
setTimeout(() => {
    let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article")[0];

console.log(articleElements);
console.log(articleElement);    
}, 1000);


