import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Style from './Navbar.module.css'
import BurgerMenu from './BurgerMenu'
import logo from '../../images/logo2.png'
import Search from '../../images/search.png'
import Lkicon from '../../images/lk-icon.png'
import BuyHistory from '../../images/buyhistory.png'
import Cart from './Cart/Cart'
import {useSelector, useDispatch} from 'react-redux'
import {cartAddItem} from '../../redux/actions/CartShop'

export default function Navbar() {

    const [isSearch,setSearh] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        document.addEventListener("keydown",(e)=>{
            if(e.keyCode == 27) setSearh(false)
        });
    },[])

    return (
        <div className={Style.Navbar}>
            <div className="row aic jca">
                <div className={Style.Logo}>
                    <img src={logo}></img>
                </div>
                <div className={Style.Search}>                    
                    {isSearch ? <><img src={Search} onClick={()=>setSearh(!isSearch)}></img><input></input></> : <span onClick={()=>setSearh(!isSearch)}><img src={Search}></img>ПОИСК</span>}
                </div>
                {!isSearch ? <div className={Style.Links}>
                    <Link to='/warranty' className={Style.Link}>Гарантии</Link>
                    <Link to='/catalog' className={Style.Link}>Каталог</Link>
                    <Link to='/faq' className={Style.Link}>Помощь</Link>
                </div> : <></>}
                <div className={Style.Buttons_Links}>
                    <Link to='/auth' className={Style.Buttons_Link}><img src={Lkicon}/>Личный кабинет</Link>
                    <Link to='/myorders' className={Style.Buttons_Link}><img src={BuyHistory}/>Мои покупки</Link>
                    <Link to='/cart' className={Style.Buttons_Link}><Cart/></Link>
                    <button onClick={()=>{
                        console.log('Hf,jfntn');
                dispatch(cartAddItem({
                    name: 'Sanya',
                    id: 3
                }))
            }}>CLICK</button>
                    <button onClick={()=>{
                        console.log('Hf,jfntn');
                dispatch(cartAddItem({
                    name: 'Petya',
                    id: 2
                }))
            }}>CLICK</button>
                    <button onClick={()=>{
                        console.log('Hf,jfntn');
                dispatch(cartAddItem({
                    id: parseInt(1000*Math.random()),
                    src: 'https://zaka-zaka.com/images/game/c732/crusader-kings-iii.jpg',
                    altText: 'Crusader Kings',
                    caption: 'Crusader Kings',
                    discription: `Любите дворцовые интриги?
                Примерьте на себе корону правителя скsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
                    discount: 0,
                    price: parseInt(100*Math.random()),
                  },))
            }}>CLICK</button>
                </div>
                <BurgerMenu/>
            </div>
        </div>
    )
}
