import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import Style from './CartList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {cartDownLoadItem} from '../../../redux/actions/CartShop'
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

    console.log('CARLIST:',cartList);

    useEffect(()=>{
        dispatch(cartDownLoadItem())
    },[])
    
    return (
        <div className={Style.Main}>
            <div className={Style.Header}>Моя Корзина</div>
            <div className={Style.Items}>
                {cartList.length > 0 ?
                    cartList.map((item,index) => {
                        return <CartItem data={item} index={index} key={index} />
                    }) : <div className={Style.CartEmpty}>Корзина пуста...</div>
                }
                { cartList.length > 0 ?
                <div className={Style.Total}>Общая стоимость: {totalPrice} 
                {/* <Link className={Style.Link} to="/createorder">Оплатить</Link>  */}
                <button className={Style.Link} onClick={()=>{
                    fetch('https://secure.wayforpay.com/pay',{
                        method: 'POST',
                        body: JSON.stringify({
                        merchantAccount: 'test_merch_n1',
                        merchantAuthType: 'SimpleSignature',
                        merchantDomainName: 'www.market.ua',
                        orderReference: 'DH1603818166',
                        orderDate: '1415379863',
                        amount: '1547.36',
                        currency: 'UAH',
                        orderTimeout: '49000',
                        productName: [
                          'Процессор Intel Core i5-4670 3.4GHz',
                          'Память Kingston DDR3-1600 4096MB PC3-12800'
                        ],
                        productPrice: [ '1000', '547.36' ],
                        productCount: [ '1', '1' ],
                        clientFirstName: 'Вася',
                        clientLastName: 'Пупкин',
                        clientAddress: 'пр. Гагарина, 12',
                        clientCity: 'Днепропетровск',
                        clientEmail: 'some@mail.com',
                        defaultPaymentSystem: 'card',
                        merchantSignature: 'e30212dd928060b5829c9fee8752a987'
                      })
                    })
                }}>Оплатить</button> 
                </div> : ''
                }
            </div>
        </div>
    )
}

export default CartList
