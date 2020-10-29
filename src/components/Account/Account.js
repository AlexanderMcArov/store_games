import React, { useState } from 'react'
import Style from './Account.module.css'
import Profile from './Profile'
import AuthUser from './AuthUser'

function Account() {

    function getUser() {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user.length > 0) return [true, user]
        else return [false,{}]
    }
    let [isUserLogin, userData] = getUser()
    if (isUserLogin) console.log(userData.name)
    // let [userIsLogin,userData] = getUser()
    // if(userIsLogin) console.log(userIsLogin,userData.name);

    const [title, setTitle] = useState('Выберите категорию')

    return (
        <div className={Style.Main}>
            {isUserLogin ? <>
                <div className={Style.LeftBar}>
                    <button onClick={() => setTitle('Профиль')}>Профиль</button>
                    <button onClick={() => setTitle('Мои покупки')}>Мои покупки</button>
                </div>
                <div className={Style.RightBar}>
                    <div className={Style.Title}>{title}</div>
                    <div className={Style.Content}>
                        {title == 'Профиль' ? <Profile userData={userData}/> : ''}
                        {title == 'Мои покупки' ? <MyBuyers /> : ''}
                    </div>
                </div>
            </> :
                <AuthUser />
            }
        </div>
    )
}

function MyBuyers() {
    return (
        <div>Игнукы</div>
    )
}

export default Account
