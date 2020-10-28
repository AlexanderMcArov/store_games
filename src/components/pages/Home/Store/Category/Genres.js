import React, { useState, useEffect } from 'react'
import Style from './Genres.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeGenresSettings} from '../../../../../redux/actions/GameListFilter'

function Genres() {
    let obj = JSON.parse(localStorage.getItem('filter'))
    const [filter,setFilter] = useState(obj.genres)
    obj.genres = filter
    localStorage.setItem('filter',JSON.stringify(obj))

    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(changeGenresSettings(filter))
    },[filter])
    const src = 'https://i.pinimg.com/originals/18/96/1d/18961d1363647ce759a7e559821927b1.png'

    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.GenresSections}>Жанры{filter > 0 ? 
            <img onClick={()=>setFilter(0)} src="https://findicons.com/files/icons/1681/siena/256/undo_red.png"></img>:''}</div>
            <div onClick={()=>setFilter(1)} className={Style.GenresSectionsItem}>{filter == 1?
            <img src={src}></img> : ''}Экшен</div>
            <div onClick={()=>setFilter(2)}  className={Style.GenresSectionsItem}>{filter == 2?
            <img src={src}></img> : ''}Шутеры</div>
            <div onClick={()=>setFilter(3)}  className={Style.GenresSectionsItem}>{filter == 3?
            <img src={src}></img> : ''}Приключения</div>
            <div onClick={()=>setFilter(4)}  className={Style.GenresSectionsItem}>{filter == 4?
            <img src={src}></img> : ''}Ролевые</div>
            <div onClick={()=>setFilter(5)}  className={Style.GenresSectionsItem}>{filter == 5?
            <img src={src}></img> : ''}Инди</div>
            <div onClick={()=>setFilter(6)}  className={Style.GenresSectionsItem}>{filter == 6?
            <img src={src}></img> : ''}Симуляторы</div>
            <div onClick={()=>setFilter(7)}  className={Style.GenresSectionsItem}>{filter == 7?
            <img src={src}></img> : ''}Стратегии</div>
            <div onClick={()=>setFilter(8)}  className={Style.GenresSectionsItem}>{filter == 8?
            <img src={src}></img> : ''}Аркады</div>
            <div onClick={()=>setFilter(9)}  className={Style.GenresSectionsItem}>{filter == 9?
            <img src={src}></img> : ''}Спорт и Гонки</div>
            <div onClick={()=>setFilter(10)}  className={Style.GenresSectionsItem}>{filter == 10?
            <img src={src}></img> : ''}Казульные</div>
            <div onClick={()=>setFilter(11)}  className={Style.GenresSectionsItem}>{filter == 11?
            <img src={src}></img> : ''}Хоррор</div>
            <div onClick={()=>setFilter(12)}  className={Style.GenresSectionsItem}>{filter == 12?
            <img src={src}></img> : ''}Выживание</div>
            <div onClick={()=>setFilter(13)}  className={Style.GenresSectionsItem}>{filter == 13?
            <img src={src}></img> : ''}Открытый мир</div>
            <div onClick={()=>setFilter(14)}  className={Style.GenresSectionsItem}>{filter == 14?
            <img src={src}></img> : ''}С сюжетом</div>
        </div>
    )
}

export default Genres
