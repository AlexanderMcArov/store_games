import React from 'react'
import Style from './Live.module.css'

function LiveItem(props) {
    const data = props.data
    console.log(data);
    return (
        <div className={Style.SearchItem} onClick={()=>console.log(data)}>
            <div>{data.caption}</div>
            <div style={{color: 'blue'}}>{data.price}Р</div>
        </div>
    )
}

export default LiveItem
