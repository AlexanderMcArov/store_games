import React from 'react'
import Style from './Genres.module.css'

function Genres() {
    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.GenresSections}>Жанры</div>
            <div className={Style.GenresSectionsItem}>Экшен</div>
            <div className={Style.GenresSectionsItem}>Шутеры</div>
            <div className={Style.GenresSectionsItem}>Приключения</div>
            <div className={Style.GenresSectionsItem}>Ролевые</div>
            <div className={Style.GenresSectionsItem}>Инди</div>
            <div className={Style.GenresSectionsItem}>Симуляторы</div>
            <div className={Style.GenresSectionsItem}>Стратегии</div>
            <div className={Style.GenresSectionsItem}>Аркады</div>
            <div className={Style.GenresSectionsItem}>Спорт и Гонки</div>
            <div className={Style.GenresSectionsItem}>Казульные</div>
            <div className={Style.GenresSectionsItem}>Хоррор</div>
            <div className={Style.GenresSectionsItem}>Выживание</div>
            <div className={Style.GenresSectionsItem}>Открытый мир</div>
            <div className={Style.GenresSectionsItem}>С сюжетом</div>
        </div>
    )
}

export default Genres
