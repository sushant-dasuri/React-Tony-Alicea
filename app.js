
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
    return (
        <>
            <h1>Counters</h1>
            <section>
               <CounterList counterData={counterData} increment={increment} decrement={decrement} />
               <CounterTools counterData={counterData} />
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
                <Counter counter={counter} index={index} increment={increment} decrement= {decrement} />
            ))}
           </section>
        )
}

function Counter({counter, index, increment, decrement}) {


    function handleIncrementClick() {
       increment(index);
    }

    function handleDecrementClick() {
       decrement(index);
    }

        return (
        <dl className="counter">
            <dt>{counter.name}</dt>
            <dd className="counter__value">
                 { counter.total > 0 ? <button className="button" onClick={handleDecrementClick}>
                    -
                </button> : <div className="empty_counter"></div>}
                {counter.total}
                  <button className="button" onClick={handleIncrementClick}>
                   +
                </button>
                </dd>
              <div>
              
            </div>
        </dl>
    );
}

function CounterSummary({counterData }) {
    const summary = [...counterData].sort((a, b) =>  b.total - a.total)
                                    .filter((counter) => counter.show)
                                    .map((counter) => {
        return counter.name + '(' + counter.total + ')';
    }).join(', ');
    return(
        <p>Summary: {summary}</p>
    )
}

function CounterTools({counterData}) {
    return (
         <CounterSummary counterData={counterData} />
    )
}