import React from 'react'
import Style from './Category.module.css'
import Sections from './Category/Sections'
import Genres from './Category/Genres'
import CategorysFilter from './Category/CategorysFilter'
import Other from './Category/Other'

function Category() {
    return (
        <div className={Style.CategoryList}>
            <Sections/>
            <Genres/>
            <CategorysFilter/>
            <Other/>
        </div>
    )
}

export default Category
