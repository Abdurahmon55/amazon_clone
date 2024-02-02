import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [ min, setMin ] = useState(false)

  const humburger = () =>{
    setMin(!min)
    
  }
  console.log(min);

  return (
    <div className='bg-zinc-900 text-white  flex items-center justify-between p-2 '>
      <div>
        <ul className='flex gap-5  items-center '>
         <li className="log">
          <img src='' alt="" />
          <h6 className='lg:font-bold lg:text-lg sm:text-sm'>Amazon</h6>
        </li> 
        <li className="state sm:block hidden">
          <span className='sm:text-xs md:font-thin'>Deliver to</span>
          <li>
            <img src='' alt="" />
            <h6 className='lg:font-bold lg:text-lg sm:text-sm'>Uzbekistan</h6>
          </li>
        </li>
        </ul>
      </div>
      <div className="search bg-slate-100 text-gray-400 md:w-[250px] lg:w-[500px] sm:w-48 cursor-pointer rounded-lg xl:block">
        <div className='flex  items-center justify-between'>
          <div className="sm:p-2 rounded-l-lg p-3 bg-slate-200 flex gap-1  hover:bg-slate-300">
            <span className='sm:text-xs md:text-base'>All</span>
            <i className='sm:text-xs md:text-base'>do</i></div>
          <input className='bg-slate-100 sm:w-24 md:w-full  sm:text-xs md:text-base' type="text" placeholder='Search Amazon' />
          <div className="sm:p-2 p-3 rounded-r-lg bg-orange-200 flex gap-1 hover:bg-slate-300">
            <i className='sm:text-xs md:text-base'>do</i></div>
        </div>
      </div>
      <div className=''>
        <ul className={`info md:gap-5  sm:flex sm:items-center sm:static p-2 rounded-b-lg absolute bg-zinc-900 ${min ? 'right-0' : 'right-[-200px]'} top-16`}>
          <li className='cursor-pointer flex hover:bg-slate-700 px-1 rounded-lg'>
            <h6 className='lg:font-bold lg:text-lg sm:text-sm'>EN</h6>
            <ion-icon name="arrow-dropdown"></ion-icon>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            <span className='sm:text-xs sm:font-thin'>Hello, sing in</span>
            <h6 className='lg:font-bold lg:text-lg sm:text-sm'>Account & Lists</h6>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            <span className='sm:text-xs sm:font-thin'>Returns</span>
            <h6 className='lg:font-bold lg:text-lg sm:text-sm'>& Orders</h6>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg '>
            <i className='text-3xl hover:text-sky-800'><ion-icon name="cart"></ion-icon></i>
          </li>
        </ul>
        <button onClick={humburger} className='sm:hidden text-3xl hover:text-sky-800 hover:text-4xl'>
          {!min ? <ion-icon name="reorder"></ion-icon> : <ion-icon name="close"></ion-icon> }
        </button>
        
      </div>
    </div>
  )
}

export default Navbar



