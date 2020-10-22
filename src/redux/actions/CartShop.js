import { 
    CART_ADD_ITEM
 } from './constans'

export const cartAddItem = (item)=> (dispatch, getState)=>{
    const cart = [...getState().cartReducer.CartItems];
    const isInCart = cart.some((cartItem)=>{
      return cartItem.id === item.id;
    });
    if(!isInCart){
      cart.push(item);
      console.log(cart);
      dispatch({
        type: CART_ADD_ITEM,
        cart
      })
    };
  }