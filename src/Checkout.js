import React, { useContext, useEffect,useState } from 'react'
import './Checkout.css'
import rupee from './images/icons/rupee.svg'
import {db} from './firebase-config';
import AllProducts from './AllProducts';
import {getDoc,doc} from 'firebase/firestore';
import ProductsContext from './context/ProductsContext';
import GlobalContext from './context/GlobalContext'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
let add;
const Checkout = () => {
    const {carts,total}=useContext(ProductsContext);
    const [address,setAddress]=useState([]);
    const {user}=useContext(GlobalContext);
    const userDoc=doc(db,"users",user.uid);
    useEffect(()=>{
        if(user){
            const getAddress=async()=>{
                const us=await getDoc(userDoc);
                setAddress(us.data().address);
            }
            getAddress()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(()=>{
        const len=address.length;
        add=len===0?<Link to="/address">Enter your Address</Link>:<div className='address-info'>{address.map((value,index)=>(<div key={index}>{value}</div>))}</div>
    },[address])
    
  return (
    <>
    <Navbar/>
    <ol className='ch-ctn'>
        <li className="ch-address">
            <div className='ch-delivery'>Delivery Address:{add}</div>
        </li>
        <li className="ch-items">
            <div className='ch-items-images'>Review Items:{carts.map((product,index)=>(<img src={AllProducts[index]} className="ch-image" key={index} alt="products"></img>))}</div>
            <p className='ch-total'>Total:<img src={rupee} className="rupee" alt="rupee"></img>{total}</p>
        </li>
        <li className='ch-buy_now'>
            <button className='ch-buy_now-btn'>Buy Now</button>
        </li>
    </ol>
    </>
  )
}

export default Checkout