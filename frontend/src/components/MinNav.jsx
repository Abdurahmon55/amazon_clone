import React from 'react'

function MinNav() {
  return (
    <div className='bg-slate-800'>
        <ul className='text-white flex md:gap-5 items-center'>
            <li className='flex items-center gap-1 hover:border rounded-sm px-2 md:text-base text-xs'>
                <i className='text-base md:text-3xl pt-1'><ion-icon name="reorder"></ion-icon></i>
                <span>All</span>
            </li>
            <li className='hover:border rounded-sm px-2   cursor-pointer md:text-base text-xs'>
                <span>Today's Deals</span>
            </li>
            <li className='hover:border rounded-sm px-2  cursor-pointer md:text-base text-xs'>
                <span>Custeimer Service</span>
            </li>
            <li className='hover:border rounded-sm px-2  cursor-pointer md:text-base text-xs'>
                <span>Registry</span>
            </li>
            <li className='hover:border rounded-sm px-2  cursor-pointer md:text-base text-xs'>
                <span>Gift Cards</span>
            </li>
            <li className='hover:border rounded-sm px-2  cursor-pointer md:text-base text-xs'>
                <span>Registry</span>
            </li>
            <li className='hover:border rounded-sm px-2  cursor-pointer md:text-base text-xs'>
                <span>Sell</span>
            </li>
        </ul>
    </div>
  )
}

export default MinNav