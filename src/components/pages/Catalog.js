import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import GameItem from '../pages/Home/Store/Catalog/GameItem'

export default function Catalog() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        Axios.get('https://nodejs-e0e4f.firebaseio.com/goods.json')
            .then(res => {
                console.log(res.data)
                setDatas(res.data)
            })
    }, [])

    return (
        <div>
            {datas.map((item, index) => {
                return <GameItem data={item} key={item.id + index + '-GameItem'} />
            })
            }
        </div>
    )
}
