import React from 'react'
import BannerImgae from '../components/BannerImgae'
import BookCard from '../components/BookCard'
import Carusel from '../components/Carusel'
import MoveCard from '../components/MoveCard'
import Catigore from '../components/Catigore'
import useCount from '../hooks/useCount'
import useFetch from '../hooks/useFetch'


function Home() {

  // useFetch hook  data
  const [catigory, errcatigore] = useFetch('http://127.0.0.1:8000/api/v1/product/catigory/')
  const [book, errbook] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=17')
  const [move, errmove] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=18')
  const [bestBook, errbestBook] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=22')
  const [music, errmusic] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=11')
  const [home, errhome] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=8')
  const [mouse, errmouse] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=27')

  const allArray = mouse && home && [...home, ...mouse]

  
  return (
    <div className=' mx-4 '>
           <BannerImgae/>
        <div className=' grid lg:grid-cols-4 xl:mt-[-300px] lg:mt-[-200px] mt-[-50px] sticky z-50 m-auto gap-4 md:grid-cols-3  grid-cols-2  '>
          <Catigore data={catigory} start={0} end={8} />
        </div>
      <BookCard data={allArray} />
      <Carusel data={move} title='Most wished for in Movies & TV' error={errmove}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <Catigore data={catigory} start={8} end={12} />
      </div>
      <Carusel data={music} title='Top Sellers' error={errmusic}/>
      <Carusel data={book} title='Best Sellers in Books' error={errbook}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <Catigore data={catigory} start={12} end={16} />
      </div>
      <Carusel data={bestBook} title='Top Sellers in Books for you' error={errbestBook} />
    </div>
  )
}

export default Home