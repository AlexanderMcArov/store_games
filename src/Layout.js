import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Warranty from './components/pages/Warranty'
import Catalog from './components/pages/Catalog'
import Faq from './components/pages/FAQ'
import CartList from './components/Navbar/Cart/CartList'
import Account from './components/Account/Account'
import Createorder from './components/Createorder/Createorder'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PopularLinks from './components/PopularLinks/PopularLinks'
import Home from './components/pages/Home/Home'

function Layout() {
    return (
        <div>
            <Navbar />
            <PopularLinks />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/warranty' component={Warranty} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/faq' component={Faq} />
                <Route exact path='/cart' component={CartList} />
                <Route exact path='/auth' component={Account} />
                <Route exact path='/createorder' component={Createorder} />
            </Switch>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
