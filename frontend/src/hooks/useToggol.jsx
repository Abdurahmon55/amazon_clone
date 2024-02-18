import { useState } from "react";

function useToggol(){
    const [toggol, setToggol]=useState(false)

    const Toggoler=()=>{
        setToggol(!toggol)
    }
    return [toggol, Toggoler]
}

export default useToggol