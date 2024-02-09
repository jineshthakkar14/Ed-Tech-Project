import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';


export const UpdatePassword = () => {


    const dispatch = useDispatch()
    const location = useLocation();
    const {loading} = useSelector((state)=>state.auth)
    const [values,setValues]=useState({
        confirmPassword:"",createPassword:""
      })

    const [showPassword1,setShowPassword1]=useState(false);
    const [showPassword2,setShowPassword2]=useState(false);

    function changeHandler(event){
        setValues(
          (props)=>{
            return({
              ...props,[event.target.name]:event.target.value
            })
          }
        )
      }

    function submitHandler(event){
        event.preventDefault();
        const token = location.pathname.split("/").at(-1)
        dispatch(resetPassword(values.createPassword,values.confirmPassword,token))
    }
  return (
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
     {loading?(
                <div className=' text-richblack-5'>Loading....</div>
            ):
         (
                <div className='max-w-[500px] p-4 lg:p-8'>
                    <div className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                        Choose  new password
                    </div>
                    <div className='text-[1.125rem] mt-4 leading-[1.625rem] text-richblack-100'>
                        Almost done. Enter your new password and youre all set.
                    </div>
                    <form className='flex flex-col gap-4 pt-5' onSubmit={submitHandler} >
                    <div className='flex flex-col gap-4 '>
                        <label className='"w-full relative' >
                                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                                    New Password
                                    <sup className='text-pink-200'>*</sup>
                                </p>
                                <input type={showPassword1?"text":"password"} required placeholder='Enter Password' value={values.createPassword} onChange={changeHandler} name='createPassword' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                                <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>{
                                setShowPassword1(!showPassword1)
                                }}>{showPassword1?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>:<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>}</span>
                        </label>
                        <label className='"w-full relative' >
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                                Confirm New Password
                                <sup className='text-pink-200'>*</sup>
                            </p>
                            <input type={showPassword2?"text":"password"} required placeholder='Confirm Password' value={values.confirmPassword} onChange={changeHandler} name='confirmPassword' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                            <span className='absolute right-3 top-[38px] cursor-pointer z-10' onClick={()=>{
                                setShowPassword2(!showPassword2)
                                }}>{showPassword2?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>:<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>}</span>
                        </label>
                        </div>
                        <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>
                            Reset Password
                        </button>

                    </form>
                    <div className="mt-6 flex items-center justify-between">
                        <Link to="/login">
                        <p className="flex items-center gap-x-2 text-richblack-5">
                            <BiArrowBack /> Back To Login
                        </p>
                        </Link>
                    </div>
                </div>

            )}
    </div>
  )
}
