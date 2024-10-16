import { useState } from "react"

export default function Counter () {
    // const [count , setCount] = useState(0)
    // const handleAdd = () => {
    //     const newCount = count + 1;
    //     setCount(newCount)
    // }
    const [count , setCount] = useState(0)
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount)
    }
    return (
        <div style={{border : '2px solid tomato'}}>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}