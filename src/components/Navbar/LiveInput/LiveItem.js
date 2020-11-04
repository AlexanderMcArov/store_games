import React from 'react'
import Style from './Live.module.css'
import {useDispatch} from 'react-redux'
import {cartAddItem} from '../../../redux/actions/CartShop'


function LiveItem(props) {
    const dispatch = useDispatch()
    const data = props.data
    console.log(data);
    return (
        <div className={Style.SearchItem} onClick={()=>console.log(data)}>
            <div>{data.caption}</div>
            <div style={{color: 'blue'}}>{data.price}Р</div>
            <button className={Style.btn} onClick={()=>{dispatch(cartAddItem(data))}}>BUY</button>
        </div>
    )
}

export default LiveItem
