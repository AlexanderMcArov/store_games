import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CardItem from './CardItem.js'
import Pagination from '@material-ui/lab/Pagination';
import AddItem from './AddItem.js'
import Style from './AdminPanel.module.css'

function Happyhour() {

    const [update, setUpdate] = useState(false)
    const [adding, setAdding] = useState(false)
    const [inpValue, setInpValue] = useState('')
    const [dataList, setDataList] = useState([])
    const [page, setPage] = useState(1)
    const pageLength = 8

    const changePage = (e, newPage) => {
        console.log(newPage);
        setPage(newPage)
    }

    function addItem(item) {
        fetch('http://localhost:3333/HappyHour/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => {
                setAdding(false)
                setUpdate(!update)})
    }

    function deleteItem(id) {
        fetch('http://localhost:3333/HappyHour/' + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => setUpdate(!update))
    }

    function editItem(item) {
        console.log(item);
        fetch('http://localhost:3333/HappyHour/' + item.id, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => setUpdate(!update))
    }

    useEffect(() => {
        Axios.get('http://localhost:3333/HappyHour/')
            .then(res => {
                console.log(res.data)
                setDataList(res.data)
            })
    }, [update])

    return (
        <div>
            {adding ? <AddItem crud={addItem} /> : ''}
            <input value={inpValue} onChange={(e) => setInpValue(e.target.value)}></input>
            <button className={Style.btn_add} onClick={() => setAdding(!adding)}>{adding ? 'Отмена' : 'Добавить'}</button>
            {dataList.length != 0 ?
                <Pagination style={{ padding: '5px' }} page={page} onChange={changePage}
                    count={Math.ceil(dataList.length / pageLength)} color="primary" /> : ''}

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{
                dataList.length > 0 ? dataList.slice(page * pageLength - pageLength, pageLength * page).map((item, index) => {
                    if (item.caption.slice(0, inpValue.length).toLowerCase() == inpValue.toLowerCase()) return <CardItem key={index+"-HappyHour"} crud={[deleteItem, editItem]} data={item} key={item.id + '-GameItem'} />
                }) : ''

            }</div>
        </div>
    )
}

export default Happyhour
