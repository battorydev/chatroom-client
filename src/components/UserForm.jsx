import React, {useRef} from 'react'

function UserForm({addUser}) {
    const textRef = useRef();

  function onSubmit(e){
    e.preventDefault(); 
    addUser(textRef.current.value);
    textRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {console.log("rerendering UserForm")}
          <input className='form-control' type="text" ref={textRef} placeholder="Set Your Name..." />
        </div>
      </form>
    </>
  )
}

export default UserForm