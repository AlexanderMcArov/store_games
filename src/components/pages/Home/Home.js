import React from 'react'
import Style from './Home.module.css'
import Carousel from './Carousel'
import Category from './Store/Category'

export default function Home() {
    return (
        <div>
            <Carousel/>
            <div className={Style.Store}>
                <div>
                    <Category/>
                </div>
                <div style={{width: '460px',height: '500px',background: 'red',margin: '10px'}}></div>
                <div style={{width: '310px',height: '500px',background: 'red',margin: '10px'}}></div>
            </div>
        </div>
    )
}
