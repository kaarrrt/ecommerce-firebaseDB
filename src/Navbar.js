import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import GlobalContext from './context/GlobalContext';
import ProductsContext from './context/ProductsContext';
import shopcart from './images/icons/shopping-cart.svg';
import search from './images/icons/search.svg';
import './Navbar.css';
const Navbar=()=>{
  // const navigate=useNavigate()
  const {user,logOut}=useContext(GlobalContext);
  const {carts}=useContext(ProductsContext);
  const len=carts!=null?carts.length:"";
  const handleSubmit=async ()=>{
    try{
      await logOut();
    }
    catch(error){
      console.log(error);
    }
  }
  let sign=<a href="/signin" className="signin">
              SignIn
            </a>
  if(user){
    sign=<a href="/" className='sign-out' onClick={()=>handleSubmit()}>Sign Out</a>
  }
  return (
      <div className="navbar">
        <Link to="/" className="logo">NC</Link>
        <div className="search">Search</div>
        <img src={search} alt="" className="search-icon" />
            <div className="hello">Hello {user?user.displayName:"User"}!</div>
            {sign}
        <Link to="/orders" className="orders">Orders</Link>
        <img src={shopcart} alt="Shopping Cart" className='shopcart'/>
        <h4 className='cart_no'>{len}</h4>
        <Link to="/cart" className="cart">Cart</Link>
    </div>
    

  )
}

export default Navbar