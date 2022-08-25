import React,{useState,useEffect} from 'react'
import {db} from './firebase-config'
import {collection, getDocs } from 'firebase/firestore';
import Product from './Product'
import {Grid,Paper} from '@material-ui/core';
import AllProducts from './AllProducts.js';
import './Products.css'
// const productFunc=(book,index)=>{
//     return(
      
//     )
//   }
const Products = () => {
   const [books,setBooks]=useState([]);
   const booksCollectionRef=collection(db,"books");
  useEffect(()=>{
    const getBooks=async()=>{
      const books=await getDocs(booksCollectionRef);
      setBooks(books.docs.map((book)=>({...book.data()})))
    };
    getBooks();
  },[])
  
    return (
    <>
    <div className="products_title">Products</div>
    <div className="products">
    {books.map((book,index)=>(
      <Product  key={book.id} product={book} index={index} />
    ))}
    </div>
    </>
   
  )
}

export default Products