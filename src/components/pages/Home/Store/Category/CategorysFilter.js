import React from 'react'
import Style from './CategorysFilter.module.css'
function CategorysFilter() {
    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.Header}>Категории</div>
            <div className={Style.Item}>Одичноная</div>
            <div className={Style.Item}>Кооператив</div>
            <div className={Style.Item}>Мультиплеер</div>
            <div className={Style.Item}>Ранний доступ</div>
            <div className={Style.Item}>С достижениями</div>
            <div className={Style.Item}>Карточки Steam</div>
            <div className={Style.Item}>Контроллер</div>
            <div className={Style.Item}>Русский язык</div>
            <div className={Style.Item}>Дешевле 100 руб.</div>
            <div className={Style.Item}>Дешевле 300 руб.</div>
        </div>
    )
}

export default CategorysFilter
