import React from 'react'
import Style from './InfoBar.module.css'
import Slider from './SliderInfoBar'

function InfoBar() {
    return (
        <div className={Style.Main}>
            <Slider data={'ПОСЛЕДНИИ ПРОДАЖИ'} img={'https://image.flaticon.com/icons/png/512/70/70021.png'}/>
            <Slider data={'СНИЖЕНИЕ ЦЕН'} img={'https://image.flaticon.com/icons/png/512/126/126073.png'}/>
        </div>
    )
}

export default InfoBar
