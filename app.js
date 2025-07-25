const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj  {
    constructor(name, show, total) {
        this.name = name;
        this.show = show;
        this.total = total;
    }
}

/* End Objects */

const CounterContext = React.createContext(3);
const OtherContext = React.createContext(4);

function App() {

    const [counterData, setCounterData] = React.useState([
    new CounterObj('A', true, 0),
    new CounterObj('B', false, 0),
    new CounterObj('C', true, 0)
])

const increment = (index) => {
    const newData = [...counterData];
    newData[index].total = newData[index].total + 1;
    setCounterData(newData);
}

const decrement = (index) => {
     const newData = [...counterData];
     newData[index].total = newData[index].total - 1 >= 0 ? newData[index].total - 1 : 0;
        setCounterData(newData);
}

const contextData = [counterData, increment, decrement];

console.log(CounterContext);

    return (
        <>
        <CounterContext.Provider value={contextData}>
            <h1>Counters</h1>
            <section>
               <CounterList />
               <CounterTools />
            </section>
        </CounterContext.Provider>

        </>
    );
}

function useDocumentTitle (title) {
   return React.useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => {
        document.title = originalTitle; 
    }
   }, [title]);
}


function CounterList() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + contextData.map((counter) => {
        return counter.total;
    }).join (', '))
        return (
           <section>
             { contextData.map((counter, index) => (
                <Counter counter={counter} index={index} />
            ))}
           </section>
        )
}

function Counter({counter, index}) {

    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const id = React.useId();

    function handleIncrementClick() {
       increment(index);
    }

    function handleDecrementClick() {
       decrement(index);
    }

        return (
        <fieldset className="counter" id={id}>
            <legend className="counter__legend" id={id + "-legend"}>{counter.name}</legend>
                 { counter.total > 0 ? <button className="button" onClick={handleDecrementClick} aria-label="Decrease Counter" id={id + "-decrement"}>
                    -
                </button> : <div className="empty_counter"></div>}
                <p aria-labelledby={id + "-legend"}> {counter.total}</p>
                  <button className="button" onClick={handleIncrementClick} aria-label="Increase Counter" id={id + "-increment"}>
                   +
                </button>
              <div>
              
            </div>
        </fieldset>
    );
}

function CounterTools() {
    const [counterData, setCounterData] = React.useState([
    new CounterObj('A', true, 3),
    new CounterObj('B', true, 2),
    new CounterObj('C', true, 6)
])

const contextData = [counterData, null, null];


    return (
        <OtherContext.Provider value={contextData}>
        <CounterContext.Provider value={contextData}>
            <CounterSummary />
        </CounterContext.Provider>
        </OtherContext.Provider>
    )
}

function CounterSummary() {
        const [OtherContextData, i, d] = React.useContext(OtherContext);
    const [contextData, increment, decrement] = React.useContext(CounterContext);

    const summary = [...contextData].sort((a, b) =>  b.total - a.total)
                                    .filter((counter) => counter.show)
                                    .map((counter) => {
        return counter.name + '(' + counter.total + ')';
    }).join(', ');
    return(
        <p>Summary: {summary}</p>
    )
}

