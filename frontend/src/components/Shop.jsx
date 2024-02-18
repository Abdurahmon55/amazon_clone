import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useScore from '../hooks/useScore'
import { getNumber } from '../redux/countSilce'

function Shop({ product, id, shoper, number }) {

    const [count, increment, decrement] = useScore(number)
    const [cards, setCard] = useState()
    const [catigore, setCatigore] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const getElement = async () => {
            try {
                const data = await axios.get(`http://127.0.0.1:8000/api/v1/product/views/${product}/`)
                const numbers = await data.data.price
                dispatch(getNumber(parseInt(numbers) * count))
                await axios.get(`http://127.0.0.1:8000/api/v1/product/views/${product}/`)
                    .then(res => setCard(res.data))
                const item = await axios.get(`http://127.0.0.1:8000/api/v1/product/views/${product}/`)
                await axios.get(`http://127.0.0.1:8000/api/v1/product/catigory/${item && item.data.Category[0]}/`)
                    .then(res => setCatigore(res.data))
            }
            catch {

            }
        }
        getElement()
    }, [])

    const deleteCard = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/shoper/${id}/`)
    }

    const addItem = () => {
        axios.put(`http://127.0.0.1:8000/api/v1/shoper/${id}/`, {
            number: count,
            shoper: shoper,
            product: product,
        })
            .then(res => console.log(res.data))
    }
    const naviget = useNavigate()

    const getCatigore = () => {
        naviget(`/Category/${catigore && catigore.id}`)
    }

    const moreInfo =()=>{
        naviget(`/Praduct/${cards && cards.id}`)
    }
    return (
        <div className='grid grid-cols-5 py-4 pl-4 gap-4'>
            <div className='col-span-1 w-24'>
                <img src={cards && cards.image[0].images} alt="" />
                <span className='font-bold'>${cards && cards.price}</span>
            </div>
            <div className='col-span-3'>
                <div className='h-10 text-sm overflow-hidden'>
                    <span className=' font-semibold'>{cards && cards.name}</span>
                </div>
                <span className='text-sm text-lime-500'>In Stock</span>
                <div className='text-xs font-semibold text-slate-500'>
                    <span>Shipped from:<span onClick={getCatigore} className='pl-2 text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>{catigore && catigore.name}</span></span>
                    <br />
                    <span>Gift options not available.<span onClick={moreInfo} className='pl-2 text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>Learn more</span></span>
                </div>
                <div>
                    <div className='flex items-center text-xs justify-between mt-4'>
                        <form onSubmit={addItem} className='flex gap-2  shadow-lg border border-slate-400 items-center bg-slate-300 px-2 rounded-md w-24  text-xsh'>
                            <button className=' '>Qty :</button>
                            <span>{count}</span>
                            <div>
                                <span onClick={increment}><ion-icon name="arrow-dropup"></ion-icon></span>
                                <br />
                                <span onClick={decrement}><ion-icon name="arrow-dropdown"></ion-icon></span>
                            </div>
                        </form>
                        <form onSubmit={() => deleteCard(id)} className=' border-r-2 border-l-2 w-1/3 text-center'>
                            <button className=' text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>Delete</button>
                        </form>
                        <div>
                            <span className=' text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>Save for later</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shop