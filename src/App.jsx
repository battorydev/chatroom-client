import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChannelSection from './components/ChannelSection'

function App() {
  let [channels, setChannels] = useState([]);

  function addChannel(name){
    
    console.log("addch is called. " + name);
    console.log(typeof channels);
    channels = [...channels]
    channels.push({id: channels.length, name});

    setChannels(channels);
    // TODO send to server
  }

  return (
    <>
    {console.log("rerendering: App")}
      <ChannelSection channels={channels} addChannel={addChannel}/>
    </>
  )
}

export default App
