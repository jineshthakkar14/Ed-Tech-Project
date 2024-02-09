import React from 'react'
import { ContactUs } from '../../common/ContactUs'

export const ContactUsSection = () => {
  return (
    <div className='mt-[90px] flex flex-col'> 
        <div className='font-inter text-4xl font-semibold leading-[-0.72px] text-richblack-5 text-center mx-auto'>
            Get in Touch
        </div>
        <div className='mt-3 font-inter text-base font-medium text-richblack-300 text-center mx-auto'>
            We’d love to here for you, Please fill out this form.
        </div>
        <div>
          <ContactUs></ContactUs>
        </div>
    </div>
  )
}
