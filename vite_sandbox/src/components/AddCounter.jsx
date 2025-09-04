import { useState } from "react";

export function AddCounter() {

    const [counterName, setCounterName] = useState('');
    const [startingValue, setStartingValue] = useState(1);


    return (
        <>
            <h2>Add {counterName}</h2>
            <p>
                <label htmlFor="counterName">Name:</label>
                <input type="text" id ="counterName" value={counterName} onChange={(event)=> {setCounterName(event.target.value)}} />
            </p>
            <p>
                <label htmlFor="startingValue">Starting Value</label>
                <input defaultValue="1" type="number" id="startingValue" value={startingValue} onChange={(event)=> {setStartingValue(event.target.value)}} />
            </p>
        </>
    )
}