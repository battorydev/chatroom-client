import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'

function ChannelForm({addChannel}) {

  const [text, setText] = useState("");

  function onSubmit(e){
    e.preventDefault();
    
    addChannel(text);
    setText("");
  }

  function updateText(e){
    setText(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        {console.log("rerendering ChannelForm")}
          <input type="text" value={text} onChange={updateText} placeholder="Title" />
      </form>
    </>
  )
}

ChannelForm.propType = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm