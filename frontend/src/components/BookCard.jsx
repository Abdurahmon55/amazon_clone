import React from 'react'

function BookCard({image, id, next}) {
  
  return (
    <div className=''>
    {next>=id? null : <div><img className='min-w-44 h-44 mr-5' src={image} alt="" />
    <h2>{id}</h2>
      </div> }
    
    </div>
  )
}

export default BookCard