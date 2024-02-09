import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Button } from '../components/core/homepage/Button'
import Banner from '../assets/Images/banner.mp4'
import { CodeBlocks } from '../components/core/homepage/CodeBlocks'
import { Link } from 'react-router-dom'
import { UnlockTheCode } from '../components/core/homepage/UnlockTheCode'
import { GetSkills } from '../components/core/homepage/GetSkills'
import { LearningLanguage } from '../components/core/homepage/LearningLanguage'
import { Instructor } from '../components/core/homepage/Instructor'
import { Footer } from '../components/common/Footer'

export const Home = () => {
  return (
    <div className=' w-full h-full'>

      {/* section1 */}

      <div className='flex flex-col gap-[38px] items-center w-[913px] h-[276px] mt-[68px] mx-auto'>
        <Link to={"/signup"}>
          <div className='flex w-[235px] h-[44px] p-1 gap-[5px] rounded-[500px] text-center items-center bg-richblack-800' style={{boxShadow:' 0px -1px 0px 0px rgba(255, 255, 255, 0.18) inset'}}>
            <div className=' text-richblack-200 text-center font-inter text-[16px] font-medium leading-[24px] flex items-center gap-[10px] justify-center mx-auto not-italic'>
              Become an Instructor
              <FaArrowRight className=' w-4 h-4'></FaArrowRight>
            </div>
          </div>
        </Link>
        

        <div className='flex flex-col gap-[16px]'>
          <div className='w-[100%] h-[44px] self-stretch text-richblack-5 text-center font-inter text-[36px] not-italic font-semibold leading-[44px] tracking-[-0.72px] '>
            <p>
            Empower Your Future with
            <span className='raju'> Coding Skills</span>
            </p>
          </div>
          <div className='flex flex-row w-[100%] h-[44px] self-stretch text-richblack-300 items-center text-base font-medium text-center '>
            With our online coding courses, you can learn at your own pace, 
            from anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from instructors. 
          </div>
        </div>

        <div className='flex gap-4 w-[308px] h-[48px] mx-auto'>
          <Button active={true}  linkto={"/signup"}>
            Learn More
          </Button>
          <Button active={false}  linkto={"/login"}>
            Book a Demo
          </Button>
        </div>

      </div>

      {/* section2 */}

      <div className='mx-3 mt-[58px] tex-center  flex justify-center w-full h-fit'>
        <div className='shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
          <video className='shadow-[20px_20px_rgba(255,255,255)]   '
            muted
            loop
            autoPlay
            width="1030px"
            height="515px"
          >
            <source src={Banner}  />
          </video>
        </div>
        
      </div>

      {/* section3 */}

      <div>
        <CodeBlocks

          position={"flex-row"}

          heading={
            <div className='w-[486px] h-[88px] text-richblack-5 font-inter text-[36px] leading-[44px] tracking-[-0.72px]'>
              <p>
                Unlock your <span className='raju'>coding potential </span>with our online courses.
              </p>
            </div>
          }

          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

          btn1={
            <Button active={true} linkto={"/signup"}  name="Try it yourself">
              <div className='flex items-center gap-2'>
                Try it yourself
                <FaArrowRight className=' w-4 h-4'></FaArrowRight>
              </div>
              
            </Button>
          }

          btn2={
            <Button active={false} linkto={"/signup"} name="Learn More">
              Learn More
            </Button>
          }

          backgroundGradient={
            <div className='absolute codeblock1 opacity-[15%]'></div>
          }

          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a><a href="/three">Three</a>\n</nav>\n</body>`}

          

        />


      </div>

      {/* section4 */}

      <div>
        <CodeBlocks

          position={"flex-row-reverse"}

          heading={
            <div className='w-[486px] h-[88px] text-richblack-5 font-inter text-[36px] leading-[44px] tracking-[-0.72px]'>
              <p>
                Start <span className='raju'>coding in seconds.</span>
              </p>
            </div>
          }

          subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}

          btn1={
            <Button active={true} linkto={"/signup"}  name="Try it yourself">
              <div className='flex items-center gap-2'>
                Continue Lesson
                <FaArrowRight className=' w-4 h-4'></FaArrowRight>
              </div>
              
            </Button>
          }

          btn2={
            <Button active={false} linkto={"/signup"} name="Learn More">
              Learn More
            </Button>
          }

          backgroundGradient={
            <div className='absolute codeblock2 opacity-[15%]'></div>
          }

          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a><a href="/three">Three</a>\n</nav>\n</body>`}

          

        />


      </div>

      <div className='mb-[320px]'>
        <UnlockTheCode></UnlockTheCode>
      </div>
      
      <div className='bg-[var(--Pure-Greys-5,_#F9F9F9)]'>

        <div className='image h-[300px]'>
          <div className='flex gap-[24px] translate-x-[40%] translate-y-[300%]'>
            <Button linkto={"/signup"} active="true">
              <div className='flex items-center gap-2'>
                Explore Full Catalog
                <FaArrowRight className=' w-4 h-4'></FaArrowRight>
              </div>
            </Button>
            <Button linkto={"/signup"} active={false}>
              <div className=''>
                Learn More
              </div>
            </Button>
          </div>
        </div>

        <GetSkills>

        </GetSkills>

        <LearningLanguage></LearningLanguage>


      </div>

      <Instructor></Instructor>

      <div className='flex w-[1440px] h-[460px] py-[90px] px-[120px] justify-center items-center mx-auto text-white text-5xl'>
          Reviews from other learners
      </div>

      <Footer></Footer>

    </div>
  )
}
