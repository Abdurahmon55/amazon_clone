import React from 'react'

function MinNav() {
  return (
    <div className='bg-slate-800'>
        <ul className='text-white flex gap-5 items-center'>
            <li className='flex items-center gap-1 hover:border rounded-sm px-2'>
                <i className='text-3xl'><ion-icon name="reorder"></ion-icon></i>
                <span>All</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Today's Deals</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Custeimer Service</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Registry</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Gift Cards</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Registry</span>
            </li>
            <li className='hover:border rounded-sm px-2 py-1 cursor-pointer'>
                <span>Sell</span>
            </li>
        </ul>
    </div>
  )
}

export default MinNav