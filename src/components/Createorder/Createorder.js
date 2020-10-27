import React from 'react'
import Style from './Createorder.module.css'

function Createorder() {
    return (
        <div className={Style.Main}>
            <form method="post" action="https://crimson-maze-cannon.glitch.me/pay" accept-charset="utf-8" onSubmit={(e)=>{
                // e.preventDefault()
                console.log('Chf,jnfk');
            }}>
                <input name="merchantAccount" value="test_merch_n1"></input>
                <input name="merchantAuthType" value="SimpleSignature"></input>
                <input name="merchantDomainName" value="www.market.ua"></input>
                <input name="orderReference" value="DH1603818166"></input>
                <input name="orderDate" value="1415379863"></input>
                <input name="amount" value="1547.36"></input>
                <input name="currency" value="UAH"></input>
                <input name="orderTimeout" value="49000"></input>
                <input name="productName[]" value="Процессор Intel Core i5-4670 3.4GHz"></input>
                <input name="productName[]" value="Память Kingston DDR3-1600 4096MB PC3-12800"></input>
                <input name="productPrice[]" value="1000"></input>
                <input name="productPrice[]" value="547.36"></input>
                <input name="productCount[]" value="1"></input>
                <input name="productCount[]" value="1"></input>
                <input name="clientFirstName" value="Вася"></input>
                <input name="clientLastName" value="Пупкин"></input>
                <input name="clientAddress" value="пр. Гагарина, 12"></input>
                <input name="clientCity" value="Днепропетровск"></input>
                <input name="clientEmail" value="some@mail.com"></input>
                <input name="defaultPaymentSystem" value="card"></input>
                <input name="merchantSignature" value="e30212dd928060b5829c9fee8752a987"></input>
                <input type="submit" value="Test"></input>
            </form>
        </div>
    )
}

// fetch('https://secure.wayforpay.com/pay',{
//     method: 'POST',
//     headers: {"Content-Type":"text/html;charset=utf-8"},
//     body: JSON.stringify({
//     merchantAccount: 'test_merch_n1',
//     merchantAuthType: 'SimpleSignature',
//     merchantDomainName: 'www.market.ua',
//     orderReference: 'DH1603818166',
//     orderDate: '1415379863',
//     amount: '1547.36',
//     currency: 'UAH',
//     orderTimeout: '49000',
//     productName: [
//       'Процессор Intel Core i5-4670 3.4GHz',
//       'Память Kingston DDR3-1600 4096MB PC3-12800'
//     ],
//     productPrice: [ '1000', '547.36' ],
//     productCount: [ '1', '1' ],
//     clientFirstName: 'Вася',
//     clientLastName: 'Пупкин',
//     clientAddress: 'пр. Гагарина, 12',
//     clientCity: 'Днепропетровск',
//     clientEmail: 'some@mail.com',
//     defaultPaymentSystem: 'card',
//     merchantSignature: 'e30212dd928060b5829c9fee8752a987'
//   })
// })

export default Createorder