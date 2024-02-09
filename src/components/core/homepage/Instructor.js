import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import { Button } from './Button'
import { FaArrowRight } from "react-icons/fa"

export const Instructor = () => {
  return (
    <div className=' flex w-[1440px] py-[90px] px-[120px] justify-center items-center gap-[98px] mx-auto' >
        <div className='h-[545px] instructor'>
            <img src={instructor} alt='cbjdcj'></img>
        </div>
        <div className='flex flex-col items-start gap-3 '>
            <div className=' self-stretch text-richblack-5 font-inter text-[36px] not-italic font-semibold leading-[44px] tracking-[-0.72px]'>
                Become an 
                <p className='raju'>instructor</p>
            </div>
            <div className='self-stretch text-richblack-300 items-center text-base font-medium w-[486px]'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you <br></br> love.
            </div>
            <div className='pt-[52px]'>
                <Button active={true} linkto={"/signup"}>
                    <div className='flex items-center gap-[10px]' >
                        Start Teaching Today
                        <FaArrowRight className=' w-4 h-4'></FaArrowRight>
                    </div>
                </Button>
            </div>
            
        </div>
    </div>
  )
}
