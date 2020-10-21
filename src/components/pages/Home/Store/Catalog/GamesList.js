import React from 'react'
import GameItem from './GameItem'
import Style from './GamesList.module.css'
export default function GamesList() {

    let GamesListData = [
        {
            src: 'https://zaka-zaka.com/images/game/c732/crusader-kings-iii.jpg',
            altText: 'Crusader Kings',
            caption: 'Crusader Kings',
            discription: `Любите дворцовые интриги?
        Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
            discount: 0,
            price: parseInt(100*Math.random()),
          },
          {
            src: 'https://zaka-zaka.com/images/game/p732/playerunknowns-battlegrounds.jpg',
            altText: 'Playerunknowns Battlegrounds',
            caption: 'Playerunknowns Battlegrounds',
            discription: `Любите дворцовые интриги?
        Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
            discount: parseInt(100*Math.random()),
            price: parseInt(100*Math.random()),
          },
          {
            src: 'https://zaka-zaka.com/images/slider/732/1602842381-slayd.jpg?1602842734',
            altText: 'Assassins Creed',
            caption: 'Assassins Creed',
            discription: `Любите дворцовые интриги?
        Примерьте на себе корону правителя скромного графства или даже целой империи! Вы можете править с гордо поднятой головой на самых разнообразных землях, начиная от территории современ...`,
            discount: parseInt(100*Math.random()),
            price: parseInt(100*Math.random()),
          }
    ]

    return (
        <div className={Style.Main}>
            {
                GamesListData.map(item=>{
                   return <GameItem data={item} />
                })
            }
        </div>
    )
}
