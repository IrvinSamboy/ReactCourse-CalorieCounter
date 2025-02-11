import { activity } from "../types"

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
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold">{getCalorieTotal(0)}</h2>
                <p className="font-medium">Consumed</p>
            </div>
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold">{getCalorieTotal(1)}</h2>
                <p className="font-medium">Excercise</p>
            </div>
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold">{getCalorieTotal(0) - getCalorieTotal(0)}</h2>
                <p className="font-medium">Diferences</p>
            </div>
        </div>
      </div>
    </div>
  )
}
