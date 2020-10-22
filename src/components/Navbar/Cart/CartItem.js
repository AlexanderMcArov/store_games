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

    return (
        <div className={Style.Main}>
            <div className={Style.Header}>
                <span>{data.caption}</span>
                <span>ID:{data.id}</span>
            </div>
            <div className={Style.BodyItem}>
                <img src={data.src}></img>
                <div className="col">
                <div className={Style.BodyItem_Description}>{data.discription}</div>
                <div className={Style.GenresItem}>Strategy Steam
                    <div className={Style.TotalItem}>
                    <div style={{margin: '0px 10px'}}>
                        <button onClick={()=>setCount(loop--)}>-</button>
                            <span style={{margin: '5px 10px'}}>{count}</span>
                        <button onClick={()=>setCount(loop++)}>+</button>
                    </div>
                    {data.price * count}
                    <button>Удалить</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
