import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({linkto,active,children}) => {
  return (
    <div>
        <Link to={linkto}>
            <button className={`text-center px-6 py-3 rounded-md font-bold font-inter shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
                active?"bg-yellow-50 text-richblack-800 ":"bg-richblack-800 text-richblack-5"
            } hover:shadow-none hover:scale-95 transition-all duration-200`}>
                {children}
            </button>
        </Link>
        
    </div>
  )
}
