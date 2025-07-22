import React from 'react'
import bgImage from '../assets/BgImage.jpg'
import Login from './Login'
import FooterPage from './FooterPage'




const HeaderPage = () => {
  return (
    
    <div className=' bg-cover bg-no-repeat bg-center relative h-[1160px] ' style={{ backgroundImage: `url(${bgImage})`}}>
      <div className='  inset-0 bg-black opacity-50 h-[1160px]'>
       </div>
    
       <div className="absolute   h-full top-4 md:left-44" style={{fontFamily:`'Netflix Sans','Helvetica Neue','Segoe UI','Roboto','Ubuntu','sans-serif'`}}>
        <h1 className=" text-6xl text-[#E50914] font-netflix tracking-wider z-10" >NETFLIX</h1>
      </div>
      <div>
      <Login/>
      </div>
     
      
     
 </div>
  )
}

export default HeaderPage