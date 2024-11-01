import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../redux/appSlice';



const Navbar = () => {
  const [text,setText] = useState("")
  const {user} = useSelector(store => store.app)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchText(text))
  },[text])
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
            <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'><RxHamburgerMenu /></div>
            <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="logo" />
            <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>
      </div>
      {
        user && (
          <>
          <div className='w-[50%] mr-60'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
            <IoIosSearch size={'24px'} className='text-gray-700'/>
          <input className='rounded-full w-full bg-transparent outline-none px-1' type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search mail' />
        </div>
      </div>
        <div className='flex items-center gap-4'>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <FaRegQuestionCircle size={'24px'}/>
            </div>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <MdOutlineSettings size={'24px'}/>
            </div>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <TbGridDots size={'24px'}/>
            </div>
            <div>
                <Avatar src={user.profilePhoto} size="40" round={true} />
            </div>
        </div>
          </>
        )
      }
      
    </div>
  )
}

export default Navbar