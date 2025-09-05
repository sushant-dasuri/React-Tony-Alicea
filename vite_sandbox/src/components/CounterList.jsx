import { useContext } from "react";
import { CounterContext } from "../contexts/context";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Counter } from "./Counter";
import './CounterList.css';


export function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join (', '))
        return (
           <section>
            <h2 className="header">Counters</h2>
             { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id} />
            ))}
           </section>
        )
}