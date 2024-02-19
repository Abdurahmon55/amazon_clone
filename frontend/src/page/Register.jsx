import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import logo from '../image/Amazon_logo.svg.png'

function Register() {
    const [change, setChange] = useForm()
    const naviget = useNavigate()

    const handelSubmit =async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/registration/',{
                username:change.username,
                email:'iabdurahmon55@gmail.com',
                password1:change.password,
                password2:change.password,
            })
            if(response.status===204){
                naviget('/Login/')
            }
        }
        catch{
            console.log('hato');
        }
    }

    return (
        <div className='m-auto md:w-1/3 sm:w-1/2 '>
            <div className='w-32 m-auto p-4'>
                <img src={logo} alt="" />
            </div>
            <div className='border-2 rounded-lg p-5 bg-white'>
                <h2 className='text-center text-3xl'>Register</h2>
                <form onSubmit={handelSubmit} className='flex flex-col p-2 gap-2' action="">
                    <label className=''>
                        <span >name</span>
                        <input onChange={setChange} type='text' name='username'  className='w-full p-1 rounded-md border-black' />
                    </label>
                    <label className='flex flex-col py-4'>
                        <span >password</span>
                        <input onChange={setChange} type='password' name='password'  className='w-full p-1 rounded-md border-black' />
                    </label>
                    <button className='font-semibold bg-yellow-400 p-1 rounded-md hover:bg-yellow-300'>Cantinue</button>
                </form>
                <span className='text-sm font-semibold'>By continuing, you agree to Amazon's  <span className='text-blue-500 hover:underline cursor-pointer hover:text-red-400'>  Conditions of Use</span> and <span className='text-blue-500 hover:underline cursor-pointer hover:text-red-400 '>Privacy Notice.</span></span>
            </div>
            <div className='text-center p-2 '>
                <div className='border-t-2 mt-4 w-1/2 m-auto'></div>
                <Link to='/Login/' className='border-2 p-1 rounded-lg shadow-xl bg-white'>
                    <button className='py-5 w-full font-semibold '> your account</button>
                </Link>
            </div>
        </div>
    )
}

export default Register