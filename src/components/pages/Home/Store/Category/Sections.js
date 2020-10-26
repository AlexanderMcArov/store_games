import React, { useState } from 'react'
import Style from '../Category.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeSectionSettings} from '../../../../../redux/actions/GameListFilter'

export default function Sections() {
    const dispatch = useDispatch()
    const [filter,setFilter] = useState(0)
    dispatch(changeSectionSettings(filter))
    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.CategorySections}>Разделы{filter != '' ? 
            <img onClick={()=>setFilter(0)} src="https://findicons.com/files/icons/1681/siena/256/undo_red.png"></img>:''}</div>
            <div onClick={()=>setFilter(1)} className={Style.CategorySectionsItem}>
    {filter == 1 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
    Steam</div>
            <div onClick={()=>setFilter(2)} className={Style.CategorySectionsItem}>
    {filter == 2 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Origin</div>
            <div onClick={()=>setFilter(3)} className={Style.CategorySectionsItem}>
    {filter == 3 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Uplay</div>
            <div onClick={()=>setFilter(4)} className={Style.CategorySectionsItem}>
    {filter == 4 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Battle.net</div>
            <div onClick={()=>setFilter(5)} className={Style.CategorySectionsItem}>
    {filter == 5 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Xbox</div>
            <div onClick={()=>setFilter(6)} className={Style.CategorySectionsItem}>
    {filter == 6 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                PlayStation</div>
            <div onClick={()=>setFilter(7)} className={Style.CategorySectionsItem}>
    {filter == 7 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Mac OC X</div>
            <div onClick={()=>setFilter(8)} className={Style.CategorySectionsItem}>
    {filter == 8 ? <img src="https://avatanplus.com/files/resources/original/5b7c152b062e01655cb2b011.png"></img> : ''}
                Linux + Steam OC</div>
        </div>
    )
}
