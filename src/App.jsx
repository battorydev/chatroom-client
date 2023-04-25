import { useState } from 'react'
import './App.css'
import ChannelSection from './components/ChannelSection'
import ChatWindow from './components/ChatWindow'

function App() {
  let [channels, setChannels] = useState([]);
  let [activeChannel, setActiveChannel] = useState({});
  

  function addChannel(name){
    
    console.log("addch is called. " + name);
    console.log(typeof channels);
    channels = [...channels]
    channels.push({id: channels.length, name});

    setChannels(channels);
    // TODO send to server
  }

  function displayActiveChannel(channel) {
    console.log("setActiveChannel: " + channel);
    setActiveChannel(channel);
  }

  return (
    <div className='app'>
    {console.log("rerendering: App")}
      <div className='nav'>
        <ChannelSection channels={channels} addChannel={addChannel} displayActiveChannel={displayActiveChannel}/>
      </div>
      <ChatWindow channel={activeChannel} />
    </div>
  )
}

export default App
