import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCount from '../hooks/useCount'

function BookCard({ data, title }) {
  const [count, next, back] = useCount(data && data.length - 2)
  const naviget = useNavigate()
  return (
    <div className='py-3 bg-white my-4'>
      <h2 className='m pl-24 md:font-bold md:text-xl font-semibold'>{title}</h2>
      <div className='py-2 flex '>
        <button onClick={next} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-back"></ion-icon></button>
        <div className='w-full flex gap-4 overflow-hidden justify-start'>
          {data && data.map((item, index) => (
            <div key={item.id}>
              {count > index ? null : <div>
                <img onClick={()=>naviget(`Praduct/${item.id}`)} className='h-32 min-w-32 cursor-pointer' src={item.image[0].images} alt="" />
                <div className='flex items-end gap-2'><h4 className='bg-red-800 w-16 px-1 text-sm mt-2 rounded-md text-white '>33% off</h4> <span className='text-xs text-red-800'>Deal</span></div>
                <div><span className='text-xs text-slate-500'>$</span> <span>{item.price}</span> <span className='text-xs text-slate-500'>List Price <span className='line-through'>${2 + parseInt(item.price)}</span></span></div>
                <div className='max-w-32 h-7 overflow-hidden'>
                  <span className='hover:text-red-800 cursor-pointer text-xs'>{item.name}</span>
                </div>
              </div>}
            </div>
          ))}
        </div>
        <button onClick={back} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-forward"></ion-icon></button>
      </div>
    </div>
  )
}

export default BookCard

