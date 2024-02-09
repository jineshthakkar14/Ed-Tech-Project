import React from 'react'
import { Button } from './Button'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import image from "../../../assets/Images/TimelineImage.png";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


export const GetSkills = () => {
  return (
    <div className='flex flex-col gap-[52px] w-[1440] py-[90px] px-[120px] bg-[var(--Pure-Greys-5,_#F9F9F9)]'>

        <div className='flex items-start self-stretch gap-[50px] mx-auto w-[1200px]'>
            <div className='self-stretch text-richblack-900 font-inter text-[36px] not-italic font-semibold leading-[44px] tracking-[-0.72px] flex-[1_0_0] mx-auto'>
             Get the skills you need for a <span className='raju'>job that is in demand.</span>
            </div>
            <div className=' flex flex-col gap-3 items-start flex-[1_0_0] mx-auto'>
                <div className='font-inter w-[594px] text-base font-medium pr-[30px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
                <div className='pt-[36px]'>
                    <Button linkto={"/signup"} active={true}>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        <div className='relative flex items-center gap-[76px] self-stretch mx-auto z-10'>
            <div className=' w-[410px] flex flex-col gap-8 items-center justify-center'>
                {
                    TimeLine.map((element,index)=>{
                        return(
                            <div className='relative flex gap-[24px]' key={index}>
                                <div  className=' px-[12px] py-4 flex gap-6'>
                                    <div className=' rounded-full flex justify-center items-center '>
                                        <img src={element.Logo} alt='dnjnd '></img>
                                        <div className='absolute bg-richblack-100 w-[1px] h-[42px] top-[50px]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className='w-[310px] font-inter font-semibold text-lg text-richblack-800'>
                                        {element.Heading}
                                    </div>
                                    <div className='w-[310px] font-inter text-sm font-normal text-richblue-700 '>
                                        {element.Description}
                                    </div>
                                </div>

                               
                            </div>
                        )
                    })
                }
            </div>
            <div className='relative h-[545px] '>
                <div className='[box-shadow:20px_20px_0px_0px_#FFF]'>
                    <div className='timeline'></div>
                    <img src={image} alt='dnic'></img>
                </div>
                <div className='absolute flex p-[42px] items-start gap-[52px] bg-[var(--Caribbean-Green-700,_#014A32)] w-[511px] -bottom-[50px] right-[101px]'>
                    <div className='flex gap-6 items-center'>
                        <div className=' font-inter text-4xl font-bold text-white'>
                            10
                        </div>
                        <div className=' font-inter text-sm font-medium text-caribbeangreen-300'>
                            YEARS EXPERIENCES
                        </div>
                    </div>
                    <div className='absolute bg-caribbeangreen-500 w-[1px] h-[44px] mx-[40%]'>
                        
                    </div>
                    

                    <div className='flex gap-6 items-center'>
                        <div className=' font-inter text-4xl font-bold text-white'>
                            250
                        </div>
                        <div className=' font-inter text-sm font-medium text-caribbeangreen-300'>
                            TYPES OF COURSES
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


    </div>
  )
}
