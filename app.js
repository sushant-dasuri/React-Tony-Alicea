const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj  {
    constructor(id, name, show, total) {
        this.id = id;
        this.name = name;
        this.show = show;
        this.total = total;
    }
}

/* End Objects */

const CounterContext = React.createContext(3);
function App() {

    const [counterData, setCounterData] = React.useState([
    new CounterObj(1, 'A', true, 0),
    new CounterObj(2, 'B', true, 0),
    new CounterObj(3, 'C', true, 0)
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
                <Counter counter={counter} index={index} key={counter.id} />
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
    return (
            <CounterSummary />
    )
}

function CounterSummary() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);

    const filteredSortedData = [...contextData].sort((a, b) =>  b.total - a.total)
                                    .filter((counter) => counter.show)
    return(
        <section>Summary: {filteredSortedData.map((counter, index) => (
            <CounterSummaryDetail name={counter.name} total={counter.total} key={counter.id} />
        ))}</section>
    )
}

const CounterSummaryDetail = React.memo(function CounterSummaryDetail({ name, total }) {
    console.log("Rendering CounterSummaryDetail");
    return (
        <p>{name} ({total})</p>

    )
});


