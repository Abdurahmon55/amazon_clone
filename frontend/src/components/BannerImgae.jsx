import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

function BannerImgae() {

  const [showImage, setShowImage] = useState(1)
  const [data, errdata] = useFetch(`http://127.0.0.1:8000/api/v1/product/news/${showImage}/`)
  const [all, errall] = useFetch('http://127.0.0.1:8000/api/v1/product/news/')


  const NextShowImage = () => {
    if (all && all.length > showImage) {
      setShowImage(showImage + 1)
    }
    else {
      setShowImage(1)
    }
  }
  const PrevShowImage = () => {
    if (showImage === 1) {
      setShowImage(all.length)
    }
    else {
      setShowImage(showImage - 1)
    }
  }
  return (
    <div className='m relative'>
      <div>
      <button onClick={PrevShowImage}  className='hover:border-2 p-4 absolute  h-3/6 mt-10 rounded-md   hover:border-blue-500 hover:text-blue-500 text-3xl'><ion-icon name="arrow-back"></ion-icon></button>
      <button onClick={NextShowImage} className='hover:border-2 p-4 absolute right-0 hover:border-blue-500  h-3/6 mt-10 rounded-md  hover:text-blue-500 text-3xl'><ion-icon name="arrow-forward"></ion-icon></button>
      </div>
      <div>
        <img src={data && data.image} alt="" />
      </div>
    </div>
  )
}

export default BannerImgae