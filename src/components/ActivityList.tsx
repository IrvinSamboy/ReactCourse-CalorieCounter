import { activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon } from '@heroicons/react/24/solid'

export default function ActivityList({activities} : {activities: activity[]}) {

    const categoryName = useMemo(() => (id : number) => categories.map(item => item.id === id? item.name : '' ), [activities])

  return (
    <section className="w-4/5 mx-auto space-y-4 mt-10 p-4">
      <h3 className="text-slate-600 text-center text-4xl font-bold">Food and activities</h3>
      <div className="space-y-10">
        {
        activities.map(activity => (
            <div className="relative bg-white p-6 text-black shadow-lg">
                <p className={`font-bold text-lg py-2 px-10 -top-5 text-white -left-5 text-center absolute uppercase ${activity.category === 0 ? 'bg-lime-500' : 'bg-orange-500' }`}>{categoryName(activity.category)}</p>
                <div className="flex justify-between items-center">
                  <div className="space-y-3 mt-5">
                      <p className="font-bold text-xl">{activity.name}</p>
                      <h3 className="text-3xl text-lime-500 font-black">{activity.calories} Calories</h3>
                  </div>
                  <div className="flex gap-5 items-center">
                    <PencilSquareIcon className="size-8 text-gray-800" />
                  </div>
                </div>
            </div>
        ))
        }
      </div>
    </section>
  )
}
