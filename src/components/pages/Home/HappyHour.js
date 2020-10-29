import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import {cartAddItem} from '../../../redux/actions/CartShop'

import Style from './HappyHour.module.css'



const Example = (props) => {
  const [dataList,setDataList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3333/HappyHour/')
        .then(res => {
            console.log(res.data)
            setDataList(res.data)
        })
  }, [])
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);  

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === dataList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? dataList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  useEffect(()=>{

  },[])

  const slides = dataList.map((item,index) => {
      const data = {
        show: false,
        caption: item.caption,
        discription: item.discription
      }

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index+'-HappyHourSlider'}
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
                    {item.price > 0 ? <div className={Style.GamePrice}>{item.price-item.discount}Р</div> : ''}
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
      {/* <CarouselIndicators dataList={dataList} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;