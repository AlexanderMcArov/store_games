import React, { useState, useEffect } from "react";
import Slider from 'react-slick'
import Style from './SliderInfoBar.module.css'
import Flag from '../../../../../images/flag-image.png'
import Axios from 'axios'

export default function VerticalSwipeToSlide(props) {

    const [dataList,setDataList] = useState([])

    useEffect(()=>{
        fetch(props.url)
            .then(res=>res.json())
            .then(data=>setDataList(data))
    },[])

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <></>,
        prevArrow: <></>,
        beforeChange: function (currentSlide, nextSlide) {
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        }
    };
    // if((this.state.data).length > 0) arrs = props.data
    return (
        <div className={Style.Main}>
            <div className={Style.Header}>
                <div className={Style.Flag}>
                    <img src={props.img}></img>
                </div>
                <div className={Style.Title}>
                    {props.caption}
                </div>
            </div>
            <Slider {...settings}>
                {dataList.map(item => {
                    return (
                        <div className={Style.GameItem}>
                            <img src={item.src}></img>
                    <div className={Style.ItemDesc}>{item.id}{item.caption}</div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}
