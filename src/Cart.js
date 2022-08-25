import React, { useContext, useState } from 'react'
import rupee from './images/icons/currency-inr.png'
import trash from './images/icons/trash.svg';
import './Cart.css'
import Navbar from './Navbar.js'
import './Product.css'
import ProductsContext from './context/ProductsContext';
import AllProducts from './AllProducts'
function Cart() {
  const [qty,setQty]=useState(0)
  const {total,deleteItem,addQty,minusQty}=useContext(ProductsContext);
  const {carts}=useContext(ProductsContext);
  const increaseQty=(index)=>{
    setQty(carts[index].qty+1);
    addQty(index,carts[index].qty+1);
  }
  const decreaseQty=(index)=>{
    setQty(carts[index].qty-1);
    minusQty(index,carts[index].qty-1);
  }
  const handleSubmit=()=>{
    window.location.href="/checkout";
  }
  console.log(qty);
  return (
    <div className="outer-cart">
      <Navbar/>
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <div className="shopping-cart">
      {carts.map((p,index)=>
        (
          <div className="each-product" key={index+1}>
            <div className='line' ></div>
            <img src={AllProducts[p.id]} alt="" className='cart-img' />
            <p className='ep-title'>{p.title}</p>
            <p className='ep-author'>{p.author}</p>
            <div className='ep-qty'>
              <label className='ep-qty-label'>Qty:</label>
              <label className='ep-minus-label' onClick={()=>decreaseQty(index)}>-</label>
              <label className='ep-qty-no'>{p.qty}</label>
              <label className='ep-plus-label' onClick={()=>increaseQty(index)}>+</label>
            </div>
            <img src={trash} alt="" className="trash" onClick={()=>deleteItem(index)}/>
            <p className="ep-paperback">Paperback</p>
            <p className='ep-price-title'>Price</p>
            <p className='ep-price'><img src={rupee} alt="" className="ep-rupee"/>{p.price}.00</p>
            <div className='line'></div>
          </div>
          
        )
        
      )}
    </div>
      <div className="subtotal">
        <p className='subtotal-text'>Subtotal-{carts.length} Items : <img src={rupee} alt="" />{total}</p>
        
        <button className="proceed" onClick={()=>handleSubmit()}>Proceed To Checkout</button>
        </div>
      
    </div>
    
    
    )
}

export default Cart