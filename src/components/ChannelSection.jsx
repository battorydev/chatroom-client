import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

function ChannelSection() {

  function addChannel(name){
    
    console.log(name);
    // TODO send to server
  }

  return (
    <div>
        <ChannelList  channels={[]}/>
        <ChannelForm addChannel={addChannel} />
    </div>
  )
}

// ChannelSection.propTypes = {
//   channels: React.PropTypes.array.isRequired,
//   setChannel: React.PropTypes.func.isRequired,
//   addChannel: React.PropTypes.func.isRequired
// }

export default ChannelSection