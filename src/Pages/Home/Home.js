import React, { useState, useEffect } from 'react'
import "./Home.css"
import Modes from "Components/Modes"
import Analytics from "Components/Analytics"
import TextBox from "Components/TextBox"
import Keyboard from "Components/Keyboard"
import Timer from 'Components/Timer'
function Home() {
    const [mode, setMode] = useState({ mode: "Test", time: 1, difficulty: "Easy" })
    const [timer, setTimer] = useState(0)
    const [key, setKey] = useState("")
    const [analytics, setAnalytics] = useState({ Speed: 0, Accuracy: 0, WPM: 0, Errors: 0 })

    const handleMode = (mode) => {
        setMode(mode)
    }
    const handleAnalytics = (analytics) => {
        setAnalytics(analytics)
        console.log(analytics)
    }
    const handleKey = (key) => {
        console.log(key)
        setKey(key)
    }
    const handleTimer = (timer) => {
        setTimer(timer)
    }
    return (
        <div className="Home">
            <div className="Home-Modes">
                <Modes handleMode={handleMode} />
            </div>
            <div className="Home-Main">
                <Analytics analytics={analytics} />
                <TextBox mode={mode} handleAnalytics={handleAnalytics} handleKey={handleKey} handleTimer={handleTimer} />
                <Keyboard key={key} />
            </div>
            <div className="Home-Timer">
                <Timer timer={timer} />
            </div>
        </div>
    )
}
export default Home