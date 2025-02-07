import { useReducer } from "react"
import FormComponent from "./components/FormComponent"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <div className="w-screen text-white">
      <header className="bg-[#599814] p-4">
          <div className="w-4/5 mx-auto">
            <p className="font-bold text-2xl">Calories counter</p>
          </div>
      </header>
      <FormComponent
        dispatch={dispatch}
        state={state}
      />
      <ActivityList 
        activities={state.activities}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App
