import React from 'react';
import Layout from './Layout'
import { Switch, Route } from 'react-router-dom'
import AdminPanel from './components/AdminPanel/AdminPanel'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // initial
  if (localStorage.getItem('user') == null) localStorage.setItem('user', JSON.stringify({}))
  if (localStorage.getItem('cart') == null) localStorage.setItem('cart', JSON.stringify([]))
  if (localStorage.getItem('filter') == null) localStorage.setItem('filter', JSON.stringify({
    page: 1,
    section: 0,
    genres: 0,
    category: 0,
    price: [0, 3500]
  }))
  // <<<
  return (
    <Switch>
      <div className="App">
        <div className="container">
          <Route exact path='/adminpanel' component={AdminPanel} />
          <Route path='/' component={Layout} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
