import React from 'react'
import TimeLimit from './TimeLimit.js'
import Difficulty from './Difficulty.js'
import "./Modes.css"
export default function Modes() {
    return (
        <div className="Modes">
            <TimeLimit />
            <Difficulty />
        </div>
    )
}
