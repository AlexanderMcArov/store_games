import {
    CHANGE_FILTER_SECTION,
    CHANGE_FILTER_GENRES,
    CHANGE_FILTER_CATEGORY,
    CHANGE_FILTER_PRICE   
} from '../actions/constans'

export const changeGenresSettings = (int)=> (dispatch)=>{
    dispatch({
    type: CHANGE_FILTER_GENRES,
    genres: int
    })
}
export const changeSectionSettings = (int)=> (dispatch)=>{
     dispatch({
    type: CHANGE_FILTER_SECTION,
    section: int
    })
}
export const changeCategorySettings = (int)=> (dispatch)=>{
    dispatch({
    type: CHANGE_FILTER_CATEGORY,
    category: int
    })
}
export const changePriceSettings = (int)=> (dispatch)=>{
    dispatch({
    type: CHANGE_FILTER_PRICE,
    price: int
    })
}