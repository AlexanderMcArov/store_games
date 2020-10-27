import React, { useState } from 'react'
import Style from './Account.module.css'
import Profile from './Profile'

function Account() {

    const [title, setTitle] = useState('Выберите категорию')

    return (
        <div className={Style.Main}>
            <div className={Style.LeftBar}>
                <button onClick={() => setTitle('Профиль')}>Профиль</button>
                <button onClick={() => setTitle('Мои покупки')}>Мои покупки</button>
            </div>
            <div className={Style.RightBar}>
                <div className={Style.Title}>{title}</div>
                <div className={Style.Content}>
                    {title == 'Профиль' ? <Profile /> : ''}
                    {title == 'Мои покупки' ? <MyBuyers /> : ''}
                </div>
            </div>
        </div>
    )
}

function MyBuyers() {
    return (
        <div>Игнукы</div>
    )
}

export default Account
