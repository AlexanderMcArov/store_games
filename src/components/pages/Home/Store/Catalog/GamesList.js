import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux'
import GameItem from './GameItem'
import Style from './GamesList.module.css'
import Axios from 'axios'
import Item from 'antd/lib/list/Item';

export default function GamesList() {

    const cartList = useSelector(state => {
        console.log('cartItems: ', state.cartReducer.CartItems);
        return state.cartReducer.CartItems
    })
    let cart = []
    cartList.forEach(item => {
        cart.push(item.id)
    })


    let obj = JSON.parse(localStorage.getItem('filter'))
    const [page, setPage] = useState(JSON.parse(obj.page))
    const pageLength = 7
    obj.page = page
    localStorage.setItem('filter', JSON.stringify(obj))
    const useStyles = makeStyles((theme) => ({
        pagination: {
            '& > *': {
                marginTop: theme.spacing(0),
                marginBottom: theme.spacing(2),
                background: 'white',
                padding: '5px'
            },
        },
    }));
    const classes = useStyles();

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

    const price = useSelector(state => {
        console.log('price: ', state.FilterReducer.price);
        return state.FilterReducer.price
    })

    console.log('FilterSettings:', section, genres, category);

    const [data, setData] = useState([])

    const changePage = (e, newPage) => {
        console.log(newPage);
        setPage(newPage)
    }

    let pageData = data.map((item, index) => {
        if (index > 0 && index < 9) return item
    })

    useEffect(() => {
        let req = '?'
        if ((section + genres + category) == 0) req += '_limit=8'
        else {
            if (section > 0) req += 'section=' + section + '&'
            if (genres > 0) req += 'genres=' + genres + '&'
            if (category > 0) req += 'category=' + category + '&'
        }
        req += `price?_start=${price[0]}&_end=${price[1]}`
        console.log('FILTERSETTINGS:::', req);
        Axios.get('http://localhost:3333/goods' + req)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [section, genres, category])

    let ItemList = []

    data.forEach((item, index) => {
        if (item.price - parseInt(item.price / 100 * item.discount) > price[0] && item.price - parseInt(item.price / 100 * item.discount) < price[1]) {
            ItemList.push(item)
        }
    })

    return (
        <div className={Style.Main}>
            <div className={classes.pagination}>
                {data.length != 0 ? <Pagination page={page} onChange={changePage} count={Math.ceil(ItemList.length / pageLength)} color="primary" /> : ''}
            </div>
            {data.length == 0 ? <img className={Style.EmptyImg} src="https://img.icons8.com/color/452/void.png"></img> : <>
            {ItemList.slice(page * pageLength - pageLength, pageLength * page).map(item=>{
                return <GameItem cart={cart} data={item} key={item.id + '-GameItem'} />
            })}
            </>}
        </div>
    )
}
