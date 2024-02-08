import React from 'react'
import { useParams } from 'react-router-dom'
import CardsResults from '../components/CardsResults'
import Sidebar from '../components/sidebar/Sidebar'
import useFetch from '../hooks/useFetch'

function Results() {
    const { id } = useParams()
    const [catigory] = useFetch(`http://127.0.0.1:8000/api/v1/product/views/?Category=${id}`)
    console.log(catigory);
    return (
        <div className='mb-36 grid grid-cols-3 gap-5 m-4'>
            <div className="sidebar ">
                <Sidebar />
            </div>
            <div className="Results col-span-2 ">
                <h2 className='font-bold'>Results</h2>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {catigory && catigory.map((item) => (
                        <CardsResults key={item.id}{...item} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Results