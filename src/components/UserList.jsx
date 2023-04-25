import React from 'react'
import UserItem from './UserItem';

function UserList({users}) {
    return (
        <ul>
          {console.log("rendering UserList")}  
          {console.log(users.length)} 
    
          {users.map((u) => {
            console.log(u)
            return (<UserItem key={u.id} user={u} />);
          })}
     
        </ul>
      );
}

export default UserList