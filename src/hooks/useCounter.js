import { useState } from "react"



export const useCounter =(initialValue = 10) =>{
    const [counter, setcounter] = useState(initialValue)

    const increment = (value) =>{
        setcounter(counter + value)
    }

    const decrement = () =>{
        if(counter <= 0) return
        setcounter(counter - 1)
    }

    const reset =() => {
        setcounter(initialValue)
    }
    return{
        increment,
        decrement,
        reset,
        counter
    }
}