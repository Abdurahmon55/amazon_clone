import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError]=useState()
    useEffect(() => {
        try {
            axios.get(url)
                .then(res => setData(res.data))
                .catch(err => setError(`have not info`))
        }
        catch{
            console.log('hato');
        }
            

}, [url])
    return [data, error]
}
export default useFetch