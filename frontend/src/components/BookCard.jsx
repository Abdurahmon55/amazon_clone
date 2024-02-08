import React from 'react'

function BookCard({image, id, next, price, name, count, index
}) {
  const imageId=image[0]
  return (
    <div className=''>
    {count>=index? null : <div>
      <img className='h-32 min-w-32 cursor-pointer' src={imageId && imageId.images} alt="" />
      <div className='flex items-end gap-2'><h4 className='bg-red-800 w-16 px-1 text-sm mt-2 rounded-md text-white '>33% off</h4> <span className='text-xs text-red-800'>Deal</span></div>
      <div><span className='text-xs text-slate-500'>$</span> <span>{price}</span> <span className='text-xs text-slate-500'>List Price <span className='line-through'>${2+parseInt(price)}</span></span></div>
      <div className='max-w-32 h-7 overflow-hidden'>
        <span className='hover:text-red-800 cursor-pointer text-xs'>{name}</span>
      </div>
      </div> }
    </div>
  )
}

export default BookCard