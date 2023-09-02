import React, { useState } from 'react'
import Image from './logs.png'
import {NavLink} from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  
  // const [user, setUser]=useState({
  //  email:'',
  //  password: ''
  // })
  // let name,value;
  // const getData=(event)=>{
  //   name=event.target.name;
  //   value= event.target.value;
  //   setUser({...user, [name]:value})

  // }
  // const postData=async(e)=>{
  //  e.preventDefault();
  //  const {email, password}=user;
  //  const res=await fetch('https://react-project-c2a8a-default-rtdb.firebaseio.com/Database.json',{
  //   method: 'Post',
  //   headers:{
  //     "Content-Type":"aplication/json"
      

  //   },
  //   body :JSON.stringify({
  //     email,
  //     password,
  //   })
  //  }
  //  )
  // }
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
 const navigate=useNavigate();
  const register=()=>{
    createUserWithEmailAndPassword(auth,email,password)
      .then(auth=>{navigate('/home')})
      .catch(auth=>{navigate('/error')})
  }


  const login=()=>{
    signInWithEmailAndPassword(auth,email,password)
      .then(auth=>{navigate('/home')})
      .catch(auth=>{navigate('/error')})
  }
  return (
    <div className='container bg-info mt-5 p-4 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <div className="row">
            <div className="col-7">
                <div className="row">
                    <div className="col-12">
                    <img src={Image} className='img-fluid' alt="lady" />
                    </div>
                </div>
                
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className='text-center'>Log in/register</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <form method="POST">
  <div className="mb-3">
    <label  className="form-label">Email address </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder='Enter your email address' onChange={(event)=>{setEmail(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder='Enter your password'  onChange={(event)=>{setPassword(event.target.value)}}/>
  </div>
</form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <button type="submit" className="btn btn-primary" onClick={login}>Log in</button>
                    </div>
                    <div className="col-6">
                    <button type="submit" className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
  )
}

export default Login