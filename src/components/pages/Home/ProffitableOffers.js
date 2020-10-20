import React, { Component } from "react";
import Slider from 'react-slick'
import Style from './ProffitableOffers.module.css'
import Flag from '../../../images/flag-image.png'

export default class VerticalSwipeToSlide extends Component {
    render() {
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
            autoplaySpeed: 4000,
            nextArrow: <></>,
            prevArrow: <></>,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        let arr = [1, 2, 3, 4, 5, 6, 7]
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
                    {arr.map(item => {
                        return (
                            <div className={Style.GameItem}>
                                <img src="https://zaka-zaka.com/images/game/p732/playerunknowns-battlegrounds.jpg"></img>
                                <div className={Style.ItemDesc}>{item}dsadsadsa</div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}