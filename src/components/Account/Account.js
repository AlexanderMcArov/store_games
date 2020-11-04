import React, { useState, useEffect } from 'react'
import Style from './Account.module.css'
import Profile from './Profile'
import AuthUser from './AuthUser'
import Messages from './Messages'
import MyBuyers from './MyBuyers'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Account() {

    const userData = useSelector((state) => {
        return state.userReducer.userData
    })
    console.log('UserData::', userData);
    // let [userIsLogin,userData] = getUser()
    // if(userIsLogin) console.log(userIsLogin,userData.name);

    const [title, setTitle] = useState('Выберите категорию')

    return (
        <div className={Style.Main}>
            {userData.name.length > 0 ? <>
                <div className={Style.LeftBar}>
                    <button onClick={() => setTitle('Профиль')}>Профиль</button>
                    <button onClick={() => setTitle('Мои покупки')}>Мои покупки</button>
                    <button onClick={() => setTitle('Сообщения')}>Тех.поддержка</button>
                    {userData.admin ? <Link to='/adminpanel' style={{background: 'rgba(255,0,0,.6)'}} className={Style.LeftBar}>Админ панель</Link> : ''}
                </div>
                <div className={Style.RightBar}>
                    <div className={Style.Title}>{title}</div>
                    <div className={Style.Content}>
                        {title == 'Профиль' ? <Profile userData={userData} /> : ''}
                        {title == 'Мои покупки' ? <MyBuyers /> : ''}
                        {title == 'Сообщения' ? <Messages /> : ''}
                    </div>
                </div>
            </> :
                <AuthUser />
            }
        </div>
    )
}

export default Account
