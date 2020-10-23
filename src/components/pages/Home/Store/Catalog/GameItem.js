import React from 'react'
import Style from './GameItem.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {cartAddItem} from '../../../../../redux/actions/CartShop'

function GameItem(props) {
    const dispatch = useDispatch()
    let data = props.data
    let img = `${data.src}`
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
                            <button className={Style.btn} onClick={()=>{dispatch(cartAddItem(data))}}>BUY</button>
                            <div style={{width: '140px'}}></div>
                            {data.discount > 0 ? <span className={Style.PriceDiscount}>-{parseInt(data.price/100*data.discount)} Р</span> : ''}
                            <span className={Style.PriceMain}>{data.price-parseInt(data.price/100*data.discount)}Р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItem
