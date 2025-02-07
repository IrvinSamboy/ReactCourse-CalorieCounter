import { activity } from "../types"

export type ActivityActions = 
    {type: 'set-activity', payload: {newActivity: activity}} |
    {type: 'set-activeId', payload: {activeId : string}}

type ActivityState = {
    activities: activity[]
    activeId: string
}

export const initialState : ActivityState = {
    activities: [],
    activeId: ''
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

    if(actions.type === 'set-activeId') {
        return {
            ...state,
            activeId: actions.payload.activeId
        }
    }

    return state
}