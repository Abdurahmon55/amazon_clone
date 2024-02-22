import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import useCount from '../hooks/useCount';
import useFetch from '../hooks/useFetch'

function TopSell() {
    const {brand}=useParams()
    const [data, errdata] = useFetch('http://127.0.0.1:8000/api/v1/product/catigory/')
    const [product, errproduct] = useFetch('http://127.0.0.1:8000/api/v1/product/views/')
    const [counter, setCounter]=useState({
        start:0,
        end:20,
    })
    const [count, next, back] = useCount(data && data.length - 2)
    const naviget = useNavigate()
    const page = product && parseInt(product.length / 20)+1

    const pageion=(number)=>{
        try{
            setCounter({...counter, start:(number*20-20), end:(number*20)})
        }
        catch{
            console.log('hato');
        }
        
    }
    return (
        <div className='m-4'>

            <div className='bg-white m-8 flex'>
                <button onClick={next} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-back"></ion-icon></button>
                <div className='flex m-auto  overflow-hidden w-11/12 p-8  '>
                    {data && data.map((item, index) => (
                        <div key={item.id}>
                            {count > index ? null :
                                <div onClick={() => naviget(`/Category/${item.id}`)} className='ml-10 flex flex-col justify-center items-center cursor-pointer '>
                                    <img className='w-20 h-20 rounded-full mx-14 ' src={item.image} alt="" />
                                    <span className='hover:text-red-500 hover:underline max-w-32 text-xs overflow-hidden text-nowrap '>{item.name}</span>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <button onClick={back} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-forward"></ion-icon></button>
            </div>
            <div className='grid grid-cols-4 border-t-2 '>
                <div>
                    <Sidebar/>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-wrap'>
                        {product && product.slice(counter.start, counter.end).map((item) => (
                            <div key={item.id} onClick={() => naviget(`/Praduct/${item.id}`)} className='w-80 bg-white border p-2 cursor-pointer'>
                                <img className='w-32 h-48 cover-full m-auto mb-4' src={item.image[0].images} alt="" />
                                <span className='l font-medium text-sm'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center gap-4 mt-10'>
                        {[...Array(page && page)].map((item, index) => (
                            <div key={index}> 
                            {page && page===index ? null :<span onClick={()=>pageion(index+1)} className='border cursor-pointer border-black p-2 px-3 rounded-md font-bold'>{index+1}</span>}   
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSell