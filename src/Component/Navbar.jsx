import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AppContext } from '../Context';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {query, setQuery}=useContext(AppContext);
  const navigate=useNavigate();
  const logOut=()=>{
    auth.signOut;
    navigate('/');
  }
  return (
    <div className='float-sm-start'>
      <div className="container sticky-top">
        <div className="row bg-black text-white">
          <div className="col-11">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid text-white ">
    <NavLink to="/home" className="navbar-brand text-white fs-3 mx-2 mx-2" href="#"> <AiFillHome size="30px"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active text-white  mx-2" aria-current="page" target="_blank" >Contact Us</NavLink >
        </li>
        <li className="nav-item">
          <NavLink to="/more" className="nav-link active text-white  mx-2" aria-current="page" >More News</NavLink >
        </li>
        
        <li className="nav-item">
          <NavLink to="/apple" className="nav-link active text-white  mx-2" aria-current="page" >Todays</NavLink >
        </li>
   
  
 
       
 
    
       <li className="nav-item">
          <NavLink to="/top" className="nav-link active text-white  mx-2" aria-current="page" >Top Headlines</NavLink >
        </li>
        <li className="nav-item">
          <NavLink to="/apple" className="nav-link active text-white  mx-2" aria-current="page" >News to Apple</NavLink >
        </li>
        <li className="nav-item">
          <NavLink to="/tesla" className="nav-link active text-white  mx-2" aria-current="page">Tesla</NavLink >
        </li>
        <li className="nav-item">
          <NavLink to="/business" className="nav-link active text-white  mx-2" aria-current="page" >News to business</NavLink >
        </li>

      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>e.preventDefault()} action="#">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"   value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button className="btn btn-outline-success bg-success text-white" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
          </div>
          <div className="col-1">
            <div className="row">
              <div className="col-12 pt-2 ">
                  <button className="rounded-circle" ><NavLink to="/" ><FaUser color='white' size="40px"/></NavLink></button>

                 

              </div>
            </div>
            <div className="row">
              <div className="col-12"><p>log out</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar