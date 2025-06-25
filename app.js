const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);

function App() {
    const counterOne = <Counter name={counterName} />;
    const counterTwo = <Counter2 name={counterName} />;
    return (
        <>
            <h1>Counters</h1>
            <section>
                {counterName === "One" ? counterOne : counterTwo}
            </section>
        </>
    );
}

function Counter({ name }) {
    return (
        <article>
            <h2>Counter {name}</h2>
            <p>You clicked 1 times</p>
            <button className="button">
                Click me
            </button>
        </article>
    );
}

function Counter2({ name }) {
    return (
        <article>
            <h2>Counter {name}</h2>
            <p>Times clicked: 1</p>
            <button className="button">
                Click me
            </button>
        </article>
    );
}

function rerender() {
    console.log("Rerender...");
    counterName = "Two";
    root.render(<App />);
}

console.log("1" == 1);
console.log("1" === 1);

let a = {name: "Tony"};
let b = {name: "Tony"};
let c = a;

console.log(a === b); // false, different objects
console.log(a === c); // true, same object reference
console.log(a == b); // false, different objects
console.log(Object.is(a, b)); // false, different objects
console.log(Object.is(a, c)); // true, same object reference    