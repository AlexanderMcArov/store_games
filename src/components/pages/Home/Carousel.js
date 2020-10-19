import React from 'react'
import Style from './Home.module.css'

export default function Carousel() {


    return (
        <div className={Style.Carousel}>
            <div className="row jcb">
                <div className={Style.HappyHour}>
                    HappyHour
                </div>
                <div className={Style.ProfitOffer}>
                    ProfitOffer
                </div>
            </div>
        </div>
    )
}

