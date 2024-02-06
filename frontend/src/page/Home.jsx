import React, { useState } from 'react'
import { useEffect } from 'react'
import BookCard from '../components/BookCard'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import ping from '../image/XCM_CUTTLE.jpg'
function Home() {
  const array = [
    { id: 1, image: ping },
    { id: 2, image: ping },
    { id: 3, image: ping },
    { id: 4, image: ping },
    { id: 5, image: ping },
    { id: 6, image: ping },
  ]
  const [next, setNext] = useState(1)
  const getElement = () => {
    if (next === array.length - 1) {
      setNext(1)
    }
    else {
      setNext(next + 1)
    }
  }

  const prevElement = () => {
    if (next === 0) {
      setNext(array.length - 1)
    }
    else {
      setNext(next - 1)
    }
  }
  const [showImage, setShowImage] = useState(1)
  const { data } = useFetch(`http://127.0.0.1:8000/api/v1/product/news/${showImage}/`)
  const {data : all}= useFetch('http://127.0.0.1:8000/api/v1/product/news/')
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
      setShowImage(showImage-1)
    }
  }
  return (
    <div className='pr-8'>
      <div>
        <div className='button relative z-20 top-10 sm:top-16 md:top-20 lg:top-[150px]'>
          <button className='n absolute   bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={PrevShowImage}><ion-icon name="arrow-back"></ion-icon></button>
          <button className='n absolute right-0   bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={NextShowImage}><ion-icon name="arrow-forward"></ion-icon></button>
        </div>
        <div className=''>
          <ul className='carusel h-[50%] relative flex overflow-hidden'>
            {data ? <Carousel image={data}/>:'loading'}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home