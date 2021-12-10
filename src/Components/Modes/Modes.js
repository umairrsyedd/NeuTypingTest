import React, { useState } from 'react'
import TimeLimit from './TimeLimit.js'
import Difficulty from './Difficulty.js'
import "./Modes.css"
export default function Modes({ mode, setMode }) {
    const [modeType, setModeType] = useState(mode.mode)
    function changeTimeLimit(timeLimit) {
        setMode({ ...mode, time: timeLimit })
    }
    function changeDifficulty(difficulty) {
        setMode({ ...mode, difficulty: difficulty })
    }
    function handleChange(e) {
        setModeType(e)
        setMode({ ...mode, mode: e })

    }
    return (
        <div className="Modes">
            <div className="Modes__Heading__Container">
                <button value="Test" className={modeType === 'Test' ? 'Modes__Heading Modes__Heading--Active' : 'Modes__Heading Modes__Heading--InActive'} onClick={(e) => { handleChange(e.target.value) }}>Test Mode</button>
                <button value="Practice" className={modeType === 'Practice' ? 'Modes__Heading Modes__Heading--Active' : 'Modes__Heading Modes__Heading--InActive'} onClick={(e) => { handleChange(e.target.value) }}>Practice Mode</button>
            </div>
            <TimeLimit changeTimeLimit={changeTimeLimit} modeType={modeType} />
            <Difficulty changeDifficulty={changeDifficulty} />
        </div>
    )
}
