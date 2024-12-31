import FormComponent from "./components/FormComponent"

function App() {

  return (
    <div className="w-screen text-white">
      <header className="bg-[#599814] p-4">
          <div className="w-4/5 mx-auto">
            <p className="font-bold text-2xl">Calories counter</p>
          </div>
      </header>
      <FormComponent />

    </div>
  )
}

export default App
