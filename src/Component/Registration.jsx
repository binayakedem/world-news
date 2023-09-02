/*
import React, { useState } from 'react'
import Image from './logs.png'
import {NavLink} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const navigate=useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const register=()=>{
    
    createUserWithEmailAndPassword(auth,email,password)
     .then (auth=>{navigate("/home")})
     .catch(auth=>{navigate("/Error")})
   
  }
  return (
    <div className='container bg-info mt-5 p-4  shadow p-3 mb-5 bg-body-tertiary rounded '>
        <div className="row">
            <div className="col-7">
                <div className="row">
                    <div className="col-12">
                    <img src={Image} className='img-fluid' alt="lady" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2 m-3 ">
                        <NavLink to="" className="bg-primary text-light p-2 rounded">Registration</NavLink>
                    </div>
                    <div className="col-2 m-3 ">
                        <NavLink to="/login" className="bg-primary text-light p-2 rounded">Login</NavLink>
                    </div>
                    <div className="col-4"></div>

                </div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className='text-center'>Register</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <form>
  <div className="mb-3">
    <label className='form-label' >Full Name</label>
    <input type="text" className='form-control'  placeholder='Enter your full name' onChange={(event)=>{setName(event.target.value)}}/>
    <label className='form-label'>Phone Number</label>
    <input type="number" className='form-control'  placeholder='Enter your phone number' onChange={(event)=>{setPhone(event.target.value)}}/>
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email address' onChange={(event)=>{setEmail(event.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'  onChange={(event)=>{setPassword(event.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  
</form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
  )
}

export default Registration
*/