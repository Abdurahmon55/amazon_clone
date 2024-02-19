import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PayCard from '../components/PayCard'
import Shop from '../components/Shop'
import useAddToCard from '../hooks/useAddToCard'
import useFetch from '../hooks/useFetch'
import { selectAuth } from '../redux/authSlice'
import { itemCount } from '../redux/countSilce'

function ShopCard() {
    const [books] = useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=17')
    const [shoper, setShoper]=useState()
    const naviget = useNavigate()
    const auth = useSelector(selectAuth)
    const dispatch = useDispatch()

    const [addCard]=useAddToCard()

    useEffect(() => {
        const getElement = async () => {
            try {
               const data =  await axios.get(`http://127.0.0.1:8000/api/v1/user/?username=${auth.username}`)
               const newdata = await data.data[0].id
                await axios.get(`http://127.0.0.1:8000/api/v1/shoper/?shoper=${newdata}`)
               .then(res=>setShoper(res.data))
               await axios.get(`http://127.0.0.1:8000/api/v1/shoper/?shoper=${newdata}`)
               .then(res=>dispatch(itemCount(res.data.length)))
            }
            catch {
                
            }
        }
        getElement()
    }, [auth])

    const moreInfo =(id)=>{
        naviget(`/Praduct/${id}`)
    }
    return (
        <div className='p-4'>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className="shop col-span-2 lg:col-span-4 ">
                    <div className='bg-white p-4'>
                        <div className='border-b'>
                            <h2 className='text-3xl font-semibold'>Shopping Cart</h2>
                            <span className='text-lime-500 hover:text-red-400 hover:underline cursor-pointer'>Deselect all items</span>
                            <br />
                            <span className='block text-end text-slate-500'>Price</span>
                        </div>
                        {!shoper ? 'loading' : shoper.map((item)=>(
                            <Shop key={item.id}{...item}/>
                        ))}
                        
                    </div>
                </div>
                <div className="pay ">
                    <PayCard shoper={shoper}/>
                    <div className='bg-white mt-4 border '>
                        <h2 className='text-lg font-semibold'>Your recently viewed items</h2>
                        {books && books.slice(1, 8).map((item) => (
                            <div className='flex gap-4 p-2' key={item.id}>
                                <div>
                                    <img className='w-14' src={item.image[0].images} alt="" />
                                </div>
                                <div className=' max-w-32 overflow-hidden'>
                                    <span onClick={()=>moreInfo(item.id)} className='text-blue-400 md:text-sm text-xs text-nowrap cursor-pointer'>{item.name}</span>
                                    <p className='text-xs text-slate-400 '>Llenajn Paperback</p>
                                    <span className='text-red-500'>${item.price}</span>
                                    <br />
                                    <form onSubmit={() => addCard(item.id)}>
                                        <button  className='px-2 text-xs hover:bg-amber-300 bg-amber-400 text-center rounded-md'>add to Card</button>
                                    </form>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCard