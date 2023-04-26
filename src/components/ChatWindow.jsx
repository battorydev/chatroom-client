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
        <div className='card-header'>ChatWindow: {channel ? channel.name : ""}</div>
        <div className='card-body'>  
        
            <div className='message'>
                {   console.log("rerendering ChatWindow Ch:" + channel)}
                <ChatMessage messages={messages}/>   
            </div> 
        </div>
        <div className='card-footer'>
             <ChatTypeForm addMessage={addMessage} /> 
        </div>
    </>
  )
}

ChatWindow.propTypes = {
    channel: PropsTypes.object
}

export default ChatWindow