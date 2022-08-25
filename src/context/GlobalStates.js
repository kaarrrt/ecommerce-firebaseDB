import React,{useEffect, useState} from "react";
import GlobalContext from './GlobalContext'
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut} from 'firebase/auth'
import auth from '../firebase-config';
const GlobalStates=(props)=>{
    const [user,setUser]=useState({});
    const [pending,setPending]=useState(true);
    
    const login=async(email,password)=>{
        const promise=await signInWithEmailAndPassword(auth,email,password);
        return promise;
    }
    const signin=(email,password)=>{
            const user=createUserWithEmailAndPassword(auth,email,password);
            return user;
        
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        auth.onAuthStateChanged(function (user) {
            setUser(user);
            setPending(false);
        })
        
    },[]);
    if(pending){
        return <>Loading...</>
    }
    return(
        <GlobalContext.Provider value={{user,login,signin,logOut}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalStates;