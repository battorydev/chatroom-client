import React from 'react'
import PropsTypes from 'prop-types'
import ChatMessage from './ChatMessage'
import ChatTypeForm from './ChatTypeForm'

function ChatWindow({channel}) {

    let [messages, setMessages] = React.useState([]);

    function addMessage(msg) {
        console.log("addMessage msg:" + msg);
        messages = [...messages]
        messages.push({id: messages.length, msg});
        setMessages(messages);
        
    }

  return (
    <>
        <div className='panel-heading'>ChatWindow: {channel ? channel.name : ""}</div> 
        <div className='panel-body messages-container'>
            {   console.log("rerendering ChatWindow Ch:" + channel)}
        
           <div className='messages'>
                <ChatMessage messages={messages}/>   
                <ChatTypeForm addMessage={addMessage} /> 
            </div>
        </div>
    </>
  )
}

ChatWindow.propTypes = {
    channel: PropsTypes.object
}

export default ChatWindow