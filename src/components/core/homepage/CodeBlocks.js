import React from 'react'
import { TypeAnimation } from "react-type-animation";

export const CodeBlocks = ({heading,subheading,btn1,btn2,codeblock,backgroundGradient,position}) => {
  return (
    <div className={`flex ${position} w-[1440px] py-[130px] px-[120px] gap-[98px] mx-auto items-center justify-center`}>

        <div className='flex flex-col w-[486px] h-[284px] items-start gap-[12px] shrink-0'>
            <div>
                {heading}
            </div>
            <div className='w-[486px] h-[72px] font-inter text-base font-medium text-richblack-300 '>
                {subheading}
            </div>
            <div className='flex p-[32px] items-start gap-6'>
                {btn1}
                {btn2}
            </div>
        </div>

        <div className='relative w-[470px] h-[278px]  flex gap-[8px] self-stretch code-border'>
            {backgroundGradient}
            <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold ">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div
                className={`w-[90%] flex flex-col gap-2 font-bold font-mono text-richblack-5 pr-1`}>
                <TypeAnimation
                    sequence={[codeblock, 1000, ""]}
                    cursor={true}
                    repeat={Infinity}
                    style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    }}
                    omitDeletionAnimation={true}
                />
            </div>
        </div>
    </div>
  )
}
