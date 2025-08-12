const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj  {
    constructor(id, name, tab, total) {
        this.id = id;
        this.name = name;
        this.tab = tab;
        this.total = total;
    }
}

/* End Objects */

function App() {

    const [counterData, setCounterData] = React.useState([
    new CounterObj(1, 'A', 1, 0),
    new CounterObj(2, 'B', 2, 0),
    new CounterObj(3, 'C', 1, 0)
])

const [visibleTab, setVisibleTab] = React.useState(1);

 const increment = (index) => {
        const newData = [...counterData];
        newData[index] = {...newData[index], total: newData[index].total + 1};
        setCounterData(newData);
    }

    const decrement = (index) => {
        const newData = [...counterData];
        const decrementedCounter = newData[index].total - 1;
        newData[index] = {...newData[index], total: Math.max(0, decrementedCounter)};
        setCounterData(newData);
    }



    return (
        <>
            <h1>Counters</h1>
            <section>
               <CounterList counterData = {counterData} increment={increment} decrement={decrement} />
               <CounterTools counterData = {counterData} increment={increment} decrement={decrement} visibleTab={visibleTab} setVisibleTab={setVisibleTab} />
            </section>

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


function CounterList({counterData, increment, decrement}) {
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join (', '))
        return (
           <section>
             { counterData.map((counter, index) => (
                <Counter counter={counter} index={index} key={counter.id} increment={increment} decrement={decrement} />
            ))}
           </section>
        )
}

function Counter({counter, index, increment, decrement}) {

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

function CounterTools({counterData, visibleTab, setVisibleTab}) {
    return (
            <CounterSummary counterData ={counterData} visibleTab={visibleTab}  setVisibleTab={setVisibleTab} />
    )
}

function CounterSummary({counterData, visibleTab, setVisibleTab}) {
    console.log("Rendering CounterSummary");

    const filteredSortedData = React.useMemo(() => { 
        console.log("Filtering Data");
        return  [...counterData].filter((counter) => {
            return  counter.tab === visibleTab })
        }, [counterData, visibleTab])
    return(
        <>
        <header>
            <a href="#" onClick={() => setVisibleTab(1)}>Tab 1</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" onClick={() => setVisibleTab(2)}>Tab 2</a>
        </header>
        <section>Summary: {filteredSortedData.map((counter, index) => (
            <CounterSummaryDetail name={counter.name} total = {counter.total} key={counter.id} />
        ))}</section>
        </>
    )
}

function CounterSummaryDetail({ name, total }) {
    return (
        <p>{name} ({total})</p>

    )
};



