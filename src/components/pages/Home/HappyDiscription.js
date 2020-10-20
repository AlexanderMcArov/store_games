import React from 'react'
import Style from './HappyDiscription.module.css'

export default function HappyDiscription(props) {
    const disc = props.disc

    return (
        <div className={Style.Discription}>
            <span style={{fontSize: '20px', fontWeight: '600'}}>{disc.caption}</span>
            <span style={{fontSize: '12px'}}>{disc.discription}</span>
        </div>
    )
}
