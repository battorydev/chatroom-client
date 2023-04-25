import React from 'react'
import PropsTypes from 'prop-types'

function ChatWindow({channel}) {
  return (
    <div>
        {console.log("rerendering ChatWindow Ch:" + channel)}
        ChatWindow: {channel ? channel.name : ""}
    </div>
  )
}

ChatWindow.propTypes = {
    channel: PropsTypes.object
}

export default ChatWindow