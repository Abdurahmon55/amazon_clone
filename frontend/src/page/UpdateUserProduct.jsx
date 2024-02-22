import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductSell } from '../components/sell/data'
import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm'
import banner from '../image/CGL21_A009_OwnerViewHeader_GenderNeutralGifting_421.jpg'
import { selectAuth } from '../redux/authSlice'

function UpdateUserProduct() {
  const { id } = useParams()
  const [change, setChange] = useForm()
  const [image, setImage] = useState()
  const auth = useSelector(selectAuth)
  const [value, setValue] = useState()
  const [catigoreId, setCatigoreId] = useState()
  const [changCtigore, setChangeCatigore] = useState()
  const [toggol, setToggol] = useState(false)
  const [product, errproduct] = useFetch(`http://127.0.0.1:8000/api/v1/product/add/${id}/`)

  const addImage = async () => {
    const formData = new FormData();
    formData.append('images', image);
    formData.append('product', product && product.id);
    console.log(product && product.id);
    console.log(image);
    try {
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

  const handelSubmit = async () => {
    try {
      const getShoper = await axios.get(`http://127.0.0.1:8000/api/v1/user/?username=${auth.username}`)
      const shoperId = await getShoper.data[0].id
      await axios.put(`http://127.0.0.1:8000/api/v1/product/add/${product && product.id}/`, {
        name: change.name,
        desc: change.desc,
        price: parseInt(change.price),
        stock: parseInt(change.stock),
        brand: change.brand,
        star: parseInt(change.star),
        user: shoperId,
        Category: [catigoreId],
      })
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

  return (
    <div>
      <img src={banner} alt="" />
      <div className='sm:w-80 sm:h-48 w-48  h-32 flex flex-col justify-around bg-white p-4 rounded-lg m-auto bottom-10 overflow-hidden sm:bottom-32 relative'>
        <h2 className='text-center sm:text-2xl'>Updated your product</h2>
        <span className='text-xs text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis laborum possimus est modi dignissimos reprehenderit </span>
      </div>
      <div className='grid lg:grid-cols-3  mx-10 gap-4'>
        <div className='col col-span-1'>
          <h2>Add Image in Praduct</h2>
          <div className='my-4'>
            <form onSubmit={addImage} className=' bg-white p-4 w-80' action="">
              <label className=''>
                <button >image</button>
                <input onChange={(e) => setImage(e.target.files[0])} className='border-2 rounded-lg  border-blue-300' type='file' />
              </label>
            </form>
          </div>
          <h2> Updated Product</h2>
          <div>
            <form onSubmit={handelSubmit} action="">
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
              <button className='font-semibold bg-yellow-400 p-1 rounded-md hover:bg-yellow-300'>Cantinue</button>
            </form>
          </div>
        </div>
        <div className='col-span-2'>
          <h2>Product Detail</h2>
          <div className='p-4 mt-4 bg-white rounded-lg'>
            <div className=' flex gap-4'>
              <img className='md:w-80 w-52 h-52' src={product && product.image[0].images} alt="" />
              <div>
                <h2>name : <span className='text-lg font-semibold'>{product && product.name}</span></h2>
                <p className='h-80 overflow-y-scroll'>desc{product && product.desc}</p>
              </div>
            </div>
            <div className='flex gap-4 mt-4'>
              <span>brand: <span className='text-blue-800 font-semibold'>{product && product.brand}</span> </span>
              <span>price: <span className='text-blue-800 font-semibold'>${product && product.price}</span></span>
              <span>uploaded data: <span className='text-blue-800 font-semibold'>{product && product.data}</span></span>
              <span>Product Key <span className='text-blue-800 font-semibold'>{product && product.id}</span></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UpdateUserProduct