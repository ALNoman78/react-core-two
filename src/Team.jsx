import { useState } from "react"

export default function Team() {

    const teamStyle = {
        margin: '14px',
        padding: '14px',
        border: '2px solid yellow',
        borderRadius: '14px'
    }
    const [team, setTeam] = useState(11)
    const addHandler = () => {
        const newPlayer = team + 1
        setTeam(newPlayer)
    }
    const removePlayer = () => {
        // const newPlayer = team - 1;
        // setTeam(newPlayer)
        setTeam(team - 1)
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button onClick={addHandler}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}