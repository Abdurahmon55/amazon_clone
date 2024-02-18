import React from 'react'
import { Link } from 'react-router-dom';
import useToggol from '../hooks/useToggol';
import Modal from './Modal';

function MinNav() {
    const [toggol, setToggol]=useToggol()
    
    return (
        <div className='bg-slate-800'>
            <ul className='text-white flex md:gap-5 items-center'>
                <li  className='flex items-center gap-1 cursor-pointer  rounded-sm px-2 md:text-base text-xs'>
                    <i onClick={setToggol} className='text-base md:text-3xl pt-1 hover:text-blue-800'>{!toggol ? <ion-icon name="reorder"></ion-icon> : <ion-icon name="close"></ion-icon>}</i>
                    <span>All</span>
                    <div className={`${! toggol ? 'hidden' : null}`}>
                      <Modal/>  
                    </div>
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
                    <span>Sell</span>
                </li>
            </ul>
        </div>
    )
}

export default MinNav