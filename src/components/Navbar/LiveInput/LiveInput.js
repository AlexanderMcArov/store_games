import Item from 'antd/lib/list/Item'
import React, { useState, useEffect } from 'react'
import Style from './Live.module.css'
import LiveItem from './LiveItem'

function LiveInput() {

    const [inpValue,setInpValue] = useState([])
    const [data,setData] = useState([])

    let arr = ['Grand Theft Auto','PlayerUnknowns Battleground','Pdasd','dsadsda','gsasd']

    let result = []

    // arr.forEach((item,index,array)=>{
    //     let b = inpValue
    //     item = item.toLocaleLowerCase()
    //     if(b.length > 0) b = b.toLocaleLowerCase()
    //     let a = item.slice(0,inpValue.length)    
    //     if(a.includes(b) && item.slice(0,inpValue.length)) result.push(array[index])
    // })

    useEffect(()=>{
        if(inpValue.length > 0){
            fetch('http://localhost:3333/goods?caption_like='+inpValue)
                .then(res=>res.json())
                .then(data=>setData(data))
        }
    },[inpValue])

    console.log(data);

    return (
        <div className={Style.Main}>
            <input className={Style.MainInput} style={{width: '290px'}} value={inpValue} onChange={(e)=>setInpValue(e.target.value)}></input>
            {data.length > 0 ? <div className={Style.SearchResult}>
                {data.map((item,index) => {
                    console.log(item);
                    return <LiveItem data={item} key={index}/>
                })}
            </div> : ''}
        </div>
    )
}

export default LiveInput
