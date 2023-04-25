import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ChannelSection from './components/ChannelSection'
import ChatWindow from './components/ChatWindow'
import UsersSection from './components/UsersSection'

function App() {
  let [channels, setChannels] = useState([]);
  let [users, setUsers] = useState([]);
  let [activeChannel, setActiveChannel] = useState({});
  

  function addChannel(name){
    console.log("addch is called. " + name);
    console.log(typeof channels);
    channels = [...channels]
    channels.push({id: channels.length, name});

    setChannels(channels);
    // TODO send to server
  }

  function addUser(name){
    console.log("adduser is called. " + name);
    users = [...users]
    users.push({id: users.length, name});
    setUsers(users);
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
        <UsersSection users={users} addUser={addUser}/>
      </div>
      <div className='container'>
      <ChatWindow channel={activeChannel} />
      </div>
    </div>
  )
}

export default App
