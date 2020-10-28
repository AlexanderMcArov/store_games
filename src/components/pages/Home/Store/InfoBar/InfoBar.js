import React, { useState, useEffect } from 'react'
import Style from './InfoBar.module.css'
import Slider from './SliderInfoBar'

function InfoBar() {

    return (
        <div className={Style.Main}>
            <Slider url={'http://localhost:3333/lastSell'} caption={'ПОСЛЕДНИИ ПРОДАЖИ'} img={'https://image.flaticon.com/icons/png/512/70/70021.png'}/>
            <Slider url={'http://localhost:3333/discountList'} caption={'СНИЖЕНИЕ ЦЕН'} img={'https://image.flaticon.com/icons/png/512/126/126073.png'}/>
        </div>
    )
}

export default InfoBar
