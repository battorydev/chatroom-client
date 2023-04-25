import React from 'react'

function ChatMessage({messages}) {
  return (
    <>
    {
        messages.map((m) => {
            return (<div key={m.id}>{m.msg}</div>)
        }
    )}
    </>
  )
}

export default ChatMessage