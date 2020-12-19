import React, { Component, useEffect, useState } from "react";
import Slider from 'react-slick'
import Style from './ProffitableOffers.module.css'
import Flag from '../../../images/flag-image.png'
import { Link } from 'react-router-dom'
import Axios from "axios";

export default function VerticalSwipeToSlide() {

    const [dataList,setDataList] = useState([])

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: <></>,
        prevArrow: <></>,
        beforeChange: function (currentSlide, nextSlide) {
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        }
    };

    useEffect(()=>{
        Axios.get('https://nodejs-e0e4f.firebaseio.com/goods.json?discount_gte=50&discount_lte=100')
            .then(res=>setDataList(res.data))
    },[])

    return (
        <div>
            <div className={Style.Header}>
                <div className={Style.Flag}>
                    <img src={Flag}></img>
                </div>
                <div className={Style.Title}>
                    ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ
                    </div>
            </div>
            <Slider {...settings}>
                {dataList.map((item,index) => {
                    return (
                        <Link key={index+"-ProfitableOrders"} to={'game/' + item.caption}>
                            <div className={Style.GameItem}>

                                <img src={item.src}></img>
                                <div className={Style.ItemDesc}>{item.caption}</div>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    );
}
