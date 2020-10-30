import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import Style from './CartList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartDownLoadItem } from '../../../redux/actions/CartShop'
import { Link } from 'react-router-dom'


function CartList() {

    const dispatch = useDispatch()

    const cartList = useSelector(state => {
        console.log('cartItems: ', state.cartReducer.CartItems);
        return state.cartReducer.CartItems
    })
    const totalPrice = useSelector(state => {
        console.log('cartItems: ', state.cartReducer.CartItems);
        return state.cartReducer.TotalPrice
    })

    console.log('CARLIST:', cartList);

    useEffect(() => {
        dispatch(cartDownLoadItem())
    }, [])

    return (
        <div className={Style.Main}>
            <div className={Style.Header}>Моя Корзина</div>
            <div className={Style.Items}>
                {cartList.length != null ?
                    cartList.map((item, index) => {
                        console.log(item);
                        if (item != null) return <CartItem data={item} index={index} key={index} />
                    }) : <div className={Style.CartEmpty}>Корзина пуста...</div>
                }
                {cartList.length > 0 ?
                    <div className={Style.Total}>Общая стоимость: {totalPrice}
                        {/* <Link className={Style.Link} to="/createorder">Оплатить</Link>  */}
                        <button style={{ fontWeight: 600, border: 0 }} className={Style.Link} onClick={() => {

                        }}>Оплатить</button>
                    </div> : ''
                }
            </div>
        </div>
    )
}

export default CartList
