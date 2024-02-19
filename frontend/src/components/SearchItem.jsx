import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchItem() {
    const [change, setChange] = useState(null)
    const [value, setValue]=useState()
    const naviget = useNavigate()

    useEffect(() => {
        const serachSubmit = async () => {
            console.log(change ? change : null)
            try {
                await axios.get(`http://127.0.0.1:8000/api/v1/product/views/?search=${change ? change : null}`)
                    .then(res => setValue(res.data))
                    .catch(err => console.log(err))
            }
            catch {
                console.log('hato');
            }
        }
        serachSubmit()
    }, [change])
    console.log(value);

    const getItem=(id)=>{
        naviget(`/Praduct/${id}`)
        setChange(null)
    }
    return (
        <div>
            <div className='flex items-center xl:w-[120vh] lg:w-[80vh] md:[5vh] sm:[2vh]'>
                <div className='bg-gray-600 flex items-center  rounded-l-lg sm:p-2 '>
                    <span className='sm:text-xs sm:font-thin'>All</span>
                    <i><ion-icon name="arrow-dropdown"></ion-icon></i>
                </div>
                <input onChange={(e) => setChange(e.target.value)} className=' flex-grow sm:p-2 text-black' type="text" placeholder='search ' />
                <i onClick={() => setChange(null)} className='text-black cursor-pointer sm:text-2xl text-base bg-orange-300 rounded-r-lg sm:p-1'><ion-icon name="search"></ion-icon></i>
            </div>
            <div className='h relative ' >
                <div className= {`${change ? 'absolute z-50 rounded-lg bg-white w-full overflow-hidden text-black p-4' : 'hidden'}`}>
                    <ul className='max-h-80 overflow-x-clip overflow-y-scroll'>
                        {value && value.map((item)=>(
                            <li key={item.id}>
                                <span onClick={()=>getItem(item.id)} className='curs cursor-pointer hover:text-blue-800 text-nowrap'>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SearchItem