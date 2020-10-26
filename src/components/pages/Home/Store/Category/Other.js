import React, { useState } from 'react'
import Style from './Other.module.css'

function Other() {

    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.Header}>ДРУГОЕ</div>
            <div className={Style.Item}>Серии игр</div>
            <div className={Style.Item}>Бесплатные игры</div>
        </div>
    )
}

export default Other
