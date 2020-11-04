import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MessagesItem from './MessagesItem'
import Style from './AdminPanel.module.css'

function Messages() {

    const [messageList,setList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3333/messages')
            .then(res=>setList(res.data))
    },[])

    return (
        <div className={Style.Messages}>
            {messageList.map(item=>{
             return <MessagesItem item={item}/>  
            })}
        </div>
    )
}

export default Messages
