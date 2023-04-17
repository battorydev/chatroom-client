import React, {useRef, useState} from 'react'
// import PropTypes from 'prop-types'

function ChannelForm({addChannel}) {

  const channelText = useRef();

  function onSubmit(e){
    e.preventDefault();
    
    const node = channelText.current;
    const channelName = node.value;
    addChannel(channelName);
    node.value = ''; // clear value
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" ref={channelText} placeholder="Title" />
    </form>
  )
}

// ChannelForm.propType = {
//   addChannel: React.PropTypes.func.isRequired
// }

export default ChannelForm