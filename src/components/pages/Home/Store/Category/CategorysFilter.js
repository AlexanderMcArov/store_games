import React, { useState } from 'react'
import Style from './CategorysFilter.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeCategorySettings} from '../../../../../redux/actions/GameListFilter'

function CategorysFilter() {

    const dispatch = useDispatch()
    const [filter,setFilter] = useState(0)
    dispatch(changeCategorySettings(filter))
    console.log(filter);
    const src = 'https://i7.uihere.com/icons/936/532/876/category-rough-all-61c300dc1fbaca679f14eb63ba282c05.png'

    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.Header}>Категории{filter > 0 ? 
            <img onClick={()=>setFilter(0)} src="https://findicons.com/files/icons/1681/siena/256/undo_red.png"></img>:''}</div>
            <div onClick={()=>setFilter(1)} className={Style.Item}>{filter == 1 ? 
            <img src={src}></img> : ''}Одиночная</div>
            <div onClick={()=>setFilter(2)} className={Style.Item}>{filter == 2 ? 
            <img src={src}></img> : ''}Кооператив</div>
            <div onClick={()=>setFilter(3)} className={Style.Item}>{filter == 3 ? 
            <img src={src}></img> : ''}Мультиплеер</div>
            <div onClick={()=>setFilter(4)} className={Style.Item}>{filter == 4 ? 
            <img src={src}></img> : ''}Ранний доступ</div>
            <div onClick={()=>setFilter(5)} className={Style.Item}>{filter == 5 ? 
            <img src={src}></img> : ''}С достижениями</div>
            <div onClick={()=>setFilter(6)} className={Style.Item}>{filter == 6 ? 
            <img src={src}></img> : ''}Карточки Steam</div>
            <div onClick={()=>setFilter(7)} className={Style.Item}>{filter == 7 ? 
            <img src={src}></img> : ''}Контроллер</div>
            <div onClick={()=>setFilter(8)} className={Style.Item}>{filter == 8 ? 
            <img src={src}></img> : ''}Русский язык</div>
            <div onClick={()=>setFilter(9)} className={Style.Item}>{filter == 9 ? 
            <img src={src}></img> : ''}Дешевле 100 руб.</div>
            <div onClick={()=>setFilter(10)} className={Style.Item}>{filter == 10 ? 
            <img src={src}></img> : ''}Дешевле 300 руб.</div>
        </div>
    )
}

export default CategorysFilter
