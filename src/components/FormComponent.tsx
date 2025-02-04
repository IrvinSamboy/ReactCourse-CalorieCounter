import { useState } from "react";
import { categories } from "../data/categories";
import { activity } from "../types";

export default function FormComponent() {

    const defaultActivity : activity = {
        category: 1,
        name: '',
        calories: 0
    }

    const [activities, setActivities] = useState<activity[]>([defaultActivity])
    const [activity, setActivity] = useState<activity>(defaultActivity)

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> ) => {
        setActivity({
            ...activity,
            [e.target.id === "activity"? "name" : e.target.id] :
                    e.target.id === "category" || e.target.id === "calories"?
                        Number.parseInt(e.target.value) :
                        e.target.value

        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setActivities([
            ...activities,
            activity
        ])
    }

   const isValidSubmit = () => {
    return activity.name.trim() !== '' && activity.calories > 0? true : false
   } 

    return (
        <section className="w-full bg-[#77C51E] py-20 px-auto">
            <form onSubmit={handleSubmit} action="" className="text-black w-4/5 mx-auto p-10 space-y-5 bg-white rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="font-bold">Category</label>
                    <select 
                        className=" border border-gray-400 rounded-lg p-1" 
                        id="category" 
                        value={activity.category}
                        onChange={handleChange}
                    >
                        {
                            categories.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>                
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="activity" className="font-bold">Activity</label>
                    <input 
                        type="text" 
                        className=" border border-gray-400 rounded-lg p-1" 
                        id="activity" 
                        value={activity.name} 
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="calories" className="font-bold">Calories</label>
                    <input 
                        type="number" 
                        className=" border border-gray-400 rounded-lg p-1" 
                        id="calories" 
                        value={activity.calories} 
                        onChange={handleChange}
                        min={0}
                    />
                </div>
                <button 
                    className="bg-gray-800 text-white text-xl font-semibold w-full p-2 disabled:opacity-10"
                    disabled={!isValidSubmit()}
                >
                    {activity.category === 1? "Save food" : "Save exercise"}
                </button>
            </form>
        </section>
    )
}
