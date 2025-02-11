import { activity } from "../types"
import ParagraphSummary from "./paragraphSummary"

type calorieSummaryProps = {
    activities : activity[]
}

export default function CalorieSummary({activities} : calorieSummaryProps) {
    
    const getCalorieTotal = (category : 0 | 1) => {
        return activities.reduce((total, item) => item.category === category? total + item.calories: total, 0)
    }
  
    return (
    <div className="bg-gray-900 py-5">
      <div className="w-4/5 mx-auto space-y-4">
        <p className="text-3xl text-center font-bold">Calories Summary</p>
        <div className="flex justify-between">
            <ParagraphSummary 
                text="Consumend"
                value={getCalorieTotal(0)}
            />
            <ParagraphSummary 
                text="Excercise"
                value={getCalorieTotal(1)}
            />
            <ParagraphSummary 
                text="Diference"
                value={getCalorieTotal(0) - getCalorieTotal(0)}
            />
        </div>
      </div>
    </div>
  )
}
