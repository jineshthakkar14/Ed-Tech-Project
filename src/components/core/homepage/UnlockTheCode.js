import React, {  useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore'
import { CourseCard } from './CourseCard'

const tabName= [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",

]


export const UnlockTheCode = () => {

    const [currentTab, setCurrentTab] = useState(tabName[0])
    const [courses, setCourses] = useState(HomePageExplore[0].courses)
    const [card, setCard] = useState(HomePageExplore[0].courses[0].heading)
    

    const setMycards = (value)=>{
        setCurrentTab(value)
        const result = HomePageExplore.filter((course)=>course.tag===value)
        setCourses(result[0].courses)
        setCard(result[0].courses[0].heading)
    }

  return (
    <div className='relative w-[1440px] pt-[90px] px-[120] mx-auto flex flex-col gap-[58px]'>

        <div className='w-[100%] flex flex-col mt-[36px] gap-[8px]'>
         <div className='self-stretch text-richblack-5 text-center font-inter text-[36px] not-italic font-semibold leading-[44px] tracking-[-0.72px] '>
            Unlock The <span className='raju'>Power of Code</span>
         </div>
         <div className='self-stretch text-richblack-300 items-center text-base font-medium text-center'>
            Learn to Build Anything You Can Imagine
         </div>
        </div>

        <div className='className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]'>
            {tabName.map((element,index)=>{
                return(
                    <div
                         className={` text-[16px] flex flex-row items-center gap-2 ${
                            currentTab === element
                            ? "bg-richblack-900 text-richblack-5 font-medium"
                            : "text-richblack-200"
                            } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
                            key={index}
                            onClick={()=>setMycards(element)}
                    >
                        {element}
                    </div>
                )
            })}
        </div>

        <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[130%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
            {courses.map((element,index)=>{
                return(
                    <CourseCard key={index} element={element} card={card} setCard={setCard}></CourseCard>
                )
            })}
        </div>


    </div>
  )
}

