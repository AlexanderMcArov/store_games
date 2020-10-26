import Item from 'antd/lib/list/Item'
import React, { useState } from 'react'
import Style from './Live.module.css'
import LiveItem from './LiveItem'

function LiveInput() {

    const [inpValue,setInpValue] = useState([])

    let arr = ['Grand Theft Auto','PlayerUnknowns Battleground','Pdasd','dsadsda','gsasd']

    let result = []

    arr.forEach((item,index,array)=>{
        let b = inpValue
        item = item.toLocaleLowerCase()
        if(b.length > 0) b = b.toLocaleLowerCase()
        let a = item.slice(0,inpValue.length)    
        if(a.includes(b) && item.slice(0,inpValue.length)) result.push(array[index])
    })

    console.log(result);

    return (
        <div className={Style.Main}>
            <input className={Style.MainInput} style={{width: '290px'}} value={inpValue} onChange={(e)=>setInpValue(e.target.value)}></input>
            {result.length > 0 ? <div className={Style.SearchResult}>
                {result.map((item,index) => {
                    console.log(item);
                    return <LiveItem data={item} key={index}/>
                })}
            </div> : ''}
        </div>
    )
}

export default LiveInput
