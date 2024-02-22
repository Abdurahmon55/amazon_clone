import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardsResults from '../components/CardsResults'
import Sidebar from '../components/sidebar/Sidebar'
import useFetch from '../hooks/useFetch'

function ResultsPage() {
    const { brand } = useParams()
    const naviget = useNavigate()
    const [counter, setCounter]=useState({
        start:0,
        end:20,
    })
    const [product, errproduct] = useFetch(`http://127.0.0.1:8000/api/v1/product/views/?search=${brand}`)
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
        <div className='mb-36 grid grid-cols-3 gap-5 m-4'>
            <div className="sidebar ">
                <Sidebar />
            </div>
            <div className="Results col-span-2">
                <h2 className='font-bold'>Results</h2>
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
                        {page && page === index ? null : <span onClick={() => pageion(index + 1)} className='border cursor-pointer border-black p-2 px-3 rounded-md font-bold'>{index + 1}</span>}
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default ResultsPage