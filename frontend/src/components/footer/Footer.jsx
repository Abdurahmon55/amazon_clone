import React from 'react'
import { Link } from 'react-router-dom'
import FooterCart from './FooterCart'
import { AmazonPaymentProducts, GettoKnowUs, LetUsHelpYou, MakeMoneywithUs } from './footerData'

function Footer() {
    
  return (
    <div className=''>
        <div className='bg-gray-800 hover:bg-gray-700 cursor-pointer'>
            <Link to='/' className='text-white flex justify-center p-4'>Back to top</Link>
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