import React, { useRef } from 'react'

function ChatTypeForm({addMessage}) {

    const msgRef = useRef();

    function onSubmit(e) {
        e.preventDefault();
        addMessage(msgRef.current.value);
        msgRef.current.value = "";
    }

  return (
    <>
    <div>ChatTypeForm</div>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <input type="text" className="form-control" ref={msgRef} placeholder='Add Message...'/>
        </div>
    </form>
    </>
    
  )
}

export default ChatTypeForm