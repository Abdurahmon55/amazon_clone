import React, { useState } from 'react'
import BookCard from '../components/BookCard'
import Carousel from '../components/Carousel'
import MoveCard from '../components/MoveCard'
import ProductCard from '../components/ProductCard'
import useCount from '../hooks/useCount'
import useFetch from '../hooks/useFetch'

function Home() {
  const [showImage, setShowImage] = useState(1)

  // useFetch hook  data
  const [data ] = useFetch(`http://127.0.0.1:8000/api/v1/product/news/${showImage}/`)
  const [all]= useFetch('http://127.0.0.1:8000/api/v1/product/news/')
  const [catigory]=useFetch('http://127.0.0.1:8000/api/v1/product/catigory/')
  const [book]=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=17')
  const [move]=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=18')
  const [bestSellerBook]=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=22')
  const [music]=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=11')

  // function
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

  // Counter hook carusel
  const [count, nexts, prev]=useCount(move && move.length-2)
  const [countBook, getElement, prevElement]=useCount(book && book.length-2)
  const [bestBook, nextBook, prevBook]=useCount(bestSellerBook && bestSellerBook.length-2)
  const [musics, nextMusic, prevMusic]=useCount(music && music.length-2)

  console.log(catigory);
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
            {book && book.map((item, index) => (
              <BookCard key={item.id}{...item} index={index} count={countBook} />
            ))}
          </div>
          </div>
        </div>
        <div className='n relative'>
          <button className='n absolute top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={prev}><ion-icon name="arrow-back"></ion-icon></button>
          <button className='n absolute right-0 top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={nexts}><ion-icon name="arrow-forward"></ion-icon></button>
          <div className='mt-4 p-4  bg-white'>
            <h4 className='font-bold'>Most wished for in Movies & TV</h4>
              <div className=' flex gap-2 overflow-hidden'>
            {move && move.map((item, index) => (
              <MoveCard key={item.id}{...item} index={index} count={count} />
            ))}
          </div>
          </div>
        </div>
        <div className=' grid lg:grid-cols-4 m-auto gap-4  md:grid-cols-3  grid-cols-2 mt-4  '>
          {catigory && catigory.slice(9,13).map((item)=>(
            <ProductCard key={item.id}{...item}/>
          ))}
        </div>
        <div className='n relative'>
          <button className='n absolute top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={prevBook}><ion-icon name="arrow-back"></ion-icon></button>
          <button className='n absolute right-0 top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={nextBook}><ion-icon name="arrow-forward"></ion-icon></button>
          <div className='mt-4 p-4  bg-white'>
            <h4 className='font-bold'>Top Sellers in Books for you</h4>
              <div className=' flex gap-2 overflow-hidden'>
            {bestSellerBook && bestSellerBook.map((item, index) => (
              <MoveCard key={item.id}{...item} index={index} count={bestBook} />
            ))}
          </div>
          </div>
        </div>
        <div className='n relative'>
          <button className='n absolute top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={prevMusic}><ion-icon name="arrow-back"></ion-icon></button>
          <button className='n absolute right-0 top-24  bg-amber-200 p-2 rounded-lg hover:bg-amber-100' onClick={nextMusic}><ion-icon name="arrow-forward"></ion-icon></button>
          <div className='mt-4 p-4  bg-white'>
            <h4 className='font-bold'>Top Sellers in Books for you</h4>
              <div className=' flex gap-2 overflow-hidden'>
            {music && music.map((item, index) => (
              <MoveCard key={item.id}{...item} index={index} count={musics} />
            ))}
          </div>
          </div>
        </div>
        <div className=' grid lg:grid-cols-4 m-auto gap-4  md:grid-cols-3  grid-cols-2 mt-4  '>
          {catigory && catigory.slice(15,19).map((item)=>(
            <ProductCard key={item.id}{...item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home