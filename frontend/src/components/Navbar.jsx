import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import useToggol from '../hooks/useToggol'
import logo from '../image/pngimg.png'
import { getAuth, selectAuth } from '../redux/authSlice'
import { selectItem } from '../redux/countSilce'
import SearchItem from './SearchItem'

function Navbar() {

  const auth = useSelector(selectAuth)
  const item = useSelector(selectItem)
  const dispatch = useDispatch()

  const [toggol, setToggol] = useToggol()
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
    <div className='px-4 bg-slate-900 text-white  grid grid-cols-10 justify-center items-center'>
      <div className='xl:col-1 lg:col-span-2 md:col-span-2 col-span-3'>
        <ul className='flex gap-5  items-center'>
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
      <div className='lg:col-span-5 md:col-span-4 col-span-6'> 
        <SearchItem />
      </div>
      <div className=' lg:col-span-3 md:col-span-4 col-span-1'>
        <ul className={`info md:gap-5  md:flex md:items-center md:justify-between md:static p-2 rounded-b-lg absolute bg-zinc-900 ${toggol ? 'right-0 top-10' : 'right-[-200px]'} top-16 z-30`}>
          <li className='cursor-pointer flex hover:bg-slate-700 px-1 rounded-lg items-end'>
            <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>EN</h6>
            <ion-icon name="arrow-dropdown"></ion-icon>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            {!auth ? <Link to='Login/'>
              <span to='Register/' className='sm:text-xs sm:font-thin'>Hello, sing in</span>
              <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>Account & Lists</h6>
            </Link> : <Link to='Login/'>
              <span className='sm:text-xs sm:font-thin'>{auth && auth.username}</span>
              <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>Account & Lists</h6>
            </Link>}
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg'>
            <span className='sm:text-xs sm:font-thin'>Returns</span>
            <h6 className='lg:text-base lg:font-semibold sm:text-sm sm:font-semibold'>& Orders</h6>
          </li>
          <li className='cursor-pointer hover:bg-slate-700 px-1 rounded-lg '>
            <Link className='relative hover:text-blue-800' to='shopCard/'>
              <i className='text-3xl  opacity-45'><ion-icon name="cart"></ion-icon></i>
              <span className='text-red-500  absolute left-3 bottom-4 text-2xl'>{item}</span>
            </Link>
          </li>
        </ul>
        <button onClick={setToggol} className='md:hidden text-3xl hover:text-sky-800 hover:text-4xl'>
          {!toggol ? <ion-icon name="reorder"></ion-icon> : <ion-icon name="close"></ion-icon>}
        </button>

      </div>
    </div>
  )
}

export default Navbar



