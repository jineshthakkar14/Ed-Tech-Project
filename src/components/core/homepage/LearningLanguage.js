import React from 'react'
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";
import { Button } from './Button';

export const LearningLanguage = () => {
  return (
    <div className='flex px-[120px] py-[90px] bg-[var(--Pure-Greys-5,_#F9F9F9)] flex-col justify-center gap-[52px] items-center'>
        <div className='w-[1200px] px-[220px] flex flex-col gap-3'>
            <div className='text-center font-inter text-4xl font-semibold text-richblack-900 self-stretch'> 
                Your swiss knife for <span className='raju'>learning any language</span>
            </div>
            <div className=' text-base text-richblack-700 font-medium text-center'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>
        </div>
        <div className='w-[500px] h-[469px] flex justify-center items-center mx-auto'>
            <img src={Know_your_progress} alt="dnjnd" className='translate-x-32 -translate-y-5 z-10'></img>
            <img src={Compare_with_others} alt="dnjnd" className='z-20' ></img>
            <img src={Plan_your_lessons} alt="dnjnd" className=' -translate-x-36 -translate-y-5 z-30'></img>
        </div>
        <div className=' pt-9 mx-auto'>
         <Button linkto={"/signup"} active={true}>
            Learn More
         </Button>
        </div>
    </div>
  )
}
