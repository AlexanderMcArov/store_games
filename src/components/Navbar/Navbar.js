import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Style from './Navbar.module.css'
import BurgerMenu from './BurgerMenu'
import logo from '../../images/logo2.png'
import Search from '../../images/search.png'
import Lkicon from '../../images/lk-icon.png'
import BuyHistory from '../../images/buyhistory.png'
import Shopping from '../../images/shopping.png'

export default function Navbar() {

    const [isSearch,setSearh] = useState(false)

    useEffect(()=>{
        document.addEventListener("keydown",(e)=>{
            if(e.keyCode == 27) setSearh(false)
        });
    },[])

    return (
        <div className={Style.Navbar}>
            <div className="row aic">
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
                    <Link to='/cart' className={Style.Buttons_Link}><img src={Shopping}/>Корзина</Link>
                </div>
                <BurgerMenu/>
            </div>
        </div>
    )
}