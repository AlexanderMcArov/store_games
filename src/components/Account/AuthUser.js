import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser} from '../../redux/actions/AuthUser'

function AuthUser() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>dispatch(loginUser(name,password))}>JOIN</button>
        </div>
    )
}

export default AuthUser
