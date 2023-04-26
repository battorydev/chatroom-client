import React from 'react'
import UserList from './UserList'
import UserForm from './UserForm'

function UsersSection({users, addUser}) {

  return (
    <div className='support card nav-light'>
      <div className='card-header'>
          Users{console.log("rerendering: UsersSection. Users size:")}
      </div>
      <div className='card-body users'>
        <UserList users={users}/>
        <UserForm addUser={addUser}/>
      </div>
    </div>
  )
}

export default UsersSection
