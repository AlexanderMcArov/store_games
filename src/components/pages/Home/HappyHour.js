import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Style from './HappyHour.module.css'
const items = [
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
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);  

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  useEffect(()=>{

  },[])

  const slides = items.map((item) => {
      const data = {
        show: false,
        caption: item.caption,
        discription: item.discription
      }

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{height: '400px'}} src={item.src} alt={item.altText} />
        <div className={Style.Carousel_Item} 
        onMouseOver={()=>props.setShowDisc(data,data.show = true)} 
        onMouseOut={()=>props.setShowDisc(data)}>
            <div className={Style.Carousel_GameName}>
                {item.caption}
            </div>
            <div className={Style.Carousel_GamePrice}>
                <div className={Style.Price_list}>
                    {item.discount > 0 ? <div className={Style.Discount}>-{item.discount}%</div> : ''}
                    <div className={Style.GamePrice}>{item.price-item.discount}Р</div>
                </div>
            </div>
        </div>
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;