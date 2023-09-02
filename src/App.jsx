import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import News from "./News"
import 'bootstrap/dist/css/bootstrap.css'
import Login from "./Component/Login"
import Contact from'./Pages/Contact'
import About from "./Pages/About"
import Error from "./Pages/Error"
import MoreNews from "./Component/MoreNews"
import ToHeadlines from "./Pages/ToHeadlines"
import AppleNews from "./Pages/AppleNews"
import Tesla from "./Pages/Tesla"
import Today from "./Pages/Today"
import Business from "./Pages/Business"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="news" element={<News/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="error" element={<Error/>}/>
      <Route path="more" element={<MoreNews/>}/>
      <Route path="top" element={<ToHeadlines/>}/>
      <Route  path="apple" element={<AppleNews/>}/>
      <Route path="tesla" element={<Tesla/>}/>
      <Route path="business" element={<Business/>}/>
      <Route path="today" element={<Today/>}/>


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
