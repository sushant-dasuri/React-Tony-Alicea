import { useContext, useState } from "react";
import { CounterDispatchContext } from "../contexts/context";

export function AddCounter() {

    const counterDispatch = useContext(CounterDispatchContext);
    const [counterShortName, setCounterShortName] = useState('');
    const [counterLongName, setCounterLongName] = useState('');
    const [tab, setTab] = useState(1);
    const [startingValue, setStartingValue] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        counterDispatch({
            type: 'add',
            data: {
                shortName: counterShortName,
                longName: counterLongName,
                tab: parseInt(tab),
                startingValue: parseInt(startingValue)
            }
        })
       
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
            <h2>Add {counterShortName}</h2>
            <p>
                <label htmlFor="counterShortName">Short Name:</label>
                <input type="text" name="counterShortName" id ="counterShortName" value={counterShortName} onChange={(event)=> {setCounterShortName(event.target.value)}} />
            </p>
             <p>
                <label htmlFor="counterLongName">Long Name:</label>
                <textarea name="counterLongName" id ="counterLongName" value={counterLongName} onChange={(event)=> {setCounterLongName(event.target.value)}}></textarea>
            </p>
            <p>
                <label htmlFor="tab">Tab</label>
                <select name="tab" id="tab" value={tab} onChange={(event)=> {setTab(event.target.value)}}>
                    <option value={1}>Tab 1</option>
                    <option value={2}>Tab 2</option>
                </select>
            </p>
            <p>
                <label htmlFor="startingValue">Starting Value</label>
                <input name="startingValue" type="number" id="startingValue" value={startingValue} onChange={(event)=> {setStartingValue(event.target.value)}} />
            </p>
            <button type="submit">Add</button>
            </form>
        </>
    )
}