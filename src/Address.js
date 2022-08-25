import {doc,updateDoc} from 'firebase/firestore';
import React, { useContext,useState} from 'react'
import './Address.css'
import {db} from './firebase-config';
import GlobalContext from './context/GlobalContext';
const Address = () => {
  const [name,setName]=useState();
  const [mb_no,setMb_No]=useState();
  const [pincode,setPinCode]=useState();
  const [house,setHouse]=useState();
  const [area,setArea]=useState();
  const {user}=useContext(GlobalContext);
  const handleSubmit=()=>{
    const userDoc=doc(db,"users",user.uid);
    console.log(user.uid)
    const setAddress=async()=>{
      await updateDoc(userDoc,{address:[name,mb_no,pincode,house,area]
      }).then(()=>{window.location.href="/checkout"}).catch((err)=>console.log(err))
    }
    setAddress();
  }
  return (
    <>
    <div className='checkout-ctn'>
      <label  className="select-address">Fill in your address</label>
      <form className="address">
      <label  className="name-lbl">Full name</label>
      <input type="text" className="ch-name" required onChange={(e)=>{setName(e.target.value)}}/>
      <label  className="number-lbl">Mobile Number</label>
      <input type="tel" className="ch-number" required pattern="[1-9][0-9]{9}" onChange={(e)=>{setMb_No(e.target.value)}}/>
      <label  className="pincode-lbl">Pin-Code</label>
      <input type="tel" className="ch-pincode" required pattern="[1-5][0-9]{5}" onChange={(e)=>{setPinCode(e.target.value)}}/>
      <label  className="house-lbl">Flat No,Building,Company</label>
      <input type="text" className="ch-house" required onChange={(e)=>{setHouse(e.target.value)}}/>
      <label  className="area-lbl">Area</label>
      <input type="text" className="ch-area" onChange={(e)=>{setArea(e.target.value)}} />
      <input type="submit" value="Use This Address For Payment" className='ch-usethisaddress' onClick={()=>handleSubmit()}/>
      </form>
    </div>
    </>
    
  )
}

export default Address