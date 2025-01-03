
export default function FormComponent() {
    return (
        <section className="w-full bg-[#77C51E] py-20 px-auto">
            <form action="" className="text-black w-4/5 mx-auto p-10 space-y-5 bg-white rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-bold">Category</label>
                    <input type="text" className=" border border-gray-400 rounded-lg p-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-bold">Activity</label>
                    <input type="text" className=" border border-gray-400 rounded-lg p-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-bold">Calories</label>
                    <input type="text" className=" border border-gray-400 rounded-lg p-1" />
                </div>
                <button className="bg-gray-800 text-white text-xl font-semibold w-full p-2">Save</button>
            </form>

        </section>
    )
}
