import React from 'react'
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

export const CourseCard = ({element,card,setCard}) => {

  return (
   
    <div
      className={`w-[360px] lg:w-[30%] ${
        card === element?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCard(element?.heading)}
    >
        <div className='className="flex gap-[100px] border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3"'>
            <div className='flex flex-col gap-4'>
                <div
                    className={` ${
                    card === element?.heading && "text-richblack-800"
                    } font-semibold text-[20px]`}
                >
                    {element.heading}
                </div>

                <div className="text-richblack-400">
                    {element.description}
                </div>
            </div>

            <div  className={`flex justify-between ${
                            card === element?.heading ? "text-blue-300" : "text-richblack-300"
                            } px-6 py-3 font-medium`}>
                <div className="flex items-center gap-2 text-[16px]">
                    <HiUsers />
                    <div>
                        {element.level}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[16px]">
                    <ImTree />
                    <div >
                        {element.lessionNumber}
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
