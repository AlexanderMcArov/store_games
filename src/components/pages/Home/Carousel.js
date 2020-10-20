import React, { useState } from 'react'
import Style from './Home.module.css'
import HappyHour from './HappyHour'
import HappyDiscripton from './HappyDiscription'
import ProffitableOffers from './ProffitableOffers'

export default function Carousel() {

    const [showHappyDiscription,setDiscription] = useState({
        show: false,
        caption: '',
        discription: ''
      })

    return (
        <div className={Style.Carousel}>
            <div className={Style.CarouselItem}>
                <div className={Style.HappyHour}>
                    <HappyHour showDisc={showHappyDiscription} setShowDisc={setDiscription}/>
                    {/* <img src="https://zaka-zaka.com/images/game/d732/dying-light-the-following-enhanced-edition.jpg"></img> */}
                </div>
                
                <div className={Style.ProfitOffer}>
                {showHappyDiscription.show ? <HappyDiscripton disc={showHappyDiscription}/> : 
                <ProffitableOffers/>}
                </div>
            </div>
        </div>
    )
}

