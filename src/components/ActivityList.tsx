import { activity } from "../types"

export default function ActivityList({activities} : {activities: activity[]}) {
  return (
    <section className="w-4/5 mx-auto space-y-4 mt-10">
      <h3 className="text-slate-600 text-center text-4xl font-bold">Food and activities</h3>
      <div className="space-y-4">
        {
        activities.map(activity => (
            <div className="bg-white p-6 text-black">
                <p>{activity.category}</p>
                <div className="space-y-3">
                    <p className="font-bold text-xl">{activity.name}</p>
                    <h3 className="text-3xl text-lime-500 font-black">{activity.calories} Calories</h3>
                </div>
            </div>
        ))
        }
      </div>
    </section>
  )
}
