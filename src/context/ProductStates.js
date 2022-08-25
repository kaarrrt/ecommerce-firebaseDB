import React,{useState,useEffect, useContext} from 'react'
import ProductsContext from './ProductsContext'
import {db} from '../firebase-config';
import GlobalContext from './GlobalContext';
import {collection,getDocs,addDoc,doc,updateDoc,deleteDoc} from 'firebase/firestore';
import  auth  from '../firebase-config';
const ProductStates = (props) => {
    const {user}=useContext(GlobalContext);
    const [total,setTotal]=useState(0);
    const [carts,setCart]=useState([]);
    let userCollectionRef;
    if(user){
      userCollectionRef=collection(db,"Cart"+user.uid);
    }
    
    let Product;
    const addToCart=(product)=>{
      Product=product
      Product['qty']=1;
      Product['TotalPrice']=Product['qty']*product.price;
      setCart([...carts,Product])
      const updateCart=async()=>{
        await addDoc(userCollectionRef,Product);
      }
      
      updateCart();
      return(1);
    }
    const addQty=(index,qty)=>{
      let items=[...carts]
      items[index].qty+=1;
      items[index].TotalPrice+=parseInt(items[index].price)
      const price=items[index].TotalPrice;
      setCart(items);
      const id=carts[index].doc_id
      const addCart=async(id)=>{
        const userDoc=doc(db,"Cart"+user.uid,id)
        const del=await updateDoc(userDoc,{qty:qty,TotalPrice:price})
      }
      addCart(id);
    }
    const minusQty=(index,qty)=>{
      let items=[...carts]
      items[index].qty-=1;
      items[index].TotalPrice-=parseInt(items[index].price)
      const price=items[index].TotalPrice;
      setCart(items);
      const id=carts[index].doc_id
      const minusCart=async(id)=>{
        const userDoc=doc(db,"Cart"+user.uid,id)
        const del=await updateDoc(userDoc,{qty:qty,TotalPrice:price})
      }
      minusCart(id);
    }
    const deleteItem=(index)=>{
      let items=[...carts]
      const id=carts[index].doc_id
      items.splice(index,1);
      setCart(items);

      const deleteCart=async(id)=>{
        const userDoc=doc(db,"Cart"+user.uid,id)
        const del=await deleteDoc(userDoc)
      }
      deleteCart(id);
    }
    useEffect(()=>{
    const getCart=async()=>{
      if(auth.currentUser){
      const cart=await getDocs(userCollectionRef);
      setCart(cart.docs.map((product)=>
        ({...product.data(),doc_id:product.id})))
    };
      }
      getCart();
      
  },[])
  useEffect(()=>{
    let price=0;
      carts.forEach(product => {
        price+=product.TotalPrice;
      });
    setTotal(price);
  },[carts])
  return (
    <ProductsContext.Provider value={{carts,total,deleteItem,addToCart,addQty,minusQty}}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductStates