import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { Home, About, CarListings, Dashboard, Favorites, Profile } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title="Classic Car Sharing"/>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/cars'>
          <CarListings></CarListings>
        </Route>
        <Route path='/favorites'>
          <Favorites></Favorites>
        </Route>
      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
