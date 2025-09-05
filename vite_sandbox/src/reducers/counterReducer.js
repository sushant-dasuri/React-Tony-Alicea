import { CounterObj } from "../models/CounterObj";

export function counterReducer(counterData, action) {
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

        case 'add' : {
            const newCounter = new CounterObj(counterData[counterData.length -1] + 1, {shortName: action.data.shortName, longName: action.data.longName}, action.data.tab, action.data.startingValue);
            console.log(newCounter);
            return [...counterData, newCounter];
        }

        default: {
            throw new Error(`Unknown action type: ${action.type}`);
    }

}
}