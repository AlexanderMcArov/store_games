import { combineReducers } from 'redux'
import CartShop from './CartShop'
import GameListFilter from './GameListFilter'

export default combineReducers({
    cartReducer: CartShop,
    FilterReducer: GameListFilter,
})

