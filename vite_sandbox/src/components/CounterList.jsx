import { useContext } from "react";
import { CounterContext } from "../contexts/context";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Counter } from "./Counter";
import  styles from './CounterList.module.css';


export function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join (', '))
        return (
           <section>
            <h2 className={styles.header}>Counters</h2>
             { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id} />
            ))}
           </section>
        )
}