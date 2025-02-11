import { useMemo, useReducer } from "react"
import FormComponent from "./components/FormComponent"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieSummary from "./components/CalorieSummary"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  
  const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <div className="w-screen text-white">
      <header className="bg-[#599814] p-4">
          <div className="w-4/5 mx-auto flex justify-between items-center">
            <p className="font-bold text-2xl">Calories counter</p>
            <button
              onClick={() => dispatch({type: 'restart-app'})}
              disabled={!canRestartApp}
              className="rounded-lg bg-gray-900 text-sm font-semibold px-3 py-2 disabled:opacity-50">Restart app</button>
          </div>
      </header>
      <FormComponent
        dispatch={dispatch}
        state={state}
      />
      <CalorieSummary 
        activities={state.activities}
      />
      <ActivityList 
        activities={state.activities}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App
