import {
    CART_ADD_ITEM
} from '../actions/constans'

const initialState = {
    CartItems: []
}

export default function cardAddReducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case CART_ADD_ITEM:
            return{
                ...state,
                CartItems: action.cart
            }    
        default:
            return state
    }
}