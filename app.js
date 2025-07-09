const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);

function App() {

    const [swapCounter, setSwapCounter] = React.useState(false);

    function handleSwap() {
        setSwapCounter(!swapCounter);
    }

    let counterOne = null;
    if(!swapCounter) {
        counterOne = <Counter name="One" />;
    }
  
    return (
        <>
            <h1>Counters</h1>
            <section>
                {counterOne}
               { swapCounter ? <Counter name="Two" /> :  null}
            </section>
            <p>
                <button className="button" onClick={handleSwap}>
                    Swap Counters
                </button>
            </p>
        </>
    );
}

function Counter(props) {

    const [numOfClicks, setNumOfClicks] = React.useState({total: 0});

    function incrementCounter() {
       setNumOfClicks({...numOfClicks, total: numOfClicks.total + 1})
       
    }

    React.useEffect(() => {

        console.log("In UseEffect " + props.name);
        document.title = "Counter : " + numOfClicks.total;

        return() => {
            console.log("Unmounting " + props.name);
        }
    }, [numOfClicks.total]);
    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks.total} times</p>
              <p>
                <button className="button" onClick={incrementCounter}>
                    Click me
                </button>
            </p>
        </article>
    );
}