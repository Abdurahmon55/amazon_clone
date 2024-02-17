import React from 'react'
import useScore from '../hooks/useScore'

function Shop({card, book}) {
const [count, increment, decrement]=useScore()
    return (
        <div className='grid grid-cols-5 py-4 pl-4 gap-4'>
            <div className='col-span-1 w-24'>
                <img src={card && card.image[0].images} alt="" />
            </div>
            <div className='col-span-3'>
                <div className='h-10 text-sm overflow-hidden'>
                    <span className=' font-semibold'>{card && card.name}</span>
                </div>
                <span className='text-sm text-lime-500'>In Stock</span>
                <div className='text-xs font-semibold text-slate-500'>
                    <span>Shipped from:<span className='pl-2 text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>{book && book.name}</span></span>
                    <br />
                    <span>Gift options not available.<span className='pl-2 text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>Learn more</span></span>
                </div>
                <div>
                    <div className='flex items-center text-xs justify-between mt-4'>
                        <div className='flex gap-2  shadow-lg border border-slate-400 items-center bg-slate-300 px-2 rounded-md w-24  text-xsh'>
                            <span className=' '>Qty :</span>
                            <span>{count}</span>
                            <div>
                                <button onClick={increment}><ion-icon name="arrow-dropup"></ion-icon></button>
                                <br />
                                <button onClick={decrement}><ion-icon name="arrow-dropdown"></ion-icon></button>
                            </div>
                        </div>
                        <div className=' border-r-2 border-l-2 w-1/3 text-center'>
                            <span className=' text-blue-400 hover:text-red-400 hover:underline cursor-pointer'>Delete</span>
                        </div>
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