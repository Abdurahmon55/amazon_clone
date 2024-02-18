import React from 'react'
import { useNavigate } from 'react-router-dom'
import productImage from '../image/XCM_CUTTLE.jpg'
function ProductCard({image, name, id}) {
  const naviget = useNavigate()
  const getCatigore=()=>{
    naviget(`/Category/${id}`)
  }
  return (
    <div onClick={getCatigore} className=' bg-white p-4 flex flex-col justify-between cursor-pointer '>
        <h2 className='md:text-lg sm:text-sm text-xs font-bold mr-auto'>{name}</h2>
        <img className='max-h-52  my-2' src={image} alt="" />
        <span className='text-cyan-500 text-xs md:text-base cursor-pointer hover:text-orange-400 text-nowrap overflow-hidden'>Shop office products</span>
    </div>
  )
}

export default ProductCard