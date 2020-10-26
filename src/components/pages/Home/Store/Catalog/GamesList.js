import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import GameItem from './GameItem'
import Style from './GamesList.module.css'
import Axios from 'axios'

export default function GamesList() {

    const section = useSelector(state => {
        console.log('section: ', state.FilterReducer.section);
        return state.FilterReducer.section
    })
    const genres = useSelector(state => {
        console.log('genres: ', state.FilterReducer.genres);
        return state.FilterReducer.genres
    })
    const category = useSelector(state => {
        console.log('category: ', state.FilterReducer.category);
        return state.FilterReducer.category
    })
    
    console.log('FilterSettings:',section,genres,category);

    const [data,setData] = useState([])

    useEffect(()=>{
        let req = '?'
        if(section > 0) req += 'section='+section+'&'
        if(genres > 0) req += 'genres='+genres+'&'
        if(category > 0) req += 'category='+category+'&'
        console.log('FILTERSETTINGS:::',req);
        Axios.get('http://localhost:3333/goods'+req)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[section,genres,category])

    return (
        <div className={Style.Main}>
            {
                data.map(item => {
                    return <GameItem data={item} key={item.id + '-GameItem'}/>
                })
            }
        </div>
    )
}
