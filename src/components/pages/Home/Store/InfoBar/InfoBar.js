import React, { useState, useEffect } from 'react'
import Style from './InfoBar.module.css'
import Slider from './SliderInfoBar'

function InfoBar() {

    return (
        <div className={Style.Main}>            
            <div id="vk_groups" style={{marginBottom: '10px'}}>{window.VK.Widgets.Group("vk_groups", {mode: 4, width: "310", height: "380"}, 199863493)}</div>
            <Slider url={'http://localhost:3333/goods?discount_gte=50&discount_lte=100'} caption={'ПОСЛЕДНИИ ПРОДАЖИ'} img={'https://image.flaticon.com/icons/png/512/70/70021.png'} />
            {/* <Slider url={'http://localhost:3333/goods?discount_gte=30&discount_lte=100'} caption={'СНИЖЕНИЕ ЦЕН'} img={'https://image.flaticon.com/icons/png/512/126/126073.png'}/> */}
        </div>
    )
}

export default InfoBar
