import React from 'react'

function MoveCard({image, id, count, price, name, index
}) {
  const imageId=image[0]
  return (
    <div className=''>
    {count>=index? null : <div>
      <img className='h-40 min-w-32 cursor-pointer' src={imageId && imageId.images} alt="" />
      </div> }
    </div>
  )
}

export default MoveCard