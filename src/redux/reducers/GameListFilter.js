import {
    CHANGE_FILTER_SECTION,
    CHANGE_FILTER_GENRES,
    CHANGE_FILTER_CATEGORY
} from '../actions/constans'

const initialState = {
        section: 0,
        genres: 0,
        category: 0
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
        default:
            return state
    }
}