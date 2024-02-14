import React, { useState, useContext } from 'react'
// importo el context que quiero setear
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // seteo mi context con useContext y le indico cual es el context que uso
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // le paso los valores que requiere/almacena mi context
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        />
        {' '}
        <input 
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login