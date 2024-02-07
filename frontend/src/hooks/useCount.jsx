import { useState } from "react"

function useCount(lastIndex){
    const [count, setCount]=useState(1)
    const nexts=()=>{
        if (lastIndex > count) {
            setCount(count + 1)
            console.log(count);
        }
          else {
            setCount(1)
        }
    }
    const prev=()=>{
        if (count === 1) {
            setCount(lastIndex)
          }
          else {
            setCount(count-1)
          }
    }
    return [count, nexts, prev]
}

export default useCount