import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import logo from '../image/Amazon_logo.svg.png'
import { getAuth, selectAuth } from '../redux/authSlice';

function Login() {
  const [state, change] = useForm()
  const naviget = useNavigate()
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch()

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login/', {
        username: state.username,
        email: '',
        password: state.password,
      })
      if (response.status === 200) {
        console.log(response.config.data);
        localStorage.setItem('user', response.config.data)
        const data = JSON.parse(localStorage.getItem('user'))
        dispatch(getAuth(data))
        naviget('/')
      }
      
      else {
        console.log('something is wrong');
      }
    }
    catch {
      console.log('hato');
    }
  }

  
  const SingOut =()=>{
    localStorage.clear()
  }
  return (
    <div>{!auth ?
      <div className='m-auto md:w-1/3 sm:w-1/2 '>
        <div className='w-32 m-auto p-4'>
          <img src={logo} altcxcx />
        </div>
        <div className='border-2 rounded-lg p-5 bg-white'>
          <h2 className='text-center text-3xl'>Sign in</h2>
          <form onSubmit={handelSubmit} className='flex flex-col p-2 gap-2' action="">
            <label className=''>
              <span >name</span>
              <input type='text' name='username' onChange={change} className='w-full p-1 rounded-md border-black' />
            </label>
            <label className='flex flex-col py-4'>
              <span >password</span>
              <input type='password' name='password' onChange={change} className='w-full p-1 rounded-md border-black' />
            </label>
            <button className='font-semibold bg-yellow-400 p-1 rounded-md hover:bg-yellow-300'>Cantinue</button>
          </form>
          <span className='text-sm font-semibold'>By continuing, you agree to Amazon's  <span className='text-blue-500 hover:underline cursor-pointer hover:text-red-400'>  Conditions of Use</span> and <span className='text-blue-500 hover:underline cursor-pointer hover:text-red-400 '>Privacy Notice.</span></span>
        </div>
        <div className='text-center p-2 '>
          <div className='border-t-2 mt-4 w-1/2 m-auto'></div>
          <Link to='/Register/' className='border-2 p-1 rounded-lg shadow-xl bg-white'>
            <button className='py-5 w-full font-semibold '>Create your Amazon account</button>
          </Link>
        </div>
      </div> : <div className='m-auto md:w-1/3 sm:w-1/2 '>
        <div className=' m-auto p-4 bg-white'>
          <span className='text-xl'>hello : {auth.username}</span>
          <br />
          <form onSubmit={SingOut}>
            <button className='bg-yellow-500 px-2 rounded-md mt-2 font-semibold hover:bg-yellow-400'>Sing Out</button>
          </form>
          
        </div>
      </div> }
    </div>

  )
}


export default Login