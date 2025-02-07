import { activity } from "../types"

export type ActivityActions = 
    {type: 'set-activity', payload: {newActivity: activity}} |
    {type: 'set-activeId', payload: {activeId : string}} |
    {type: 'delete-activity', payload: {activeId : string}}

export type ActivityState = {
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
        if(state.activeId) {
            
            const activitiesUpdated = [...state.activities.filter(item => item.id !== state.activeId), actions.payload.newActivity]
            
            return{
                ...state,
                activities: activitiesUpdated,
                activeId: ''   
            }
        }
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

    if(actions.type === 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter(item => item.id !== actions.payload.activeId),
            activeId: ''
        }
    }

    return state
}