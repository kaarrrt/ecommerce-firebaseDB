import React,{useState, useContext} from 'react'
import './SignIn.css'
import GlobalContext from './context/GlobalContext';
function SignIn() {
  const [login_email,setLogin_email]=useState("");
  const [login_pass,setLogin_pass]=useState("")
  // const navigate=useNavigate();
  const {login}=useContext(GlobalContext);
  const handleSubmit=(e)=>{
    const promise=login(login_email,login_pass);
    promise.then(()=>{
    window.location.href="/"}).catch(error=>console.log(error));
  }
  return (
    <>
    <div className='signin-ctn'>
      <div className="sign-in-title">Sign-In</div>
        <label className="emails-label">Email</label>
        <input type="email" name="useremail" className='email' onChange={(e)=>{
          setLogin_email(e.target.value);
        }}/><br />
        <label className="passwords-label">Password</label>
   <input type="password" name="userpass" className='password' onChange={(e)=>{
          setLogin_pass(e.target.value);
        }}/>
        <button className='sign-in-btn' onClick={()=>handleSubmit()}>Sign In</button>
        <p className="new-user-text">New User?</p>
        <a href='/newuser'><div className="new-user"><p className='new-acc'>Create New Account</p></div></a>
    </div>
    
    </>
      
  )
}

export default SignIn