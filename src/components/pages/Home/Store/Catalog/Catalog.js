import React from 'react'
import GamesList from './GamesList'
import Style from './Catalog.module.css'

function Catalog() {
    return (
        <div className={Style.Main}>
            <div className={Style.HeaderLinks}>
                <button className={Style.btnHeaderLink}>Каталог</button>
                <button className={Style.btnHeaderLink}>Новые</button>
                <button className={Style.btnHeaderLink}>Популярные</button>
                <button className={Style.btnHeaderLink}>Ожидаемые</button>
            </div>
            <GamesList/>
        </div>
    )
}

export default Catalog
