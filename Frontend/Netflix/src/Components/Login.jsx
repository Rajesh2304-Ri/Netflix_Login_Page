import React, { useState } from 'react'
import axios from "axios"
import { FaRegCircleXmark } from "react-icons/fa6";


const Login = () => {


    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [usererror,setUsererror] = useState(true)
    const [passerror,setPasserror] = useState(true)
    

    const handleUser = (evt) => {

        const value = evt.target.value;
        setUser(value)
        setUsererror(value=== "")
        
       
    }
    const handlePass = (evt) => {
         const value = evt.target.value;
        setPass(value)
        setPasserror(value=== "")
    }
    const check = () => {

        var loginDetails = axios.get(`http://localhost:5000/login?Username=${user}&Password=${pass}`)
        loginDetails.then((data) => {
            if (data.data == true) {

                alert("Login Successfull...")
            } else {
                alert("Login Failed...")
            }
        })

    }



    return (

        <div className='flex justify-center absolute top-24 md:left-[35%]   ' style={{ fontFamily: `'Helvetica Neue', 'Arial'` }}>
            <div className='bg-black bg-opacity-70'>
                <div className=' text-white space-y-3 p-14 w-[100%] h-[709px] md:w-[480px]  '>
                    <h1 className='text-3xl font-bold text-white mb-5'>Sign In</h1>
                    <input
                        onChange={handleUser}
                        placeholder='Email or mobile number' type='text' name='Username'
                        className=' p-4 rounded-md bg-gray-700 bg-opacity-60 w-[100%] border border-gray-500' /><br />
                        {
                                usererror &&  <span className='text-red-600 text-md flex items-center gap-1'><FaRegCircleXmark /> <p className='text-[13px] '>Please enter a valid email or Phone number
                         </p></span>
                        }
                        
                  
                    <input
                        onChange={handlePass}
                        type='password' placeholder='Password' name='Password'
                        className='  p-4 rounded-md bg-gray-700 bg-opacity-60 border border-gray-500 w-[100%] ' /><br />
                        {
                        passerror&&<span className='text-red-600 text-md flex items-center gap-1'><FaRegCircleXmark /> <p className='text-[13px] '>Please enter a password </p></span>
                        }
                    <button onClick={check}
                        className='bg-[#E50914] p-2 rounded-md font-semibold w-[100%] cursor-pointer hover:opacity-70' >Sign In</button><br />
                    <p className='text-center text-gray-400 mr-9'>OR</p>
                    <button className='bg-[#3B3836] w-[100%] p-2 rounded-md font-semibold cursor-pointer hover:opacity-70'>Use a Sign-in code</button>
                    <p className='text-center underline cursor-pointer hover:opacity-70'>Forgot password?</p><br />
                    <div className='space-y-4 '>
                        <div className='space-x-2 flex items-center'  >
                            <input type='checkbox' name='Remember me' className='w-4 h-4 accent-white '></input>
                            <label>Remember me</label>
                        </div>
                        <p className='text-gray-300'>New to Netflix?<span className='text-white cursor-pointer'>Sign Up now</span></p>
                        <p className='text-sm text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                        <p className='text-blue-500 text-sm underline cursor-pointer  hover:opacity-70'>Learn more</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login
