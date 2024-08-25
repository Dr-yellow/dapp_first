
// import './App.scss'

// const ListBox = 'DATA_WEB3_TODOLIST'
// Loader
import {
  Havbar
  , Footer
  , Welcome
  , Services
  , Transactions
} from "./components"
function App() {


  return (

    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Havbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>

  )
}

export default App
