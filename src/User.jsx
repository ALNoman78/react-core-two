import { useEffect, useState } from "react"

export default function User(){
    const [users , setUsers] = useState([])

    // use effect with dependency

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User Data : {users.length}</h3>
        </div>
    )
}