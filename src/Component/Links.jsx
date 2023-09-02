import React from 'react'
import {FaLinkedin} from 'react-icons/fa'

import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube,AiTwotonePhone} from "react-icons/ai";
const Links = () => {
  return (
    <div className='container pt-4 pb-3'>
       

        <div className="row">
            <div className="col-6 text-center">
             <h1 className='fs-1 text-danger display-1'>WORLD</h1>
             <h1 className='fs-1 text-danger'>NEWS</h1>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-12 p-1 m-1">
                        <AiTwotonePhone color='green' size="30px"/> <span>9803588079</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1 p-1">
                        <AiTwotonePhone color='green' size="30px"/> <span>9843555471</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1 p-1">
                        <AiTwotonePhone color='green' size="30px"/> <span>024460439</span>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-12 m-1 p-1">
                        <a href="https://www.facebook.com/"  className="text-decoration-none" target="_blank"> <AiFillFacebook size="30px"/> <span>Facebook</span> </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1 p-1">
                        <a href="https://www.twitter.com/" className="text-decoration-none" target="_blank"> <AiFillTwitterSquare size="30px"/> <span>Twitter</span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1 p-1 ">

                        <a href="https://www.youtube.com/"  className="text-decoration-none" target="_blank"> <AiFillYoutube size="30px" color="red"/> <span>Youtube</span> </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-1 p-1">
                        <a href="https://www.linkedin.com/"  className="text-decoration-none" target="_blank"> <FaLinkedin size="30px"/> <span >Linkedin</span></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Links