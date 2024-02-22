import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCount from '../hooks/useCount'

function MoveCard({data}) {

  const naviget = useNavigate()
  const [musics, nextMusic, prevMusic]=useCount(data && data.length)

  return (
    <div className='n relative'>
      <button className='n absolute top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={nextMusic} ><ion-icon name="arrow-back"></ion-icon></button>
      <button className='n absolute right-0 top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={prevMusic} ><ion-icon name="arrow-forward"></ion-icon></button>
      <div className='mt-4 p-4  bg-white'>
        <h4 className='font-bold'>Top Sellers in Books for you</h4>
        <div className=' flex gap-2 overflow-hidden'>
          {data && data.map((item, index) => (
            <div key={item.id}>
              <div className=''>
                {musics>=index ? null : <div>
                  <img onClick={() => naviget(`Praduct/${item.id}`)} className='h-40 min-w-32 cursor-pointer' src={item.image[0].images} alt="" />
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoveCard