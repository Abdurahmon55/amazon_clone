// import axios from 'axios'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import useForm from '../hooks/useForm'
// import { selectAuth } from '../redux/authSlice'

// function UploadedProduct() {
//     const auth = useSelector(selectAuth)
//     const [change, setChange] = useForm()
//     const [catigoreId, setCatigoreId] = useState()
//     const [image, setImage] = useState()
//     const [changCtigore, setChangeCatigore] = useState()
//     const [value, setValue] = useState()
//     const [toggol, setToggol] = useState(false)

//     const handelSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const getShoper = await axios.get(`http://127.0.0.1:8000/api/v1/user/?username=${auth.username}`)
//             const shoperId = await getShoper.data[0].id
//             const product = await axios.post('http://127.0.0.1:8000/api/v1/product/add/', {
//                 name: change.name,
//                 desc: change.desc,
//                 price: parseInt(change.price),
//                 stock: parseInt(change.stock),
//                 brand: change.brand,
//                 star: parseInt(change.star),
//                 user: shoperId,
//                 Category: [catigoreId],
//             })
//             const productId = await product.data.id

//             const formData = new FormData();
//             formData.append('images', image);
//             formData.append('product', productId);

//             const response = await axios.post('http://127.0.0.1:8000/api/v1/product/image/add/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//         }
//         catch {
//             console.log('hato');
//         }
//     }
//     useEffect(() => {
//         const serachSubmit = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/v1/product/catigory/?search=${changCtigore ? changCtigore : null}`)
//                 setCatigoreId(await response.data[0].id)
//                 setValue(await response.data)
//             }
//             catch {
//                 console.log('hato');
//             }
//         }
//         serachSubmit()
//     }, [changCtigore])

//     const HandelChangeCatigore = (name) => {
//         setChangeCatigore(name)
//         setToggol(true)
//     }

//     const HandelSubmitCatigore = (name) => {
//         setChangeCatigore(name)
//         setToggol(false)
//     }
//   return (
//     <div>UploadedProduct</div>
//   )
// }

// export default UploadedProduct