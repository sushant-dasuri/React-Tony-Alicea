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

    const [numOfClicks, setNumOfClicks] = React.useState({total: 0});

    function wrongIncrementCounter() {
        numOfClicks.total = numOfClicks.total + 1;
        setNumOfClicks(numOfClicks);
    }  

    function incrementCounter() {
       setNumOfClicks({...numOfClicks, total: numOfClicks.total + 1})
       
    }
    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks.total} times</p>
            <p>
                <button className="button" onClick={wrongIncrementCounter}>
                    Click wont work
                </button>
            </p>
              <p>
                <button className="button" onClick={incrementCounter}>
                    Click me
                </button>
            </p>
        </article>
    );
}