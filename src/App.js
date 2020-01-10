import React from 'react';
import logo from './logo.svg';
import './css/shopping.css';
import Login from './Login';
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import {Provider} from 'react-redux';
import{
BrowserRouter as Router,
Switch,
Route
}from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import store from './store/store';


const store = createStore(()  => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
    <div className="">
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    
      <Route exact path ="/login" component ={Login}/>
      <Route exact path="/productdetails" component={ProductDetails}/>
    </Switch>
    </Router>
      
    </div>
    </Provider>
  );
}

export default App;
