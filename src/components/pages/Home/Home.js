import React from 'react'
import Style from './Home.module.css'
import Carousel from './Carousel'
import Category from './Store/Category'
import Catalog from './Store/Catalog/Catalog'
import InfoBar from './Store/InfoBar/InfoBar'

export default function Home() {
    return (
        <div>
            <Carousel/>
            <div className={Style.Store}>
                <div>
                    <Category/>
                </div>
                <div>
                    <Catalog/>
                </div>
                <div>
                    <InfoBar/>
                </div>
            </div>
        </div>
    )
}
