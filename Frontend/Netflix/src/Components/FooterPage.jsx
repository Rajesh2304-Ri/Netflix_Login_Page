import React from 'react'
import { IoLanguageSharp } from "react-icons/io5";

const FooterPage = () => {
  return (
    <div className= 'bg-[#161616] text-gray-400  p-10 absolute top-[115%] mt-1 w-[100%] ' style={{fontFamily:`'Helvetica Neue', 'Arial'`}}>
        <div className=' p-8 max-w-6xl mx-auto text-sm'>
            <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>
            <ul className='mt-5 grid grid-cols-2 gap-6 md:grid-cols-4'>
                <li className='underline'>FAQ</li>
                <li className='underline'>Help Centre</li>
                <li className='underline'>Terms of Use</li>
                <li className='underline'>Privacy</li>
                <li className='underline'>Cookie Preference</li>
                <li className='underline'>Corporate Information</li>
            </ul>
             <div className='border border-gray-500 text-white w-28 h-10 flex justify-center items-center mt-7 '>
                <div><IoLanguageSharp/></div>
                 <select className=' bg-transparent'>
                <option value="English">English</option>
                <option value="hi-in">हिन्दी</option>
            </select>
            </div>
            
        </div>
       
    </div>
  )
}

export default FooterPage