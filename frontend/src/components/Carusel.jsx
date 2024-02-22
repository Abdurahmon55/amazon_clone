import React from 'react'
import { useNavigate } from 'react-router-dom';
import useCount from '../hooks/useCount';

function Carusel({ data, title, error }) {
    const [count, next, back] = useCount(data && data.length-2)
    const naviget = useNavigate()
    return (
        <div className='py-3 bg-white my-4'>
            <h2 className='m pl-24 md:font-bold md:text-xl font-semibold'>{title}</h2>
            {error ? <h2>{error}</h2>:
           <div className='py-2 flex '>
            <button onClick={next} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-back"></ion-icon></button>
            <div className='w-full flex gap-4 overflow-hidden justify-start'>
                {data && data.map((item, index) => (
                    <div key={item.id}>
                        {count>index ? null : <div key={item.id} className=''>
                        <img onClick={() => naviget(`/Praduct/${item.id}`)} className=' h-44 border shadow-lg cursor-pointer' src={item.image[0].images} alt="" />
                        <span className='text-nowrap'>{item.name.slice(0, 15)}...</span>
                    </div>}
                    </div>
                ))}
            </div>
            <button onClick={back} className='hover:border-2 p-4 hover:text-blue-500 text-3xl'><ion-icon name="arrow-forward"></ion-icon></button>
           </div> }
        </div>
        

    )
}

export default Carusel