import React from 'react'
import UserList from './UserList'
import UserForm from './UserForm'

function UsersSection({users, addUser}) {

  return (
    <div className='support panel panel-primary'>
      <div className='panel-heading'>
          Users{console.log("rerendering: UsersSection. Users size:")}
      </div>
      <div className='panel-body users'>
        <UserList users={users}/>
        <UserForm addUser={addUser}/>
      </div>
    </div>
  )
}

export default UsersSection
