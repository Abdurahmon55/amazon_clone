import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterCart from './FooterCart'
import { AmazonPaymentProducts, GettoKnowUs, LetUsHelpYou, MakeMoneywithUs } from './footerData'

function Footer() {
    
  return (
    <div className='n relative'>
        <div className='flex flex-col items-center border-t-2 border-b-2 mb-10 absolute top-[-130px] p-5 w-full'>
            <span className='text-sm'>See personalized recommendations</span>
            <button className='b bg-amber-400 w-52 rounded-md shadow-md border-2 border-amber-300 cursor-pointer font-bold'>Sign in</button>
            <span className='text-sm'>New customer? <span className='text-sm  text-lime-400 hover:text-red-800 hover:underline  cursor-pointer'> Start here.</span></span>
        </div>
        <div className='bg-gray-800 hover:bg-gray-700 cursor-pointer'>
            <a href='/' className='text-white flex justify-center p-4'>Back to top</a>
        </div>
        <div className='bg-gray-900 pt-10 pl-4 pb-4 grid lg:grid-cols-4 grid-cols-2 gap-8'>
            <ul className='flex flex-col gap-2'>
              <h2 className='text-white font-bold'>Get to Know Us</h2>
            {GettoKnowUs.map((item)=>(
                <FooterCart key={item.id}{...item}/>
            ))}  
            </ul>
            <ul className='flex flex-col gap-2'>
              <h2 className='text-white font-bold'>Make Money with Us</h2>
            {MakeMoneywithUs.map((item)=>(
                <FooterCart key={item.id}{...item}/>
            ))}  
            </ul>
            <ul className='flex flex-col gap-2'>
              <h2 className='text-white font-bold'>	
Amazon Payment Products</h2>
            {AmazonPaymentProducts.map((item)=>(
                <FooterCart key={item.id}{...item}/>
            ))}  
            </ul>
            <ul className='flex flex-col gap-2'>
              <h2 className='text-white font-bold'>	
Let Us Help You</h2>
            {LetUsHelpYou.map((item)=>(
                <FooterCart key={item.id}{...item}/>
            ))}  
            </ul>
        </div>
    </div>
  )
}

export default Footer