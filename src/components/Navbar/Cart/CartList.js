import React from 'react'
import CartItem from './CartItem'
import Style from './CartList.module.css'
import { useSelector, useDispatch } from 'react-redux'

function CartList() {

    const cartList = useSelector(state => {
        console.log('cartItems: ', state.cartReducer.CartItems);
        return state.cartReducer.CartItems
    })

    return (
        <div className={Style.Main}>
            <div className={Style.Header}>Моя Корзина</div>
            <div className={Style.Items}>
                {cartList.length > 0 ?
                    cartList.map((item,index) => {
                        return <CartItem data={item} key={index} />
                    }) : <div className={Style.CartEmpty}>Корзина пуста...</div>
                }
            </div>
        </div>
    )
}

export default CartList
