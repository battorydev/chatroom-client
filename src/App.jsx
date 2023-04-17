import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChannelSection from './components/ChannelSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChannelSection />
    </>
  )
}

export default App
