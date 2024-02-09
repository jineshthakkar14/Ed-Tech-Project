import React from 'react'
import { Button } from '../homepage/Button';

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];
  

export const AboutSection5 = () => {
  return (
    <div className='grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-[90px]'>
        {
            LearningGridArray.map((data,i)=>{
                return (
                    <div  key={i}
                        className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
                        data.order % 2 === 1
                            ? "bg-richblack-700 h-[294px]"
                            : data.order % 2 === 0
                            ? "bg-richblack-800 h-[294px]"
                            : "bg-transparent"
                        } ${data.order === 3 && "xl:col-start-2"}  `}
                    >
                        {
                            data.order<0?(
                                <div>
                                    <div className='font-inter text-4xl font-semibold leading-[-0.72px] text-richblack-5 '>
                                        <p>{data.heading}<span className='raju'>{data.highlightText}</span></p>
                                    </div>
                                    <div className='font-inter text-base font-medium text-richblack-300 mt-3 mb-12'>
                                        {data.description}
                                    </div>
                                    <Button linkto={data.BtnLink} active={true} >
                                        {data.BtnText}
                                    </Button>
                                </div>
                            ):(
                            <div className='flex flex-col gap-8 p-10 '>
                                <div className='w-fit font-inter text-lg font-semibold text-richblack-5'>
                                    {data.heading}
                                </div>
                                <div className='font-inter text-sm font-normal text-richblack-100'>
                                    {data.description}
                                </div>
                            </div>)
                        }
                    </div>
                )
            })
        }
    </div>
  )
}
