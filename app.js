const rootNode = document.getElementById("app");
console.log(rootNode);
let counterName = "One";
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return React.createElement("section", null,
           React.createElement("h1", null, "Counters"),
           React.createElement("section", null,
            React.createElement(Counter, null))
    )
}

function Counter({name}) {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", {className: "button", name: "Sushant"}, "Click me!"),
        )
    );
}





