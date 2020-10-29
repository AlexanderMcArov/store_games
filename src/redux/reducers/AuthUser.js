import {
    AUTH_USER,
    CHANGE_FILTER_GENRES,
    CHANGE_FILTER_CATEGORY,
    CHANGE_FILTER_PRICE
} from '../actions/constans'

const initialState = {
        user: {
            name: null,
            email: null,
            admin: false
        }
}

export default function gameListFilterReducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case AUTH_USER:
            return{
                ...state,
                user: action.user
            }    
        default:
            return state
    }
}