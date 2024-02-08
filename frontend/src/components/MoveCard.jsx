import React from 'react'
import { useNavigate } from 'react-router-dom'

function MoveCard({image, id, count, price, name, index
}) {
  const naviget = useNavigate()
  const imageId=image[0]
  return (
    <div className=''>
    {count>=index? null : <div>
      <img onClick={()=>naviget(`Praduct/${id}`)} className='h-40 min-w-32 cursor-pointer' src={imageId && imageId.images} alt="" />
      </div> }
    </div>
  )
}

export default MoveCard