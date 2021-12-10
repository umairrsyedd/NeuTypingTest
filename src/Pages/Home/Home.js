import React, { useState, useEffect } from 'react'
import "./Home.css"
import Modes from "Components/Modes"
import Analytics from "Components/Analytics"
import TextBox from "Components/TextBox"
import Keyboard from "Components/Keyboard"
import Timer from 'Components/Timer'
function Home() {
    const [mode, setMode] = useState({ mode: "Test", time: 1, difficulty: "Easy" })
    const [analytics, setAnalytics] = useState({ correctCharsTyped: 0, wrongCharsTyped: 0 })
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
    }, [isActive, mode])

    return (
        <div className="Home">
            <div className="Home-Modes">
                <Modes mode={mode} setMode={setMode} />
            </div>
            <div className="Home-Main">
                <Analytics modeType={mode} analytics={analytics} />
                <TextBox mode={mode} setAnalytics={setAnalytics} setIsActive={setIsActive} isActive={isActive} />
                <Keyboard />
            </div>
            <div className="Home-Timer">
                <Timer mode={mode} totalTime={mode.time} isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
    )
}
// Analytics - timeUsed={timeUsed}
// Timer - setTimeUsed={setTimeUsed}
export default Home