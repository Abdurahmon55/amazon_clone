import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../image/pngimg.png'
import { getAuth, selectAuth } from '../redux/authSlice'

function Navbar() {
  const [min, setMin] = useState(false)
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch()

  const humburger = () => {
    setMin(!min)

  }
  const [data, setData] = useState()
  const getUser = () => {
    axios.get('http://127.0.0.1:8000/api/v1/auth/user/')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    console.log(data && data);
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'))
    dispatch(getAuth(data))
  }, [])


  return (
    <div className=' bg-slate-900 text-white  flex items-center justify-between px-2'>
      <div>
        <ul className='flex gap-5  items-center '>
          <li className="log">
            <Link to='/'>
              <img className='w-20 cursor-pointer' src={logo} alt="" />
            </Link>
          </li>
          <li className="state sm:block hidden">
            <span onClick={getUser} className='sm:text-xs md:font-thin cursor-pointer'>Deliver to</span>
            <li className='pr-2'>
              <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'> <i className='text-xs'><ion-icon name="compass"></ion-icon></i> Uzbekistan</h6>
            </li>
          </li>
        </ul>
      </div>
      <div className='flex items-center flex-grow'>
        <div className='bg-gray-600 flex items-center  rounded-l-lg sm:p-2 '>
          <span className='sm:text-xs sm:font-thin'>All</span>
          <i><ion-icon name="arrow-dropdown"></ion-icon></i>
        </div>
        <input className=' flex-grow sm:p-2' type="text" placeholder='search ' />
        <i className='text-black cursor-pointer sm:text-2xl text-base bg-orange-300 rounded-r-lg sm:p-1'><ion-icon name="search"></ion-icon></i>
      </div>
      <div >
        <ul className={`info md:gap-5  md:flex md:items-center md:static p-2 rounded-b-lg absolute bg-zinc-900 ${min ? 'right-0 top-10' : 'right-[-200px]'} top-16 z-30`}>
          <li className='cursor-pointer flex hover:bg-slate-700 px-1 rounded-lg items-end'>
            <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>EN</h6>
            <ion-icon name="arrow-dropdown"></ion-icon>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            {!auth ? <Link to='Login/'>
              <span to='Register/' className='sm:text-xs sm:font-thin'>Hello, sing in</span>
              <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>Account & Lists</h6>
            </Link> : <Link to='Login/'>
              <span className='sm:text-xs sm:font-thin'>{auth.username}</span>
              <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>Account & Lists</h6>
            </Link>}
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            <span className='sm:text-xs sm:font-thin'>Returns</span>
            <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>& Orders</h6>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg '>
            <Link to='shopCard/'>
              <i className='text-3xl hover:text-sky-800'><ion-icon name="cart"></ion-icon></i>
            </Link>
          </li>
        </ul>
        <button onClick={humburger} className='md:hidden text-3xl hover:text-sky-800 hover:text-4xl'>
          {!min ? <ion-icon name="reorder"></ion-icon> : <ion-icon name="close"></ion-icon>}
        </button>

      </div>
    </div>
  )
}

export default Navbar



