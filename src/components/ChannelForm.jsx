import React, {useState} from 'react'

function AddDevice({add}) {

  const [title, setTitle] = useState('');

  function onChange(e){
    setTitle(e.target.value);
    console.log('change;' + e.target.value + ';' + title);
  }

  function handleKeyDown(e){
    if (e.key === 'Enter') {
      console.log("enter");
      add(title);     
    }
    setTitle(title);
    console.log('keydown;' + e.target.value + title);
  }

  return (
    <div>
        <input type="text" placeholder="Title" onChange={onChange} onKeyDown={handleKeyDown} value={title} />
    </div>
  )
}

export default AddDevice