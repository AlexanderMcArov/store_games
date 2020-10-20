import React from 'react'
import Style from './Category.module.css'
import Sections from './Category/Sections'
// import Sections from './Category/Sections'
// import Sections from './Category/Sections'

function Category() {
    return (
        <div className={Style.CategoryList}>
            <Sections/>
            <Sections/>
            <Sections/>
            <Sections/>
        </div>
    )
}

export default Category
