import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar/navBar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/DeshBoard/Dashboard'
import Phonebar from './components/Phonebar/Phonebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
      
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <Phonebar></Phonebar>
    </div>
  )
}

export default App
