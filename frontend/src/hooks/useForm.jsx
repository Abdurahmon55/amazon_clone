import { useState } from "react";

function useForm(){
    const [value, setValue]=useState({})

    const handelChange=(e)=>{
        setValue({...value, 
            [e.target.name]:e.target.value,
        })
    }
    return [value, handelChange]
}

export default useForm