import React from 'react'

function UserItem({key, user}) {
    return (
        <li>
          {console.log("rerendering UserItem: ")}
          <a>{user.name}</a>
        </li>
      );
}

export default UserItem