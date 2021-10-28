import React, { useState } from 'react'
import "./Difficulty.css"
export default function Difficulty({ changeDifficulty }) {
    const [difficulty, setDifficulty] = useState("Easy")
    const handleChange = (difficulty) => {
        setDifficulty(difficulty)
        changeDifficulty(difficulty)
    }
    return (
        <>
            <div className="Modes__Difficulty">
                <button value="Easy" className={difficulty === 'Easy' ? 'Modes__Difficulty__Box Difficulty--Active' : 'Modes__Difficulty__Box Difficulty--InActive'} onClick={(e) => { handleChange(e.target.value) }}>Easy</button>
                <button value="Medium" className={difficulty === 'Medium' ? 'Modes__Difficulty__Box Difficulty--Active' : 'Modes__Difficulty__Box Difficulty--InActive'} onClick={(e) => { handleChange(e.target.value) }}>Medium</button>
                <button value="Hard" className={difficulty === 'Hard' ? 'Modes__Difficulty__Box Difficulty--Active' : 'Modes__Difficulty__Box Difficulty--InActive'} onClick={(e) => { handleChange(e.target.value) }}>Hard</button>
            </div>
        </>
    )
}
