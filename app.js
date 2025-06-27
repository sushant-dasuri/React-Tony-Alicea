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

    const clickHandler = (event) => {
        console.log("React handled the click event");
        console.log(event);
    }
    return (
        <article>
            <h2>Counter {name}</h2>
            <p>You clicked 1 times</p>
            <button className="button" onClick={clickHandler}>
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

rootNode.addEventListener("click", function(event) {
  if(event.target.tagName === "BUTTON") {
     console.log("Clicked the button");
  }
  else {
    console.log("Didn't clicked the button");
  }

})