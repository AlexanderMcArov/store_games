import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function MyBuyers() {

    const dispatch = useDispatch()
    const [dataList, setDataList] = useState([])

    const userData = useSelector((state) => {
        return state.userReducer.userData
    })

    useEffect(() => {
        if (userData.listBuy.length > 0) {
            fetch('http://localhost:3333/users?id=' + userData.id)
                .then(res => res.json())
                .then(data => setDataList(data))
        }
    }, [userData])

    return (
        <div>

        </div>
    )
}

export default MyBuyers
