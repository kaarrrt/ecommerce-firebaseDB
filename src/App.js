import { BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Home';
import Cart from './Cart';
import Address from './Address'
import Orders from './Orders';
import SignIn from './SignIn';
import Payment from './Payment'
import NewUser from './NewUser';
import Checkout from './Checkout';
function App() {
  return (
          <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/newuser" element={<NewUser/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/address" element={<Address/>}/>
          </Routes>
          </BrowserRouter>
        </div>
        
      
    
    
  );
}

export default App;
