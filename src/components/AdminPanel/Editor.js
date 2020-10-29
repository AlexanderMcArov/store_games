import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CardItem from './CardItem.js'
import Pagination from '@material-ui/lab/Pagination';

function Editor() {

    const [inpValue,setInpValue] = useState('')
    const [dataList, setDataList] = useState([])
    const [page, setPage] = useState(1)
    const pageLength = 7

    const changePage = (e, newPage) => {
        console.log(newPage);
        setPage(newPage)
    }

    useEffect(() => {
        Axios.get('http://localhost:3333/goods')
            .then(res => {
                console.log(res.data)
                setDataList(res.data)
            })
    }, [])

    return (
        <div>
            <input value={inpValue} onChange={(e)=>setInpValue(e.target.value)}></input>
            {dataList.length != 0 ?
                <Pagination style={{ padding: '5px' }} page={page} onChange={changePage}
                    count={Math.ceil(dataList.length / pageLength)} color="primary" /> : ''}

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{
                dataList.length > 0 ? dataList.slice(page * pageLength - pageLength, pageLength * page).map((item, index) => {
                    if(item.caption.slice(0,inpValue.length).toLowerCase() == inpValue.toLowerCase()) return <CardItem data={item} key={item.id + '-GameItem'} />
                }) : ''

            }</div>
        </div>
    )
}

export default Editor
