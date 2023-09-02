
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Links from "../Component/Links";
import Navbar from "../Component/Navbar";
const API=`https://newsapi.org/v2/top-headlines?country=us&apiKey=9e11ba0d1ccd47e288a6e25f970c5058`
const ToHeadlines =() => {
    let [data,setData] = useState([]);
  

  useEffect(() => {
    axios.request(API).then(function (response) {
        console.log(response.data);
        setData(response.data.articles)
    }).catch(function (error) {
        console.error(error);
    });
  },[])

  return (<>
  <div className="container border-dark           float-sm-start">
    <Links/>
    <Navbar/>
  </div>

  <div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
            <h1 className="text-center my-5 py-5 fs-1 text-danger shadow-lg">Todays Top Headlines </h1>
        </div>
        <div className="col-3"></div>
    </div>
    <div className="row">
      <div className="col-12">
      </div>
    </div>
    <div className="row">
      <div className="col-12">

      {data.slice(0,10).map(item => {
    console.log(item);
    return (<>

    <div class=" container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
            <div className="col-12">
            <h1>{item.title}</h1>
            </div>

        </div>
        <div className="row">
            <div className="col-12">
                <img src={item.urlToImage} alt="Image" className="img-fluid" />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <p>{item.description}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <p>Published at :{item.publishedAt}</p> <span> By :{item.author}</span>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
               <a href={item.url} className="fs-4" target="_blank">Learn More...</a>
            </div>
        </div>
    </div>
    
    </>)
  })}

      </div>
    </div>
  </div>
  
  
  </>)

}
export default ToHeadlines;