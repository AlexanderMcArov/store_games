import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Style from './CartItem.module.css'
import { cartTotalPrice, cartDeleteItem } from '../../../redux/actions/CartShop'


function CartItem(props) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [data, setData] = useState(props.data)
    // {
    //     id: parseInt(1000*Math.random()),
    //     src: 'https://zaka-zaka.com/images/game/c732/crusader-kings-iii.jpg',
    //     altText: 'Crusader Kings',
    //     caption: 'Crusader Kings',
    //     discription: `Любите дворцовые интриги?
    // Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
    //     discount: 0,
    //     price: parseInt(100*Math.random()),
    //   }
    let localDB = []
    let endPrice = 0
    if (data != null) endPrice = data.price - (data.price / 100 * data.discount)
    console.log(endPrice);
    console.log(data);
    console.log(count);

    useEffect(() => {
        fetch('http://localhost:3333/goods?id=' + data.id)
            .then(res => res.json())
            .then(dat => setData(...dat))
        localDB = JSON.parse(localStorage.getItem('cart'))
        console.log(localDB);
        if (localDB.length > 0) {
            localDB.map(item => {
                console.log('Tuta', item);
                if ((data.id != null) == (item.id != null)) {
                    console.log('cacacac', item.count);
                    setCount(item.count)
                }
            })
        }
        dispatch(cartTotalPrice())
    }, [])

    function changeCount(int) {
        localDB = JSON.parse(localStorage.getItem('cart'))
        let a = count
        let res = 0
        res = a + int
        if (res <= 0) res = 1
        localDB.map((item, index) => {
            if ((data.id != null) == (item.id != null)) {
                localDB[index] = {
                    id: item.id,
                    count: res,
                    price: data.price - (data.price / 100 * data.discount),
                    discount: data.discount
                }
            }
        })
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(localDB))
        setCount(res)
        dispatch(cartTotalPrice())
    }

    return (
        <div className={Style.Main}>
            <div className={Style.Header}>
                {endPrice == 'NaN' ? 'Loading...' :
                    <><span>{data.caption}</span>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className={Style.Counter}>
                                <button className={Style.Btns} onClick={() => changeCount(-1)}>{'<'}</button>
                                <span>{count}</span>
                                <button className={Style.Btns} onClick={() => changeCount(1)}>{'>'}</button>
                            </div>
                            <span>{parseInt(data.price - (data.price / 100 * data.discount))}Р</span>
                            <div>
                                <span>Итого: {parseInt(data.price - (data.price / 100 * data.discount) * count)}Р</span>
                                <button className={Style.Btn_Delete} onClick={() => dispatch(cartDeleteItem(data.id))}>X</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CartItem
