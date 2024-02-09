import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useDispatch, useSelector } from 'react-redux'
import {  AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { apiConnector } from '../../services/apiConnetor'
import { categories } from '../../services/apis'
import { setLoading } from '../../slices/authSlice'
import { logout } from '../../services/operations/authAPI'

// className={isactive?("text-yellow-50"):("text-richblack-5")}

// const categories = [
//    {
//     name:"Web Dev",
//     link:"/webdev"
//    },
//    {
//     name:"Python",
//     link:"/python"
//    }
// ]



export const NavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((state)=>state.profile)
  const {totalItems} = useSelector((state)=>state.cart)

  const [category,setCategory] = useState([])

  function clickHandler(){
    dispatch(logout(navigate))
  }

  

  useEffect(() => {
    ;(async () => {
        setLoading(true)
      try {
        const res = await apiConnector("GET",categories.CATEGORIES_API)

        setCategory(res?.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
  
    })()
  }, [])

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            <div>
                <Link to="/">
                    <img src={logo} alt='dncjnd' height="32px" width="160px" ></img>
                </Link>
                
            </div>
            <div className='flex gap-[34px]'>
                {
                    NavbarLinks.map((data,index)=>{
                        return(
                            <div key={index} className=''>
                                {
                                    data.title==="Catalog" ? 
                                    (<div className='group relative font-inter text-base font-semibold text-richblack-5 flex cursor-pointer items-center gap-1'>
                                        <p>{data.title}</p>
                                        <BsChevronDown />
                                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                            {(category && category.length)?(
                                                <>
                                                {category?.filter(
                                                    (category) => category.courses.length >0
                                                    
                                                )
                                                ?.map((data,index)=>{
                                                    return(
                                                        <Link key={index} to="/" className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50' >
                                                            <p>{data.name}</p>
                                                        </Link>
                                                    )
                                                })}
                                                </>
                                            
                                            ):(<div className=' text-black'>
                                                No Courses Found
                                            </div>)
                                                
                                            }
                                            
                                        </div>
                                    </div>) 
                                    :(
                                        <NavLink to={data.path} className="navbar font-inter text-base font-semibold">
                                            {data.title}
                                        </NavLink>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex gap-4'>
                {user  && user.accountType!=="Instructor" &&(
                    <Link to="/dashboad/cart" className='relative flex items-center'>
                        <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                        {totalItems > 0 && (
                            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                            {totalItems}
                            </span>
                        )}
                    </Link>
                )}

                {
                    token===null &&(
                        <Link className='' to="/login">
                            <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'>
                                Log in
                            </button>

                        </Link>
                    )
                }

                {
                    token===null &&(
                        <Link className='' to="/signup">
                            <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'>
                                Sign up
                            </button>
                        </Link>
                    )
                }

                {
                    token!==null &&(
                        
                        <button  onClick={clickHandler} className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'>
                            Logout
                        </button>
                        
                    )
                }
            </div>

        </div>
        
    </div>
  )
}
