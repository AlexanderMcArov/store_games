import React, { useState, useEffect } from 'react'
import Style from './Genres.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeGenresSettings } from '../../../../../redux/actions/GameListFilter'

function Genres() {
    let obj = JSON.parse(localStorage.getItem('filter'))
    const [filter, setFilter] = useState(obj.genres)
    obj.genres = filter
    localStorage.setItem('filter', JSON.stringify(obj))

    const dispatch = useDispatch()

    function handleClick(id) {
        if (id == filter) setFilter(0)
        else setFilter(id)
    }

    useEffect(() => {
        dispatch(changeGenresSettings(filter))
    }, [filter])

    const src = 'https://i.pinimg.com/originals/18/96/1d/18961d1363647ce759a7e559821927b1.png'

    return (
        <div style={{ marginBottom: '15px' }}>
            <div className={Style.GenresSections}>Жанры</div>
            <div onClick={() => handleClick(1)} className={filter == 1 ? Style.ActiveSection : Style.GenresSectionsItem}>Экшен</div>
            <div onClick={() => handleClick(2)} className={filter == 2 ? Style.ActiveSection : Style.GenresSectionsItem}>Шутеры</div>
            <div onClick={() => handleClick(3)} className={filter == 3 ? Style.ActiveSection : Style.GenresSectionsItem}>Приключения</div>
            <div onClick={() => handleClick(4)} className={filter == 4 ? Style.ActiveSection : Style.GenresSectionsItem}>Ролевые</div>
            <div onClick={() => handleClick(5)} className={filter == 5 ? Style.ActiveSection : Style.GenresSectionsItem}>Инди</div>
            <div onClick={() => handleClick(6)} className={filter == 6 ? Style.ActiveSection : Style.GenresSectionsItem}>Симуляторы</div>
            <div onClick={() => handleClick(7)} className={filter == 7 ? Style.ActiveSection : Style.GenresSectionsItem}>Стратегии</div>
            <div onClick={() => handleClick(8)} className={filter == 8 ? Style.ActiveSection : Style.GenresSectionsItem}>Аркады</div>
            <div onClick={() => handleClick(9)} className={filter == 9 ? Style.ActiveSection : Style.GenresSectionsItem}>Спорт и Гонки</div>
            <div onClick={() => handleClick(10)} className={filter == 10 ? Style.ActiveSection : Style.GenresSectionsItem}>Казульные</div>
            <div onClick={() => handleClick(11)} className={filter == 11 ? Style.ActiveSection : Style.GenresSectionsItem}>Хоррор</div>
            <div onClick={() => handleClick(12)} className={filter == 12 ? Style.ActiveSection : Style.GenresSectionsItem}>Выживание</div>
            <div onClick={() => handleClick(13)} className={filter == 13 ? Style.ActiveSection : Style.GenresSectionsItem}>Открытый мир</div>
            <div onClick={() => handleClick(14)} className={filter == 14 ? Style.ActiveSection : Style.GenresSectionsItem}>С сюжетом</div>
        </div>
    )
}

export default Genres
