import React, { useEffect, useState } from 'react'
import LiveInput from './LiveInput/LiveInput'
import Account from '../Account/Account'
import { Link } from 'react-router-dom'
import Style from './Navbar.module.css'
import BurgerMenu from './BurgerMenu'
import Lkicon from '../../images/lk-icon.png'
import logo from '../../images/logo2.png'
import Search from '../../images/search.png'
import BuyHistory from '../../images/buyhistory.png'
import Cart from './Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { cartAddItem, cartDownLoadItem } from '../../redux/actions/CartShop'

export default function Navbar() {

    const [isSearch, setSearh] = useState(false)
    const dispatch = useDispatch()

    dispatch(cartDownLoadItem())

    const userData = useSelector((state) => {
        return state.userReducer.userData
    })

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 27) setSearh(false)
        });
    }, [])

    return (
        <div className={Style.Navbar}>
            <div className="row aic jca">
                <div className={Style.Logo} >
                    <Link to="/"><img src={logo} ></img></Link>
                </div>
                <div className={Style.Search}>
                    {isSearch ? <div className={Style.LiveInput}><LiveInput /></div> : <span onClick={() => setSearh(!isSearch)}><img src={Search}></img>ПОИСК</span>}
                </div>
                {!isSearch ? <div className={Style.Links}>
                    {/* <Link to='/warranty' className={Style.Link}>Гарантии</Link>
                    <Link to='/catalog' className={Style.Link}>Каталог</Link>
                    <Link to='/faq' className={Style.Link}>Помощь</Link> */}
                </div> : <></>}
                <div className={Style.Buttons_Links}>
                    {userData.name && userData.name.length > 0 ?
                        <Link to='/' className={Style.Buttons_Link}><img src="https://static.thenounproject.com/png/3183052-200.png"></img> {userData.name}</Link> :
                        <Link to='/' className={Style.Buttons_Link}><img src={Lkicon} />Личный кабинет</Link>}
                    <Link to='/' className={Style.Buttons_Link}><img src={BuyHistory} />Мои покупки</Link>
                    <Link to='/cart' className={Style.Buttons_Link}><Cart /></Link>
                </div>
                <BurgerMenu />
            </div>
        </div>
    )
}
