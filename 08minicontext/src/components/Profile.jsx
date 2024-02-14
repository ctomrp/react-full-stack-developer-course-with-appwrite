import React, { useContext } from 'react'
//importo el context que quiero leer
import UserContext from '../context/UserContext'


function Profile() {
    // con useContext accedo al context y leeo después los valores desde el objeto, en este caso user.username o user.password, etc
    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>

  return (
    <div>
        <h1>Profile: {user.username}</h1>
    </div>
  )
}

export default Profile