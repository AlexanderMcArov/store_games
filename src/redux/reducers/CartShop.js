import {
    CART_ADD_ITEM,
    CART_UPDATE_ITEM,
    CART_UPDATE_TOTALPRICE
} from '../actions/constans'

const initialState = {
    CartItems: [],
    TotalPrice: 0
}

export default function cardAddReducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case CART_ADD_ITEM:
            return{
                ...state,
                CartItems: action.cart
            }    
        case CART_UPDATE_ITEM:
            return{
                ...state,
                CartItems: action.cart
            }    
        case CART_UPDATE_TOTALPRICE:
        return{
            ...state,
            TotalPrice: action.total
        } 
        default:
            return state
    }
}
