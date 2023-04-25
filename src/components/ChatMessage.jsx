import React from 'react'

function ChatMessage({messages}) {
  return (
    <ul>
        <li>
        {
            messages.map((m) => {
                return (<div className='body' key={m.id}>{m.msg}</div>)
            }
        )}
        </li>
    </ul>
  )
}

export default ChatMessage