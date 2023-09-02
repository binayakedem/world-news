import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router';
import './error.css'
const Error = () => {
    const navigate=useNavigate();
    const logOut=()=>{
      auth.signOut;
      navigate('/');
    }
  return (
    <div className='containers'>
        <p className='pes'>warning!</p>
        <h2 className='hes'>Invalid</h2>
        <button className='btns' onClick={logOut}>GO to register</button>
        
    </div>
  )
}

export default Error