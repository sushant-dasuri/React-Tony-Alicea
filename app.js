





const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);

function App() {
  
    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
                 <Counter name="Two" />
            </section>
        </>
    );
}

function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState(0);
    let myName = " ";
    let setMyName = null;
    if(numOfClicks < 2) {
         [myName, setMyName] = React.useState("Sushant");
    }
        const [state, dispatch] = React.useReducer(() => {

    }, "Dasuri")

    function incrementCounter() {
        setNumOfClicks(numOfClicks + 1);
    }
    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <p>{myName} | {state}</p>
            <button className="button" onClick={incrementCounter}>
                Click me
            </button>
        </article>
    );
}

