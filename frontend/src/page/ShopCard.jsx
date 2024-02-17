import React from 'react'
import Shop from '../components/Shop'
import useCount from '../hooks/useCount'
import useFetch from '../hooks/useFetch'
import useScore from '../hooks/useScore'

function ShopCard() {
    const [card] = useFetch(`http://127.0.0.1:8000/api/v1/product/views/2/`)
    const [book] = useFetch('http://127.0.0.1:8000/api/v1/product/catigory/17/')
    const [books]=useFetch('http://127.0.0.1:8000/api/v1/product/views/?Category=17')
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
                    <Shop card={card} book={book}/>  
                    </div>
                </div>
                <div className="pay ">
                    <div className='bg-white p-5'>
                        <h2 className='flex text-lg'>Subtotal (3 items): <h2 className='h font-semibold'>{card && card.price}</h2></h2>
                        <button className=' border w-full my-2 p-1 rounded-md shadow-lg font-semibold hover:bg-amber-300 bg-amber-400 text-center'>Proceed to checkout</button>
                    </div>
                    <div className='bg-white mt-4 border '>
                        <h2 className='text-lg font-semibold'>Your recently viewed items</h2>
                        {books && books.slice(1,8).map((item)=>(
                            <div className='flex gap-4 p-2' key={item.id}>
                                <div>
                                    <img className='w-14' src={item.image[0].images} alt="" />
                                </div>
                                <div>
                                    <span className='text-blue-400'>Guardin Black</span>
                                    <p className='text-xs text-slate-400'>Llenajn Paperback</p>
                                    <span className='text-red-500'>${item.price}</span>
                                    <br />
                                    <button className='px-2 text-xs hover:bg-amber-300 bg-amber-400 text-center rounded-md'>add to Card</button>
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