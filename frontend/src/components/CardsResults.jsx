import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardsResults({ name, image, price, id }) {
  const naviget = useNavigate()

  const navigeter = () => {
    naviget('/')
    naviget(`/Praduct/${id}`)
  }

  return (
    <div className='rounded-lg p-2 bg-slate-200 flex flex-col max-w-48 '>
      <img onClick={navigeter} className='cursor-pointer max-h-52 max-w-44' src={image[0].images} alt="" />
      <span className='text-sm font-medium'>{name}</span>
      <span className='text-sm'>${price}</span>
    </div>
  )
}

export default CardsResults