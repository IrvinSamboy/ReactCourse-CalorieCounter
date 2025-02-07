import { activity } from "../types"

export type ActivityActions = 
    {type: 'set-activity', payload: {newActivity: activity}}

type ActivityState = {
    activities: activity[]
}

export const initialState : ActivityState = {
    activities: [{category: 1,
        name: '',
        calories: 0}]
}

export const activityReducer = (
    state : ActivityState = initialState,
    actions: ActivityActions  
) => {
    if(actions.type === 'set-activity') {
       return {
        ...state,
        activities: [...state.activities, actions.payload.newActivity]
       }
    }
    return state
}