import React, { useContext } from 'react'
import { AppContext } from './Context'
import './hovering.css'

const News = () => {
    const {news}=useContext(AppContext);
  return (
    <div className='container'>
       <div className='row'>
        <div className="col-8 mt-5">
          <div className="row">
            <div className="col-12">
        {news.slice(0,1).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12">
                <div className="card hoves" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                   <p className="card-text">{currNews.description}</p>
                   <p>{currNews.publishedAt}</p>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}
        </div>
        <div className="row">
          <div className="col-6">
          {news.slice(1,2).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 mt-3">
                <div className="card hoves" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                      <p>{currNews.content}</p>
                
                   <p className="card-text">{currNews.description}</p>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}

          </div>
          <div className="col-6">
          {news.slice(2,3).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 mt-3">
                <div className="card hoves" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                      <p>{currNews.content}</p>
                
                   <p className="card-text">{currNews.description}</p>
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
       </div>
       <div className="col-4">
        <div className="row">
          <div className="col-12">
          {news.slice(3,4).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 mt-5">
                <div className="card hoves" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                      <p>{currNews.content}</p>
                
                   <p className="card-text">{currNews.description}</p>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}

          </div>
        </div>
        <div className="row">
          <div className="col-12">
          {news.slice(4,5).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 mt-3">
                <div className="card hoves" >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                      <p>{currNews.content}</p>
                
                   <p className="card-text">{currNews.description}</p>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}
            
         
       
            
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          
          </div>
        </div>
       </div>
       </div>
       <div className="row">
        <div className="col-12">
        {news.slice(6,8).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 m-2">
                <div className="card " >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                
                   <p className="card-text">{currNews.description}</p>
                <a href={currNews.url} className="btn btn-primary" target="_blank">Learn More</a>
              </div>
               </div>

                </div>
              </div>   
              
            </div>

        })}
            
        </div>
       </div>
       <div className="row">
        <div className="col-12">
        {news.slice(12,15).map((currNews)=>{
            return <div className='container'>
              <div className="row ">
                <div className="col-12 m-2">
                <div className="card " >
                   <div className='text-center'><h5 className="card-title m-3">{currNews.title}</h5></div>
                    <img src={currNews.urlToImage} className="card-img-top p-2" alt="..."/>
                     <div className="card-body">
                
                   <p className="card-text">{currNews.description}</p>
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

export default News