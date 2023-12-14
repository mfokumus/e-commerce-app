import React from 'react'
// Icons are imported  (react-icons)
import { BiSearch } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";


const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
        <div className='flex items-center border p-3 rounded-full bg-gray-200'>
            <input className='bg-gray-200 outline-none' type='text' placeholder='Arama yapınız...'></input>
            <BiSearch size={28}/>
        </div>
        <IoMdHeartEmpty size={28}/>
        <div className="relative">
            <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
            <SlBasket size={28}/>
        </div>
    </div>
  )
}

export default NavbarRight