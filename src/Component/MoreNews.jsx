
import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom';

const MoreNews = () => {
    const {news}=useContext(AppContext);
  return (
    <div className='container-fluid bg-light  '>
       
        <div className="row">
            
            <div className="col-12">
                <h1 className='text-center'>More News</h1>
            </div>
            
        </div>
        <div className="row">
                <div className="col-12 text-center">
           
           <Link to="/home" className='fs-3 text-center'>Back To Home</Link>
           
           </div></div>
        <div className="row">
            <div className="col-12">
            {news.slice(0,30).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12">
                <div className="card" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                   <p className='card-text'>{currNews.content}</p>
                  
                   <div className="row">
                    <div className="col-6"> <p>{currNews.publishedAt}</p></div>
                    <div className="col-6"> <p>BY:{currNews.author}</p></div>
                   </div>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}

            </div>
        </div>

    </div>
  )
}

export default MoreNews