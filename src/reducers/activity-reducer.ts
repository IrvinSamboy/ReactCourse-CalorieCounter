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
    activities: JSON.parse(localStorage.getItem('activities') || '[]'),
    activeId: ''
}

export const activityReducer = (
    state : ActivityState = initialState,
    actions: ActivityActions  
) => {

    let returnState = state

    if(actions.type === 'set-activity') {
        if(state.activeId) {
            
            const activitiesUpdated = [...state.activities.filter(item => item.id !== state.activeId), actions.payload.newActivity]
            
            returnState = {
                ...state,
                activities: activitiesUpdated,
                activeId: ''   
            }
        }
        else{
            returnState = {
                ...state,
                activities: [...state.activities, actions.payload.newActivity]
               }
        }
    }

    else if(actions.type === 'set-activeId') {
        returnState = {
            ...state,
            activeId: actions.payload.activeId
        }
    }

    else if(actions.type === 'delete-activity') {
        returnState = {
            ...state,
            activities: state.activities.filter(item => item.id !== actions.payload.activeId),
            activeId: ''
        }
    }

    localStorage.setItem('activities', JSON.stringify(returnState.activities))

    return returnState
}