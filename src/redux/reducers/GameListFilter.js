import {
    CHANGE_FILTER_SECTION,
    CHANGE_FILTER_GENRES,
    CHANGE_FILTER_CATEGORY,
    CHANGE_FILTER_PRICE
} from '../actions/constans'

const initialState = {
        section: 0,
        genres: 0,
        category: 0,
        price: [0,3500]
}

export default function gameListFilterReducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case CHANGE_FILTER_SECTION:
            return{
                ...state,
                section: action.section
            }    
        case CHANGE_FILTER_GENRES:
            return{
                ...state,
                genres: action.genres
            }    
        case CHANGE_FILTER_CATEGORY:
            return{
                ...state,
                category: action.category
            }    
        case CHANGE_FILTER_PRICE:
            return{
                ...state,
                price: action.price
            }    
        default:
            return state
    }
}