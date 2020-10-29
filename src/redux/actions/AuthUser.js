
import {
    AUTH_USER
  } from './constans'
  
  export const authUser = (item) => (dispatch, getState) => {
    const cart = [...getState().cartReducer.CartItems];
    const isInCart = cart.some((cartItem) => {
      return cartItem.id === item.id;
    });
    if (!isInCart) {
      cart.push(item);
      console.log(cart);
      let d = localStorage.getItem('cart')
      console.log('LocalStorage: ', d);
      d = JSON.parse(d)
      d.push({
        id: item.id,
        count: 1,
        price: item.price
      })
      localStorage.setItem('cart', JSON.stringify(d))
      dispatch({
        type: CART_ADD_ITEM,
        cart
      })
    };
  }
  
  