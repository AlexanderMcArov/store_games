import React, { useState } from 'react'
import Style from './CartItem.module.css'

  
function CartItem(props) {

    const [count,setCount] = useState(1)
    let loop = count
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
    
    let data = props.data
    // let src = 
    console.log(data);
    console.log(count);

    return (
        <div className={Style.Main}>
            <div className={Style.Header}>
                <span>{data.caption}</span>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className={Style.Counter}>
    <button className={Style.Btns} onClick={()=>setCount(loop--)}>{'<'}</button>
                <span>{count}</span>
    <button className={Style.Btns} onClick={()=>setCount(loop++)}>{'>'}</button>
                </div>
                <span>{data.price}Р</span>
                <span>Итого: {data.price * count}Р</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
