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
  const {data:catigory}=useFetch('http://127.0.0.1:8000/api/v1/product/catigory/')
  const {data:book}=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=17')
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
      <div className='lg:top-[-200px] relative p-8 top-[-90px] sm:top-[-120px]'>
        <div className=' grid lg:grid-cols-4 m-auto gap-4  md:grid-cols-3  grid-cols-2 '>
          {catigory && catigory.slice(1,9).map((item)=>(
            <ProductCard key={item.id}{...item}/>
          ))}
        </div>
        <div className='n relative'>
          <button className='n absolute top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={prevElement}><ion-icon name="arrow-back"></ion-icon></button>
          <button className='n absolute right-0 top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={getElement}><ion-icon name="arrow-forward"></ion-icon></button>
          <div className='mt-4 p-4  bg-white'>
            <h4 className='font-bold'>Exciting deals
              <span className='text-xs pl-4 text-lime-400 hover:text-red-800 hover:underline  cursor-pointer'>all deals</span>
            </h4>
              <div className=' flex gap-2 overflow-hidden'>
            {book && book.map((item) => (
              <BookCard key={item.id}{...item} next={next} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home