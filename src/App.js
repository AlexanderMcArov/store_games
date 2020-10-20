import React from 'react';
import Navbar from './components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Warranty from './components/pages/Warranty'
import Catalog from './components/pages/Catalog'
import Faq from './components/pages/FAQ'
import PopularLinks from './components/PopularLinks/PopularLinks'
import Home from './components/pages/Home/Home'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar />
      <PopularLinks />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/warranty' component={Warranty}/>
        <Route path='/catalog' component={Catalog}/>
        <Route path='/faq' component={Faq}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
