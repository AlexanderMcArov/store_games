import React from 'react'
import Style from '../Category.module.css'

export default function Sections() {
    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.CategorySections}>Разделы</div>
            <div className={Style.CategorySectionsItem}>Steam</div>
            <div className={Style.CategorySectionsItem}>Origin</div>
            <div className={Style.CategorySectionsItem}>Uplay</div>
            <div className={Style.CategorySectionsItem}>Battle.net</div>
            <div className={Style.CategorySectionsItem}>Xbox</div>
            <div className={Style.CategorySectionsItem}>PlayStation</div>
            <div className={Style.CategorySectionsItem}>Mac OC X</div>
            <div className={Style.CategorySectionsItem}>Linux + Steam OC</div>
        </div>
    )
}
