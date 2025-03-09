import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import Section1 from './components/Section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Section1 />
  <MainPage/>
  </>
  )
}

export default App
