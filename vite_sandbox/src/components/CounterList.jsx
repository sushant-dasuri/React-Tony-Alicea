import { useContext } from "react";
import { CounterContext } from "../contexts/context";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Counter } from "./Counter";


export function CounterList() {
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