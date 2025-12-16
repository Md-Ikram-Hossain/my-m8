
import './App.css'
import Linecharts from './components/LineChart/Linecharts'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>

       <NavBar></NavBar>
       {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-amber-400 '>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Linecharts></Linecharts>
      <Phones></Phones>

     


    </>
  )
}

export default App
