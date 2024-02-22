import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CardsResults from '../components/CardsResults'
import Sidebar from '../components/sidebar/Sidebar'
import useFetch from '../hooks/useFetch'
import { selectTitle } from '../redux/countSilce'

function Results() {
    const { id } = useParams()
    const naviget =useNavigate()
    const [product] = useFetch(`http://127.0.0.1:8000/api/v1/product/views/?Category=${id}`)
    return (
        <div className='mb-36 grid grid-cols-3 gap-5 m-4'>
            <div className="sidebar ">
                <Sidebar />
            </div>
            <div className="Results col-span-2 max-h-[1200px] overflow-y-scroll">
                <h2 className='font-bold'>Results</h2>
                <div className='flex flex-wrap'>
                        {product && product.map((item) => (
                            <div key={item.id} onClick={() => naviget(`/Praduct/${item.id}`)} className='w-80 bg-white border p-2 cursor-pointer'>
                                <img className='w-32 h-48 cover-full m-auto mb-4' src={item.image[0].images} alt="" />
                                <span className='l font-medium text-sm'>{item.name}</span>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default Results