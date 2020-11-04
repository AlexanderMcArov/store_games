import React, { useState } from 'react'
import Axios from 'axios'

function Messages() {

    const [inpValue,setInpValue] = useState('')

    function sendMessage(){
        Axios.post('http://localhost:3333/messages',{
                message: inpValue
        })
        setInpValue('')
        console.log(inpValue);
    }
    
    return (
        <div>
            <input value={inpValue} onChange={(e)=>setInpValue(e.target.value)}></input>
            <button onClick={sendMessage} >Отправить сообщение</button>
        </div>
    )
}

export default Messages
