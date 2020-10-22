import React from 'react'
import Shopping from './shopping.png'
import Style from './Cart.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {cartAddItem} from '../../../redux/actions/CartShop'


function Cart() {

    const dispatch = useDispatch()
    const cartList = useSelector(state=>{
        console.log(state.cartReducer.CartItems);
        return state.cartReducer.CartItems
    })

    console.log(cartList);

    return (
        <div className={Style.Main}>            
            <img src={Shopping}/>Мои покупки
            <div className={Style.CartSize}>
               {cartList.length}
            </div>
        </div>
    )
}

export default Cart
