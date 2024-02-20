import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductSell } from '../components/sell/data'
import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm'
import { selectAuth} from '../redux/authSlice'
import banner from '../image/homepage-hero-image-03-sm.png'
import { useNavigate } from 'react-router-dom'

function Sell() {
    const [change, setChange] = useForm()
    const [changCtigore, setChangeCatigore] = useState()
    const [value, setValue] = useState()
    const [image, setImage] = useState()
    const [toggol, setToggol] = useState(false)
    const auth = useSelector(selectAuth)
    const [catigoreId, setCatigoreId] = useState()
    const naviget = useNavigate()

    const handelSubmit = async (e) => {
        try {
            const getShoper = await axios.get(`http://127.0.0.1:8000/api/v1/user/?username=${auth.username}`)
            const shoperId = await getShoper.data[0].id
            const product = await axios.post('http://127.0.0.1:8000/api/v1/product/add/', {
                name: change.name,
                desc: change.desc,
                price: parseInt(change.price),
                stock: parseInt(change.stock),
                brand: change.brand,
                star: parseInt(change.star),
                user: shoperId,
                Category: [catigoreId],
            })
            const productId = await product.data.id

            const formData = new FormData();
            formData.append('images', image);
            formData.append('product', productId);

            const response = await axios.post('http://127.0.0.1:8000/api/v1/product/image/add/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }
        catch {
            console.log('hato');
        }
    }

    useEffect(() => {
        const serachSubmit = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/product/catigory/?search=${changCtigore ? changCtigore : null}`)
                setCatigoreId(await response.data[0].id)
                setValue(await response.data)
            }
            catch {
                console.log('hato');
            }
        }
        serachSubmit()
    }, [changCtigore])

    const HandelChangeCatigore = (name) => {
        setChangeCatigore(name)
        setToggol(true)
    }

    const HandelSubmitCatigore = (name) => {
        setChangeCatigore(name)
        setToggol(false)
    }

    const [product] = useFetch('http://127.0.0.1:8000/api/v1/product/views/')
    const userProduct = product && product.filter((item) => item.user === 10)

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='l m-auto p-5 flex flex-col justify-evenly h-full'>
                    <h1 className='text-3xl font-bold'>Start selling with Amazon</h1>
                    <p className='l text-slate-400 '>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.1</p>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 p-4 gap-4'>
                <div className='l  bg-white rounded-lg p-4'>
                    <h2 className='text-center'>Add Product</h2>
                    <form onSubmit={handelSubmit} className='mt-4'>
                        <label className='grid grid-cols-5 mt-2'>
                            <span >image</span>
                            <input onChange={(e) => setImage(e.target.files[0])} className='border-2 ml-4 rounded-lg col-span-4 border-blue-300' type='file' />
                        </label>
                        {ProductSell.map((item) => (
                            <label key={item.id} className='grid grid-cols-5 mt-2'>
                                <span >{item.name}</span>
                                <input name={item.name} onChange={setChange} className='border-2 ml-4 rounded-lg col-span-4 border-blue-300' type={item.type} />
                            </label>
                        ))}
                        <label className='grid grid-cols-5 mt-2'>
                            <span >catigore</span>
                            <input name='catigore' onChange={(e) => HandelChangeCatigore(e.target.value)} className='border-2 ml-4 rounded-lg col-span-4 border-blue-300' type='text' />
                            <div>
                                <div className='h relative ' >
                                    <div className={`${toggol ? 'absolute left-32 z-50 rounded-lg bg-white w-80 overflow-hidden text-black p-4' : 'hidden'}`}>
                                        <ul className='max-h-52 overflow-x-clip overflow-y-scroll'>
                                            {value && value.map((item) => (
                                                <li key={item.id}>
                                                    <span onClick={() => HandelSubmitCatigore(item.name)} className='curs cursor-pointer hover:text-blue-800 text-nowrap'>{item.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <br />
                        <button className='font-semibold bg-yellow-400 p-1 rounded-md hover:bg-yellow-300'>Cantinue</button>
                    </form>
                </div>
                <div className='bg-white rounded-lg p-4 col-span-2'>
                    <h2>Your Product</h2>
                    <div className='flex gap-4 mt-4 flex-wrap'>
                        {userProduct && userProduct.map((item) => (
                            <div key={item.id} className='n w-48 bg-blue-100 p-2 rounded-lg'>
                                <img className='' src={item.image[0].images} alt="" />
                                <span className='text-xs'>brand: <span className='text-blue-500 cursor-pointer hover:text-red-500'>{item.brand} </span>  ${item.price}</span>
                                <br />
                                <span>name: <span className='text-blue-500 cursor-pointer hover:text-red-500' onClick={()=>naviget(`/updated/${item.id}/`)}>{item.name}</span></span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Sell