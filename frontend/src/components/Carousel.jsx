import React from 'react'
import useFetch from '../hooks/useFetch'

function Carousel({image}) {

  return (
      <li className='image min-w-full h-[50%]'>
             <img  src={image.image} alt="" /> 
          </li>   
  )
}

export default Carousel