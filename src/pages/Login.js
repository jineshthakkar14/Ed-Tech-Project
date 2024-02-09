import React, { useState } from 'react'

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../assets/Images/frame.png'
import img2 from "../assets/Images/login.webp"
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/authAPI';

export const Login = () => {

    let navigate=useNavigate();
    const dispatch = useDispatch();
    const [showPassword,setShowPassword]=useState(false) 

    const [values,setValues] = useState({
        email : "", password : "" 
    })

    function changeHandler(event){
        setValues(
            
            (prev) => {
                return{
                    ...prev,
                    [event.target.name]: event.target.value
                }
            }     
            
        );
    }

    function submitHandler(event){

        event.preventDefault();

        dispatch(login(values.email,values.password,navigate))

        console.log(values)


    }

    

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between mt-[100px]'>
        <div className='w-11/12 max-w-[450px] mx-0 text-white '>
            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                Welcome Back
            </h1>
            <p className=' text-[1.125rem] mt-4 leading-[1.625rem] text-richblack-100'>
                Build skills for today, tomorrow, and beyond.
            </p>
            <p className=' text-[1.125rem] leading-[1.625rem] text-blue-100 italic font-edu-sa'>
                Education to future-proof your career.
            </p>

            <form className=' flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem'>
                        Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input type='email' required placeholder='Enter your Email' value={values.email} onChange={changeHandler} name='email' className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'></input>
                </label>


                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem'>
                        Password
                        <sup className='text-pink-200'>*</sup>
                    </p> 
                    <input type={showPassword?"text":"password"} placeholder='Enter Your Password' value={values.password}  name='password' required  onChange={changeHandler} className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'></input>
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                        setShowPassword(!showPassword)
                    }}>{showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>:<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>}</span>

                    <Link to="/forget-password" className='text-xs mt-1 text-blue-100 max-w-max ml-[356px]'>Forgot Password</Link>
                </label>
                <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>Sign In</button>
            </form>

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'>

                </div>
                <span className='text-richblack-700 font-medium leading-[1.375rem]'>OR</span>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>

            <div >
                
                <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle></FcGoogle>
                Sign in with Google</button>
            </div>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
                <img src={img1} alt='isnij' width={558}
                    height={504}
                    loading="lazy"></img>
                <img src={img2} alt='dijnke' width={558}
                    height={504}
                    loading="lazy"
                    className="absolute -top-4 right-4 "
                    >
                </img>
        </div>

    </div>
  )
}
