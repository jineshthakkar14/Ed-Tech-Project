import React from 'react'
import about1 from '../assets/Images/aboutus1.webp'
import about2 from '../assets/Images/aboutus2.webp'
import about3 from '../assets/Images/aboutus3.webp'
import { AboutSection3 } from '../components/core/aboutus/AboutSection3'
import { AboutSection5 } from '../components/core/aboutus/AboutSection5'
import { ContactUsSection } from '../components/core/aboutus/ContactUsSection'

export const AboutUs = () => {
    const Stats = [
        { count: "5K", label: "Active Students" },
        { count: "10+", label: "Mentors" },
        { count: "200+", label: "Courses" },
        { count: "50+", label: "Awards" },
      ];
  return (
    <div className=''>
        {/* section1 */}
        <div className=' bg-richblack-800 h-[538px] pt-[86px] '>
            <div className='w-11/12  flex flex-col items-center justify-center mx-auto'>
                <div className='font-inter text-base font-medium text-richblack-200'>
                    About Us
                </div>
                <div className='w-[809px]'>
                    <div className='flex self-stretch place-items-center text-center mt-[46px] font-inter text-4xl font-semibold leading-[-0.72px] px-[52px] text-richblack-5  mx-auto justify-center'>
                        <p className="">Driving Innovation in Online Education for a <span className='raju'>Brighter Future</span></p>
                    </div>
                    <div className='mt-[18px] flex px-[52px] items-center self-stretch font-inter text-base font-medium text-richblack-300 text-center'>
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about 
                        creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </div>
                </div>
                <div className='flex self-stretch gap-6 mx-auto mt-[52px]'>
                    <img src={about1} alt='isjd'></img>
                    <img src={about2} alt='isjd'></img>
                    <img src={about3} alt='isjd'></img>
                </div>
            </div>
        </div>
        {/* section2 */}
        <div className=' mt-[230px] mx-auto pb-[90px] border-b-[1px] border-b-richblack-700 border-b-[solid]'>
            <div className='w-[1320px] text-center text-richblack-100 font-inter text-4xl font-semibold leading-[-0.72px] mx-auto'>
                <p>We are passionate about revolutionizing the way we learn. Our innovative platform 
                <span className='raju'> combines technology</span>, <span className='aboutg2'>expertise</span>
                , and community to create an 
                <span className='aboutg3'> unparalleled educational experience.</span></p>
            </div>
        </div>
        {/* section3 */}
        <AboutSection3></AboutSection3>
        {/* section4 */}
        <div className='bg-richblack-800 h-[254px] my-[90px]'>
            <div className='flex gap-[10px] w-[1320px] justify-center mx-auto'>
                {
                    Stats.map((data,index)=>{
                        return (
                            <div key={index}  className='w-[293px] h-[74px] mx-auto flex justify-center items-center mt-[90px]'>
                                <div className='flex flex-col gap-3 '>
                                    <div className='flex justify-center font-inter font-bold text-3xl text-richblack-5'>
                                        {data.count}
                                    </div>
                                    <div className='flex justify-center font-inter font-semibold text-base text-richblack-500'>
                                        {data.label}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        {/* setion5 */}
        <div className='mx-auto mt-20 flex w-[1320px] max-w-maxContent flex-col justify-between gap-10 text-white'>
            <AboutSection5></AboutSection5>
            <ContactUsSection></ContactUsSection>
        </div>
        
    </div>
  )
}
