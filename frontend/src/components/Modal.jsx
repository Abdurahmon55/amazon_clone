import React from 'react'
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { selectAuth } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Modal() {

  const [catigore, errcatigory] = useFetch('http://127.0.0.1:8000/api/v1/product/catigory/')
  const auth = useSelector(selectAuth)
  const naviget = useNavigate()
  return (
    <div className='relative'>
      <div className='absolute top-5 right-16 w-full h-full z-50'>
        <div className='bg-slate-800 w-80 flex gap-4 pl-4 text-2xl'>
          <h2>hello :</h2>
          <h2 className='hover:text-blue-800 cursor-pointer'>{auth && auth.username}</h2>
        </div>
        <ul className='bg-white w-80 p-4 border-2 border-slate-800 shadow-2xl'>
          {catigore && catigore.map((item) => (
            <li key={item.id} className='text-black py-2 hover:text-blue-800 cursor-pointer flex h-10 gap-2'>
              <img className='w-8' src={item.image} alt="" />
              <span onClick={()=>naviget(`/Category/${item.id}`)}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default Modal