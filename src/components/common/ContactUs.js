import React from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from '../../data/countrycode.json'

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  return (
    <form className='w-[536px] mx-auto mt-[64px]'>
      <div className='flex gap-x-4'>
        <label className='w-full' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Firstname
              <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            type='text' 
            placeholder='Enter first name' 
            name='firstname' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("firstname",{required:true})}></input>
        </label>

        <label className='w-full' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Lastname
              <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            type='text' 
            placeholder='Lastname' 
            name='lastname' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("lastname",{required:true})}></input>
        </label>
      </div>

      <label className='"w-full' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 mt-[20px] leading-[1.375rem]'>
              Email Address
              <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            type='text' 
            placeholder='Enter Your email' 
            name='email' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("email",{required:true})}></input>
        </label>

        <label className='"w-full' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 mt-[20px] leading-[1.375rem]'>
              Phone Number
              <sup className='text-pink-200'>*</sup>
          </p>
          <select type="text"
            name="phonenumber"
            id="phonenumber" 
            placeholder="Enter first name"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 ">
              {CountryCode.map((ele, i) => {
                  return (
                    <option key={i} value={ele.code}>
                      {ele.code} -{ele.country}
                    </option>
                  )
                })}
          </select>
          <input 
            type='text' 
            placeholder='Enter Your email' 
            name='email' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("email",{required:true})}></input>
        </label>


        <label className='w-full mt-[20px]' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 mt-[36px] leading-[1.375rem]'>
              Message
              <sup className='text-pink-200'>*</sup>
          </p>
          <textarea 
             
            placeholder='Enter your message here' 
            name='message' cols="30" rows="7" className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("message",{required:true})}></textarea>
        </label>
        <div className='mt-9'>
          <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>Send Message</button>
        </div>
    </form>
  )
}
