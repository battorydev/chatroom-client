import React, {useState} from 'react'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

function ChannelSection() {

  function addChannel(name){
    
    console.log(name);
    // TODO send to server
  }

  function setChannel(activeChannel){
    console.log(activeChannel);
  }

  return (
    <>
        <ChannelList channels={[]} setChannel={setChannel}/>
        <ChannelForm addChannel={addChannel} />
    </>
  )
}

export default ChannelSection