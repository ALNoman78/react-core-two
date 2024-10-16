import { useEffect, useState } from "react"
import './Friends.css'
import Bro from "./Bro";

export default function Friends () {
    const [user , setUser] = useState([]);
    
    //  use effect

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div className="box">
            <h3>Friends Data : {user.length} </h3>
            {
                user.map((bhai) => <Bro friend={bhai}></Bro>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4.set loaded data to state // 16 line
*/