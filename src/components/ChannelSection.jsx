import React, {useState} from 'react'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

function ChannelSection() {

  const [devices, setDevices] = useState([]);

  function addDevice(name){
    devices.push(name);
    setDevices(devices);
    console.log('added device. ' + name + ' ' + devices.length);
  }

  return (
    <div>
        <ChannelForm add={addDevice}/>
        <ChannelList devices={devices} />
    </div>
  )
}

export default ChannelSection