import React, { useState } from 'react'

import '../hovering.css'

const Contact= () => {
    const [detail, setDetail]=useState({
        email: '',
        textarea:'',
    })
    const postData=async(e)=>{
        e.preventDefault();
        const{email,textarea}=detail;
        const res=await fetch("https://react-auth-97baa-default-rtdb.firebaseio.com/user-message.json",
        
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                textarea:textarea
            })
        }
        )
        if(res){
          alert("Message has been sent");
        }
        
    }
  return (
    <div className='container  mt-5 p-4 shadow p-3 mb-5 bg-body-tertiary rounded hoves'>
        <div className="row ">      
            <div className="col-12">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className='text-center'>Leave a messege</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <form>
  <div className="mb-3">
    <label  className="form-label" >Email address</label>
    <input type="email" name='email'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email address' onChange={(e)=>setDetail({...detail,email:e.target.value})}/>
  </div>
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"name='textarea'  onChange={(e)=>setDetail({...detail,textarea:e.target.value})}></textarea>
  <label >Leave message here</label>
</div>
</form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary mt-2" onClick={postData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
  )
}

export default Contact