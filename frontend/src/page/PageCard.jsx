import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAddToCard from '../hooks/useAddToCard'
import useFetch from '../hooks/useFetch'

function PageCard() {
    const { id } = useParams()
    const [card] = useFetch(`http://127.0.0.1:8000/api/v1/product/views/${id}/`)
    const [imageId, setImageId] = useState(0)
    const [addCard] = useAddToCard()
    return (
        <div className='mb-36 p-4'>
            <div className='grid grid-cols-5'>
                <div className="image col-span-2">
                    <div className="headrImage">
                        <img src={card && card.image[imageId].images} alt="" />
                    </div>
                    <div className='flex gap-4 cursor-pointer mt-4'>
                        {card && card.image.map((item, index) => (
                            <img onClick={() => setImageId(index)} className='max-w-32 min-w-14' src={item.images} alt="" />
                        ))}
                    </div>
                </div>
                <div className="praductInfo col-span-2 px-2">
                    <div className='border-b-2 flex flex-col'>
                        <h2 className='font-bold'>{card && card.name}</h2>
                        <span className='text-cyan-500 font-semibold'>Brand: {card && card.brand}</span>
                        <div className='flex items-center'>
                            <span className='pr-2 text-sm'>{card && card.star}</span>
                            {[...Array(card && card.star)].map((item) => (
                                <i className='text-orange-400'><ion-icon name="star"></ion-icon></i>
                            ))}
                            <span className='pl-10 text-sm font-semibold text-cyan-500'>{card && card.star * 10} ratings</span>
                        </div>

                    </div>
                    <div className="desc mt-4 max-h-80 overflow-y-scroll">
                        <p>{card && card.desc}</p>
                    </div>
                </div>
                <div className="sender">
                    <div className='border-2 p-2 rounded-lg'>
                        <span className='text-sm'>No featured offers available</span>
                        <h2 className='text-cyan-500 font-semibold hover:text-red-400 cursor-pointer'>Learn more </h2>
                    </div>
                    <div className='border-2 p-2 rounded-lg mt-4'>
                        <div className='flex flex-col'>
                            <span className='text-cyan-500 pl-5 hover:text-red-400 cursor-pointer'><i><ion-icon name="compass"></ion-icon></i>Deliver to Uzbekistan</span>
                            <span className='m-5 border-2 text-center p-2 rounded-lg text-sm font-semibold hover:bg-slate-100 cursor-pointer'>See All Buying Options</span>
                            <div className='border-b-2 mx-5'></div>
                            <form onSubmit={() => addCard(card && card.id)}>
                                <button className='m-5 border hover:text-red-500 p-2 rounded-lg border-black hover:bg-slate-100 cursor-pointer'>Add to List</button>
                            </form>
                        </div>
                    </div>
                    <div className='border-2 mt-4 p-5'>
                        <img src={card && card.image[0].images} alt="" />
                        <span className='text-sm font-bold '>{card && card.name}</span>
                        <div>
                            {[...Array(card && card.star)].map((item) => (
                                <i className='text-orange-400'><ion-icon name="star"></ion-icon></i>
                            ))}
                            <span className='pl-2 text-sm'>{card && card.star}</span>
                            <span className='pl-5 text-2xl font-semibold text-red-500'>${card && card.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className='font-bold'>Product Description</span>
                <p>{card && card.desc}</p>
            </div>
        </div>
    )
}

export default PageCard