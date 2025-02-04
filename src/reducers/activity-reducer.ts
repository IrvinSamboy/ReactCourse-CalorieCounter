import { activity } from "../types"

type ActivityActions = 
    {type: 'set-activity', payload: {newActivity: activity}}

type ActivityState = {
    activities: activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state : ActivityState = initialState,
    actions: ActivityActions  
) => {
    if(actions.type === 'set-activity') {
        console.log("from activity ", actions.payload.newActivity)
    }
}