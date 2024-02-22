import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Brands, CustomerReviews, Price } from './filterData'

function Sidebar() {
  const naviget = useNavigate()
  return (
    <div >
        <div className='Reviews'>
          <h2 className='font-bold pb-4'>Customer Reviews</h2>
          {CustomerReviews.map((item)=>(
            <div key={item.id}>{[...Array(item.star)].map((item)=>(
              <i  className='text-orange-400'><ion-icon name="star"></ion-icon></i>
            ))}
            <span onClick={()=>naviget(`/resault/${item.star}`)}  className=' pl-2 cursor-pointer hover:text-red-400'>& up</span>
            </div>
          ))}
        </div>
        <div className="Brands">
        <h2 className='font-bold py-4'>Brands</h2>
          {Brands.map((item)=>(
            <div key={item.id} className='flex gap-2 cursor-pointer'>
              <div className='h-5 w-5 border-4 mb-2 shadow-lg rounded-sm hover:border-cyan-500'></div>
              <span onClick={()=>naviget(`/resault/${item.name}`)} className='text-sm hover:text-red-400'>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="Price">
        <h2 className='font-bold py-4 '>Price</h2>
        <div className=''>
          {Price.map((item)=>(
          <div key={item.id} className='hover:text-red-400  cursor-pointer'>
            <span className='pr-2'>${item.price}</span>
            <span>to ${item.price+item.price}</span>
          </div>
        ))}
        <form className='flex gap-2 mt-4'>
          <label className=''>
            <input className='w-20 p-2 rounded-lg border-2 shadow-xl' type="number" placeholder='$ Min'/>
          </label>
          <label >
            <input className='w-20 p-2 rounded-lg border-2 shadow-xl' type="number" placeholder='$ Max'/>
          </label>
          <button className='n bg-white p-2 rounded-lg border-2 shadow-xl'>Go</button>
        </form>
        </div>
        
        </div>
    </div>
  )
}

export default Sidebar