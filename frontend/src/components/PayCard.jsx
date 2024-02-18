import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount, selectItem } from '../redux/countSilce'

function PayCard({ shoper }) {
    const coster = useSelector(selectCount)
    const element = useSelector(selectItem)
    return (
        <div className='bg-white p-5'>
            <h2 className='flex text-lg'>Subtotal ({element} item): <h2 className='h font-semibold'>${coster/2}</h2></h2>
            <button className=' border w-full my-2 p-1 rounded-md shadow-lg font-semibold hover:bg-amber-300 bg-amber-400 text-center'>Proceed to checkout</button>
        </div>
    )
}

export default PayCard