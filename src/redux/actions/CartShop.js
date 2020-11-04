
import {
  CART_ADD_ITEM,
  CART_UPDATE_ITEM,
  CART_UPDATE_TOTALPRICE
} from './constans'
import { indigo } from '@material-ui/core/colors';

export const cartAddItem = (item) => (dispatch, getState) => {
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
      price: item.price,
      discount: item.discount
    })
    localStorage.setItem('cart', JSON.stringify(d))
    dispatch({
      type: CART_ADD_ITEM,
      cart
    })
  };
}

export const cartDownLoadItem = () => (dispatch, getState) => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  console.log(cart);
  dispatch({
    type: CART_UPDATE_ITEM,
    cart
  })
}

export const cartTotalPrice = () => (dispatch, getState) => {
  let res = 0
  let db = JSON.parse(localStorage.getItem('cart'))
  if (db.length > 0) {
    db.map(item => {
      let a = item.price * item.count
      res += a
    })
  }
  dispatch({
    type: CART_UPDATE_TOTALPRICE,
    total: res
  })
}

export const cartDeleteItem = (cartID) => (dispatch, getState) => {
  let db = JSON.parse(localStorage.getItem('cart'))
  console.log('DeleteItemID: ',cartID);
  console.log('LocalStorage: Cart: ',db)
  db.forEach((item,ind)=>{
    if(item.id == cartID) db.splice(ind,1)
  })
  console.log('DELETESITEMS: ',db);
  localStorage.removeItem('cart')
  localStorage.setItem('cart',JSON.stringify(db))
  dispatch({
    type: CART_UPDATE_ITEM,
    cart: db
  })
}

