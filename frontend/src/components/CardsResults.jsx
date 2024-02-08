import React from 'react'

function CardsResults({name, image, price, stock, desc}) {
  return (
    <div className='rounded-lg p-2 bg-slate-200 flex flex-col max-w-48 '>
        <img className=' max-h-52 max-w-44' src={image[0].images} alt="" />
        <span className='text-sm font-medium'>{name}</span>
        <span className='text-sm'>${price}</span>
    </div>
  )
}

export default CardsResults