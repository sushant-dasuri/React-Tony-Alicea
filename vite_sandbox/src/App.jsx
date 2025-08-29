import {useEffect, useReducer, useContext, useCallback, useMemo, useId, createContext, memo} from 'react';
import './App.css';
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


const CounterContext = createContext(null);
const CounterDispatchContext = createContext(null);
const TabContext = createContext(null);
const TabDispatchContext = createContext(null);

function counterReducer(counterData, action) {
    switch (action.type) {
        case 'increment' : {
            return counterData.map((counter) => {
                if(counter.id === action.id) {
                    return {...counter, total: counter.total + 1}
                }
                 else {
                    return counter;
                }
            })
        }

        case 'decrement': {
            return counterData.map((counter) => {
                if(counter.id === action.id) {
                    return {...counter, total: counter.total - 1 >= 0 ? counter.total - 1 : 0}
                }
                else {
                    return counter;
                }
            })
        }

        default: {
            throw new Error(`Unknown action type: ${action.type}`);
    }

}
}

function tabReducer(visibleTab, action) {
    switch (action.type) {
        case 'changeTab' : {
            if(visibleTab === action.tab) {
                return visibleTab; // No change if the same tab is clicked
            }

            else {
                return action.tab; // Change to the new tab
            }
        }

         default: {
            throw new Error(`Unknown action type: ${action.type}`);
    }

    }
}

function App() {

    const [counterData, counterDispatch] = useReducer(counterReducer, [
    new CounterObj(1, 'A', 1, 0),
    new CounterObj(2, 'B', 2, 0),
    new CounterObj(3, 'C', 1, 0)
])

const [visibleTab, tabDispatch] = useReducer(tabReducer, 1);

    return (
        <>
        <CounterContext.Provider value={counterData}>
        <CounterDispatchContext.Provider value={counterDispatch}>
            <TabContext.Provider value={visibleTab}>
            <TabDispatchContext.Provider value={tabDispatch}>
            <h1>Counters</h1>
            <section>
               <CounterList  />
               <CounterTools />
            </section>
            </TabDispatchContext.Provider>
            </TabContext.Provider>
            </CounterDispatchContext.Provider>  
          </CounterContext.Provider>

        </>
    );
}

function useDocumentTitle (title) {
   return useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => {
        document.title = originalTitle; 
    }
   }, [title]);
}


function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join (', '))
        return (
           <section>
             { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id} />
            ))}
           </section>
        )
}

function Counter({counter}) {
    const counterDispatch = useContext(CounterDispatchContext);
    const id = useId();
     console.log('Counter rendering');

    function handleIncrementClick(event) {
        counterDispatch({type: 'increment', id: counter.id});
        event.preventDefault();
    }

    function handleDecrementClick(event) {
       counterDispatch({type: 'decrement', id: counter.id});
        event.preventDefault();
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
    const counterData = useContext(CounterContext);
    const visibleTab = useContext(TabContext);
    const tabDispatch = useContext(TabDispatchContext);
    const filteredSortedData = useMemo(() => { 
        console.log("Filtering Data");
        return  [...counterData].filter((counter) => {
            return  counter.tab === visibleTab })
        }, [counterData, visibleTab])

        const setVisibleTab1 = useCallback((event) => {
            tabDispatch({type: 'changeTab', tab: 1});
            event.preventDefault();
        }, [])
        
          const setVisibleTab2 = useCallback((event) => {
            tabDispatch({type: 'changeTab', tab: 2});
             event.preventDefault();
           
        }, [])

    return(
        <>
    
        <section> 
            <CounterSummaryHeader setVisibleTab1={setVisibleTab1} setVisibleTab2={setVisibleTab2} />
            {filteredSortedData.map((counter) => (
            <CounterSummaryDetail name={counter.name} total = {counter.total} key={counter.id} />
        ))}</section>
        </>
    )
}

const CounterSummaryHeader = memo(function counterSummaryHeader({setVisibleTab1, setVisibleTab2}) {
    console.log("Rendering CounterSummaryHeader");
    return (
            <header>
            <a href="#" onClick={setVisibleTab1}>Tab 1</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" onClick={setVisibleTab2}>Tab 2</a>
        </header>
    )

})

function CounterSummaryDetail({ name, total }) {
        console.log("Rendering CounterSummaryDetail");
    return (
        <p>{name} ({total})</p>

    )
};


export default App;


