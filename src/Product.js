import React,{useContext} from 'react'
import auth from './firebase-config'
import rupee from './images/icons/currency-inr.png';
import ProductsContext from './context/ProductsContext';
import './Product.css'
import AllProducts from './AllProducts';
import { useNavigate } from 'react-router-dom';
const Product = (props) => {
  const navigate=useNavigate()
   const {addToCart}=useContext(ProductsContext);
   const handleAdd=()=>{
    if(auth.currentUser!=null){
      addToCart(props.product)
      
    }
    else{
      navigate("/signin")
    }
    
   }
  return (
    <div className="product">
      <img src={AllProducts[props.index]} alt="" className="pro_image" />
      <h1 className="title">{props.product.title}</h1>
      <h4 className="author">By {props.product.author}</h4>
      <p className="paperback">Paperback</p>
      <h3 className="price"><img src={rupee} alt="" className="rupee" />{props.product.price}.00</h3>
      <p className="rating"> 🌟🌟🌟🌟🌟 </p>
      <button className="buy_now" onClick={()=>handleAdd()}>Add to cart</button>
      
    </div>
  )
}

export default Product