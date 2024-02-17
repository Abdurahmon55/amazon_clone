import { useState } from "react";

function useScore(){
    const [number, setNumber]=useState(1)

    const addNumber=()=>{
        setNumber(number+1)
    }
    const minusNuber=()=>{
        if(number===0){
            setNumber(1)
        }
        else{
            setNumber(number-1)
        }
    }
    return [number, addNumber, minusNuber]
}
export default useScore