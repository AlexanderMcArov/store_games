import React, { Component } from "react";
import Slider from 'react-slick'
import Style from './ProffitableOffers.module.css'
import Flag from '../../../images/flag-image.png'
import { Link } from 'react-router-dom'

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
                // console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                // console.log("after change", currentSlide);
            }
        };
        let arr = [
            {
              src: 'https://zaka-zaka.com/images/game/c732/crusader-kings-iii.jpg',
              altText: 'Crusader Kings',
              caption: 'Crusader Kings',
              discription: `Любите дворцовые интриги?
          Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
              discount: 0,
              price: parseInt(100*Math.random()),
            },
            {
              src: 'https://zaka-zaka.com/images/game/p732/playerunknowns-battlegrounds.jpg',
              altText: 'Playerunknowns Battlegrounds',
              caption: 'Playerunknowns Battlegrounds',
              discription: `Любите дворцовые интриги?
          Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
              discount: parseInt(100*Math.random()),
              price: parseInt(100*Math.random()),
            },
            {
              src: 'https://zaka-zaka.com/images/slider/732/1602842381-slayd.jpg?1602842734',
              altText: 'Assassins Creed',
              caption: 'Assassins Creed',
              discription: `Любите дворцовые интриги?
          Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
              discount: parseInt(100*Math.random()),
              price: parseInt(100*Math.random()),
            },
            {
              src: 'https://zaka-zaka.com/images/game/g732/grand-theft-auto-v-criminal-enterprise-starter-pack.jpg',
              altText: 'GRAND THEFT AUTO V. Premium Online',
              caption: 'GRAND THEFT AUTO V. Premium Online',
              discription: `Преступный мир не так прост, как кажется.

              Вы можете выполнять мелкие гангстерские поручения местных наркодиллеров, выпендрежников, мелких мошенников и прочих бедолаг этого города. Но разве вы никогда не думали возвыситься над ними? Променять ржавую тачку на роскошный спорткар, а жалкий 9mm пистолет на пулемет, из которого сам Тони Монтана стрелял бы без остановки в каком-нибудь роскошном особняке. Мы считаем, что вы этого достойны! Вы можете купить GRAND THEFT AUTO V: PREMIUM ONLINE EDITION и забыть про пенсионный фонд, сколотив себе свой собственный!
              
              Добро пожаловать в мир, где вы главенствуете в пищевой цепочке!
              
              `,
              discount: parseInt(100*Math.random()),
              price: parseInt(100*Math.random()),
            }
          ];
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
                            <Link to={'game/'+item.caption}>
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
}