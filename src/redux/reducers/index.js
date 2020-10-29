import { combineReducers } from 'redux'
import CartShop from './CartShop'
import GameListFilter from './GameListFilter'
import AuthUser from './AuthUser'

export default combineReducers({
    cartReducer: CartShop,
    FilterReducer: GameListFilter,
    AuthReducer: AuthUser
})

