import React, {useState} from 'react';

function UserInfo(){
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
      );

      return (
        <div className="user-info-container">
            Hello
            <div>Name: {user?.result.name}</div>
            <div>Phone number: {user?.result.phone_number}</div>
            <div>Email: {user?.result.email}</div>
        </div>
      )
}

export default UserInfo;