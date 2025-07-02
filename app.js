





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
            </section>
        </>
    );
}

function Counter(props) {

    const [state, dispatch] = React.useReducer((state, action) => {

        switch( action.type) {
            case 'increment':
                return { clicks: state.clicks + 1 };
            default: 
                throw new Error();
        }

    }, {clicks: 0});

    function clickHandler() {
        dispatch({ type: 'increment' });
      
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {state.clicks} times</p>
            <button className="button" onClick={clickHandler}>
                Click me
            </button>
        </article>
    );
}

