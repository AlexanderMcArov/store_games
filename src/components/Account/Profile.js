import React from 'react'
import Style from './Account.module.css'
function Profile(props) {
    let userData = props.userData
    return (
        <div className={Style.Profile_Main}>
            <div className={Style.Profile_Header}>
                <div><img src="https://w7.pngwing.com/pngs/434/409/png-transparent-book-icon-sushi-computer-icons-author-book-purple-angle-furniture.png"></img></div>
                <div>Name: {userData.name}</div>
                <div>Balance: </div>
            </div>
        </div>
    )
}

export default Profile
