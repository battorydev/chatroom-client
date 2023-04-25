import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'

function ChannelForm({addChannel}) {

  const textRef = useRef();

  function onSubmit(e){
    e.preventDefault(); 
    addChannel(textRef.current.value);
    textRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {console.log("rerendering ChannelForm")}
          <input className='form-control' type="text" ref={textRef} placeholder="Title" />
        </div>
      </form>
    </>
  )
}

ChannelForm.propType = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm