import React from 'react'
import { Link } from 'react-router-dom'

import Style from './PopularLinks.module.css'

function PopularLinks() {
    return (
        <div className={Style.Main}>
            {/* <div className="container jca">
            <Link to='/' className={Style.Link}>ГЛАВНАЯ</Link>
            <Link to='/' className={Style.Link}>НОВИНКИ</Link>
            <Link to='/' className={Style.Link}>ПРЕДЗАКАЗ</Link>
            <Link to='/' className={Style.Link}>СКИДКИ</Link>
            <Link to='/golucky' className={Style.Link}>ИСПЫТАЙ УДАЧУ</Link>
            </div> */}
        </div>
    )
}

export default PopularLinks
