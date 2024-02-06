import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
function useFetch(url){
const [data, setData]=useState(null)
useEffect(()=>{
    axios.get(url)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
},[url])
return {data}
}
export default useFetch