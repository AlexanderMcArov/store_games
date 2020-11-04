import React from 'react'
import Style from './AdminPanel.module.css'


function MessagesItem(props) {
    let item = props.item
    return (
        <div className={Style.MessagesItem_Main}>
            <div>
            <div className={Style.MessagesItem_Title}>ID сообщения:{item.id}</div>
    <div className={Style.MessagesItem_Body}>{item.message}</div>
            </div>
        </div>
    )
}

export default MessagesItem
