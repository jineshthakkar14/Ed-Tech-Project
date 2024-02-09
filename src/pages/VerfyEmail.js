import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi"
import { RxCountdownTimer } from "react-icons/rx";
import { sendOtp, signup } from '../services/operations/authAPI';

export const VerfyEmail = () => {
    const {loading} = useSelector((state)=>state.auth)
    const {signUpData} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [otp, setOtp] = useState("")

    const {firstName,lastName,email,password,confirmPassword,accountType}=signUpData

    useEffect(() => {
        // Only allow access of this route when user has filled the signup form
        if (!signUpData) {
          navigate("/signup");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    function clickHandler(){
        dispatch(sendOtp(email,navigate))
    }

    function submitHandler(event){
        event.preventDefault();
        dispatch(signup(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate))
    }
  return (
    
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
        {
            loading?(
                <div className=' text-richblack-5'>Loading....</div>
                ):(
                    <div className='max-w-[500px] p-4 lg:p-8'>
                        <div className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                            Verify Email
                        </div>
                        <div className='text-[1.125rem] mt-4 leading-[1.625rem] text-richblack-100'>
                            A verification code has been sent to you. Enter the code below
                        </div>
                        <form className='flex flex-col gap-4 pt-5' onSubmit={submitHandler}>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => (
                                <input
                                {...props}
                                placeholder="-"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-[48px] lg:w-[60px] mx-1 border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                                />
                            )}

                        />
                        <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>
                            Verify Email
                        </button>
                        </form>
                        <div className='flex items-center justify-between'>
                            <div className="mt-6 flex items-center justify-between">
                                <Link to="/login">
                                <p className="flex items-center gap-x-2 text-richblack-5">
                                    <BiArrowBack /> Back To Login
                                </p>
                                </Link>
                            </div>
                            <button className="flex mt-6 items-center text-blue-100 gap-x-2" onClick={clickHandler}>
                                <RxCountdownTimer />
                                Resend it
                            </button>
                        </div>
                    </div>
                )
        }
    </div>
  )
}
