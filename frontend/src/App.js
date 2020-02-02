import React, {useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Fav from './Components/Fav';

function App() {
  return (
    <div>
      <Router>
      <div style = {{ backgroundColor: 'cyan', display:'flex'}}>
        <h1 style = {{marginLeft:'1rem',color:'white', fontWeight:'normal', textAlign:'left', float:'left'}}> Beans Love Beers </h1>
        <div style = {{textAlign:'right', height:'100%', marginLeft:'60rem', marginTop:'2rem'}}>
          <NavLink to = '/' style = {{marginRight:'1rem',marginLeft:'0rem', color:'white'}}> Home </NavLink>
          <NavLink to = '/fav' style = {{color:'white'}}> Favourites </NavLink>
        </div>
      </div>
      <div>
        <Route exact path = '/' component = {() => <Home/>} />
        <Route exact path = '/fav' component = {() => <Fav/>} />
      </div>
      </Router>
    </div>
  );
}

export default App;
