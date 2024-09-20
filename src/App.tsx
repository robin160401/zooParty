import RenderAnimalCards from "./components/RenderAnimalCards";


function App() {

  return (
      <div className="bg-slate-700">
        <h1 className="text-center text-3xl text-white p-8">ZooPartyDB</h1>
        <div className="text-center text-white">Explore the fascinanting world of zoo animals!</div>
        <RenderAnimalCards/>
      </div>
  )
}

export default App
