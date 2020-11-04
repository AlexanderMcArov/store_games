import React, { useState, useEffect } from 'react'
import Style from './GameItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartAddItem } from '../../../../../redux/actions/CartShop'

function GameItem(props) {

    const dispatch = useDispatch()
    let data = props.data
    let img = `${data.src}`

    // useEffect(()=>{
    //     cartList.forEach(item => {
    //         if(item.id == data.id) inCart.push(item.id)
    //     });
    // },[])


    return (
        <div className={Style.Main}>
            {data.discount > 0 ? <div className={Style.GameDiscount}>
                -{data.discount}%
            </div> : ''}
            <div className="row">
                <img className={Style.GameIMG} src={img}></img>
                <div className="col">
                    <span className={Style.GameCaption}>{data.caption}</span>
                    <div className={Style.GamePrices}>
                        <div className="row">
                            {props.cart.includes(data.id) ? <button className={Style.btn}>CART</button> : <button className={Style.btn} onClick={() => {
                                dispatch(cartAddItem(data))
                            }}>BUY</button>}
                            {data.discount > 0 ? <span className={Style.PriceDiscount}>{parseInt(data.price)} Р</span> : ''}
                            <span className={Style.PriceMain}>{data.price - parseInt(data.price / 100 * data.discount)}Р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItem
