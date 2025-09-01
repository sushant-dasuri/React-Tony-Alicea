import { useContext, useMemo, useCallback } from "react";
import { CounterContext, TabContext, TabDispatchContext } from "../contexts/context";
import { CounterSummaryHeader } from "./CounterSummaryHeader.jsx";
import { CounterSummaryDetail } from "./CounterSummaryDetail.jsx";

export function CounterSummary() {
    const counterData = useContext(CounterContext);
    const visibleTab = useContext(TabContext);
    const tabDispatch = useContext(TabDispatchContext);
    const filteredSortedData = useMemo(() => { 
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