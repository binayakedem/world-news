import React, { useEffect, useState } from "react";
// const API_URL=`https://newsapi.org/v2/everything?q=`
// const HALF=`&apiKey=9e11ba0d1ccd47e288a6e25f970c5058`

 const API_URL=`https://newsapi.org/v2/everything?q=`
 const HALF=`&apiKey=b4e0ab6be9be41878b759de1ea7eed3c`


const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [news, setNews]=useState([])
    const [query, setQuery]=useState("bitcoin")
const getNews=async(url)=>{
    try{
        const resp= await fetch(url);
    const data=await resp.json();
    console.log(data);
    if(data.status==="ok"){
        setNews(data.articles);
        console.log(news);
    }else{
        console.log("May be there are eror")
    }

    }catch(err){
        console.log(err);
    }
}
useEffect(()=>{
    getNews(`${API_URL}${query}${HALF}`);
},[query])



    return <AppContext.Provider value={{news,query, setQuery}}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider};