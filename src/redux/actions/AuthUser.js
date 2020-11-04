
import {
  LOGIN_USER
} from './constans'

export const loginUser = (name, password) => (dispatch, getState) => {
  const user = {...getState().userReducer.userData};
  fetch('http://localhost:3333/users?name=' + name +
    '&password=' + password)
    .then(res => res.json())
    .then(data => {
      console.log('Приветик. :-)');
      console.log(data);
      if(data.length > 0){
        localStorage.removeItem('user')
        localStorage.setItem('user',JSON.stringify(data[0]))
        dispatch({
          type: LOGIN_USER,
          userData: data[0]
        })
        console.log('Го го го.');
      }else{
        console.log('Неверный пароль.');
        dispatch({
          type: LOGIN_USER,
          userData: user
        })
      }
    })
    .catch(rej => {
      console.log('Пошел нахер.');      
    })
};


