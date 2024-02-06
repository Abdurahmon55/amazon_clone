import React from 'react'
import productImage from '../image/XCM_CUTTLE.jpg'
function ProductCard() {
  return (
    <div className=' bg-white p-4'>
        <h2 className='fo md:text-lg text-xs font-bold'>New year, new supplies</h2>
        <img src={productImage} alt="" />
        <span className='text-cyan-500 text-xs md:text-base cursor-pointer hover:text-orange-400 text-nowrap overflow-hidden'>Shop office products</span>
    </div>
  )
}

export default ProductCard