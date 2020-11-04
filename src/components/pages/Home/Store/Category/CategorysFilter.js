import React, { useState } from 'react'
import Style from './CategorysFilter.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeCategorySettings} from '../../../../../redux/actions/GameListFilter'

function CategorysFilter() {
    let obj = JSON.parse(localStorage.getItem('filter'))
    const [filter,setFilter] = useState(obj.category)
    obj.category = filter
    localStorage.setItem('filter',JSON.stringify(obj))

    function handleClick(id){
        if(id == filter) setFilter(0)
        else setFilter(id)
    }

    const dispatch = useDispatch()
    dispatch(changeCategorySettings(filter))
    console.log(filter);
    const src = 'https://i7.uihere.com/icons/936/532/876/category-rough-all-61c300dc1fbaca679f14eb63ba282c05.png'

    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.Header}>Категории</div>
            <div onClick={()=>handleClick(1)} className={filter==1?Style.ActiveSection:Style.Item}>Одиночная</div>
            <div onClick={()=>handleClick(2)} className={filter==2?Style.ActiveSection:Style.Item}>Кооператив</div>
            <div onClick={()=>handleClick(3)} className={filter==3?Style.ActiveSection:Style.Item}>Мультиплеер</div>
            <div onClick={()=>handleClick(4)} className={filter==4?Style.ActiveSection:Style.Item}>Ранний доступ</div>
            <div onClick={()=>handleClick(5)} className={filter==5?Style.ActiveSection:Style.Item}>С достижениями</div>
            <div onClick={()=>handleClick(6)} className={filter==6?Style.ActiveSection:Style.Item}>Карточки Steam</div>
            <div onClick={()=>handleClick(7)} className={filter==7?Style.ActiveSection:Style.Item}>Контроллер</div>
        </div>
    )
}

export default CategorysFilter
