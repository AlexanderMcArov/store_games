import {
    LOGIN_USER,
    CHANGE_FILTER_GENRES,
    CHANGE_FILTER_CATEGORY,
    CHANGE_FILTER_PRICE
} from '../actions/constans'

const initialState = {
    userData: {
        name: '',
        email: null,
        admin: false,
        listBuy: []
    }
}

export default function Reducer(state = initialState, action) {
    console.log('REDUCER:::', action.userData);
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}