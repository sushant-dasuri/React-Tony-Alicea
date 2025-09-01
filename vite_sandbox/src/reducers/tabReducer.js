export function tabReducer(visibleTab, action) {
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