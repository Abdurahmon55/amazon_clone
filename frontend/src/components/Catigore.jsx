import React from 'react'
import { useNavigate } from 'react-router-dom'

function Catigore({ data, start, end }) {
  const naviget = useNavigate()
  return (
    <>
      {data && data.slice(start, end).map((item) => (
          <div key={item.id} onClick={() => naviget(`/Category/${item.id}`)} className=' border-2 bg-white p-4 flex flex-col  h-54 justify-between cursor-pointer'>
            <h2 className='md:text-lg sm:text-sm text-xs font-bold mr-auto'>{item.name.slice(0,19)}...</h2>
            <img className='max-h-52' src={item.image} alt="" />
            <span className='text-cyan-500 text-xs  md:text-base cursor-pointer hover:text-orange-400 text-nowrap overflow-hidden'>Shop office products</span>
          </div>
      ))}
    </>
  )
}

export default Catigore

