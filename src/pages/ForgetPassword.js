import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswordToken } from '../services/operations/authAPI';
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {

    const dispatch = useDispatch(); 
    const {loading} = useSelector((state)=>state.auth)

    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    function changeHandler(e){
        setEmail(e.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        dispatch(resetPasswordToken(email,setEmailSent))
    }

    

    
    
  return (
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
        {
            loading?(
                <div className=' text-richblack-5'>Loading....</div>
            ):(
                <div className='max-w-[500px] p-4 lg:p-8'>
                    <div className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                        {!emailSent?("Reset your password"):("Check email")}
                    </div>
                    <div className='text-[1.125rem] mt-4 leading-[1.625rem] text-richblack-100'>
                        {!emailSent?
                        ("Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery")
                        :(`We have sent the reset email to If you dont have access to your email we can try account recovery ${email}`)}
                    </div>
                    <form onSubmit={submitHandler} className='mt-[20px]'>
                        {!emailSent && (
                        <label className='w-full '>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                                Email Address
                                <sup className='text-pink-200'>*</sup>
                            </p>
                            <input type='email' required placeholder='Enter your Email' value={email} onChange={changeHandler} name='email' className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'></input>
                        </label>)}

                        <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>
                            {!emailSent?("Sumbit"):("Resend Email")}
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
                
            )
        }
    </div>
  )
}
