import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import auth from './firebase-config';
import {
  updateProfile,
} from "firebase/auth";
import {db} from './firebase-config';
import {setDoc,doc} from 'firebase/firestore'
import './NewUser.css'
import GlobalContext from './context/GlobalContext';
import ProductsContext from './context/ProductsContext';
const NewUser = () => {
  
  // const {user}=useContext(ProductsContext);
  const [register_name,setRegister_name]=useState("");
  const [register_email,setRegister_email]=useState("");
  const [register_pass,setRegister_pass]=useState("");
  const {signin}=useContext(GlobalContext);
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    try{
      const user=await signin(register_email,register_pass,register_name);
      await updateProfile(auth.currentUser, { displayName: register_name }).catch(
        (err) => console.log(err)
      );
      const createUser=async ()=>{
      await setDoc(doc(db,"users",user.user.uid),{address:[],ordered:0});
            }
      createUser();
      navigate("/signin");
    }
    catch(error){
      alert(error);
    }
    
  }
  return (
    <div className='new-user-ctn'>
        <p className="create-acc-title">Create Account</p>
        <label className="name-label">Your Name</label>
        <input type="text" className="name" onChange={(e)=>{
          setRegister_name(e.target.value);
        }}/>
        <label className="email-label">Email</label>
        <input type="email" className="nu-email" onChange={(e)=>{
          setRegister_email(e.target.value);
        }}/>
        <label className="password-label">Password</label>
        <input type="password" name="userpass" className='nu-password' onChange={(e)=>{
          setRegister_pass(e.target.value);
        }}/>
        <button className="create-acc-btn" onClick={()=>handleSubmit()}><p className="create-acc-text">
          Create your account</p></button>
    </div>
  )
}

export default NewUser