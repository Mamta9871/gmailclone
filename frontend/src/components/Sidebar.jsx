import React from 'react'
import {LuPencil} from 'react-icons/lu';
import { CgInbox } from "react-icons/cg";
import { IoMdStar } from 'react-icons/io';
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md';
import { TbSend2 } from 'react-icons/tb';
import { BsChatSquareText } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';


const SidebarItems = [
  {
    icon:<CgInbox size={'20px'}/>,
    text:"Inbox"
  },
  {
    icon:<IoMdStar size={'20px'}/>,
    text:"Starred"
  },
  {
    icon:<MdOutlineWatchLater size={'20px'}/>,
    text:"Snoozed"
  },
  {
    icon:<BsChatSquareText size={'20px'}/>,
    text:"Chats"
  },
  {
    icon:<TbSend2 size={'20px'}/>,
    text:"Sent"
  },
  {
    icon:<MdOutlineDrafts size={'20px'}/>,
    text:"Drafts"
  },
  {
    icon:<MdOutlineKeyboardArrowDown size={'20px'}/>,
    text:"More"
  },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-[15%]'>
        <div className='p-3'>
         <button onClick={()=> dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
            <LuPencil size="24px"/>
            Compose
         </button>
        </div>
        <div className='text-gray-600'>
          {
            SidebarItems.map((item,inbox)=>{
              return(
                <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
                  {item.icon}
                  <p>{item.text}</p>
               </div>
              )
            })
          }
          
        </div>
    </div>
  )
}

export default Sidebar