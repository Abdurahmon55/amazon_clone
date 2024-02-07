import React from 'react'

function BookCard({image, id, next, price, name
}) {
  const imageId=image[0]
  return (
    <div className=''>
    {next>=id? null : <div>
      <img className='h-32 min-w-32 cursor-pointer' src={imageId && imageId.images} alt="" />
      <div><span className='text-xs text-slate-500'>$</span> <span>{price}</span> <span className='text-xs text-slate-500'>List Price <span className='line-through'>${2+parseInt(price)}</span></span></div>
      <div className='min-w-32 h-7 overflow-hidden'>
        <span className='hover:text-red-800 cursor-pointer text-xs'>{name}</span>
      </div>
      </div> }
    </div>
  )
}

export default BookCard