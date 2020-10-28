import React from 'react'
import GamesList from './GamesList'
import PriceFilter from './PriceFilter'
import Style from './Catalog.module.css'

function Catalog() {
    return (
        <div className={Style.Main}>
            <div className={Style.HeaderLinks}>
                <PriceFilter />
            </div>
                <GamesList/>
        </div>
    )
}

export default Catalog
