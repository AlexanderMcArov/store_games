import React, { useState } from 'react'
import Style from '../Category.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeSectionSettings} from '../../../../../redux/actions/GameListFilter'

export default function Sections() {
    let obj = JSON.parse(localStorage.getItem('filter'))
    const dispatch = useDispatch()
    const [filter,setFilter] = useState(obj.section)
    obj.section = filter
    localStorage.setItem('filter',JSON.stringify(obj))

    function handleClick(id){
        if(id == filter) setFilter(0)
        else setFilter(id)
    }

    dispatch(changeSectionSettings(filter))
    return (
        <div style={{marginBottom: '15px'}}>
            <div className={Style.CategorySections}>Разделы
            {/* {filter != '' ? 
            <img onClick={()=>setFilter(0)} src="https://findicons.com/files/icons/1681/siena/256/undo_red.png"></img>:''} */}
            </div>
            <div onClick={()=>handleClick(1)} className={filter==1 ? Style.ActiveSection:Style.CategorySectionsItem}>Steam</div>
            <div onClick={()=>handleClick(2)} className={filter==2 ? Style.ActiveSection:Style.CategorySectionsItem}>Origin</div>
            <div onClick={()=>handleClick(3)} className={filter==3 ? Style.ActiveSection:Style.CategorySectionsItem}>Uplay</div>
            <div onClick={()=>handleClick(4)} className={filter==4 ? Style.ActiveSection:Style.CategorySectionsItem}>Battle.net</div>
            <div onClick={()=>handleClick(5)} className={filter==5 ? Style.ActiveSection:Style.CategorySectionsItem}>Xbox</div>
            <div onClick={()=>handleClick(6)} className={filter==6 ? Style.ActiveSection:Style.CategorySectionsItem}>PlayStation</div>
            <div onClick={()=>handleClick(7)} className={filter==7 ? Style.ActiveSection:Style.CategorySectionsItem}>Mac OC X</div>
            <div onClick={()=>handleClick(8)} className={filter==8 ? Style.ActiveSection:Style.CategorySectionsItem}>Linux + Steam OC</div>
        </div>
    )
}
