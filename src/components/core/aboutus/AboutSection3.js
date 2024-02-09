import React from 'react'
import x from '../../../assets/Images/FoundingStory.png'

export const AboutSection3 = () => {
  return (
    <div className='flex flex-col pt-[90px] gap-[180px] mx-auto'>
        <div className='flex gap-[90px] justify-center items-center mx-auto'>
            <div className='w-[486px] flex flex-col mx-auto'>
                <div className='flex items-start aboutg4'>
                    Our Founding Story
                </div>
                <div className='mt-6 self-stretch font-inter text-base font-medium text-richblack-300  flex items-start'>
                    Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners
                    who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                </div>
                <div className='mt-4 self-stretch font-inter text-base font-medium text-richblack-300  flex items-start'>
                As experienced educators ourselves, we witnessed firsthand the limitations and challenges
                 of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could 
                bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                </div>
            </div>
            <div className='relative p-[32px] w-[470px] h-[278px] z-10'>
                <img alt='nxk' src={x}></img>
                <div className='aboutbgg'></div>
            </div>
        </div>
        <div className='flex gap-[98px] mx-auto'>
            <div className='w-[486px] flex flex-col mx-auto'>
                <div className='flex items-start aboutg5'>
                    Our Vision
                </div>
                <div className='mt-6 self-stretch font-inter text-base font-medium text-richblack-300  flex items-start'>
                    With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust 
                    and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                </div>
            </div>
            <div className='w-[486px] flex flex-col mx-auto'>
                <div className='flex items-start aboutg6'>
                    Our Mission
                </div>
                <div className='mt-6 self-stretch font-inter text-base font-medium text-richblack-300  flex items-start'>
                    Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, 
                    and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </div>
            </div>
        </div>
    </div>
  )
}
