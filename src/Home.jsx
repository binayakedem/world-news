import React, { useContext } from 'react'
import Footer from './Component/Footer'
import Links from './Component/Links'
import Navbar from './Component/Navbar'
import News from './News'
import About from './Pages/About'
import Contact from './Pages/Contact'
const Home = () => {
  
   

  return (
    <div className='container bg-light'>
        <Links/>
        <Navbar/>
        <News/>
        <Contact/>
        <About/>
        <Footer/>
        
    </div>
    
    
  )
}

export default Home