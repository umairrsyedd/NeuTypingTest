import React, { useState, useEffect } from 'react'
import "./Home.css"
import Modes from "Components/Modes"
import Analytics from "Components/Analytics"
import TextBox from "Components/TextBox"
import Keyboard from "Components/Keyboard"
import Timer from 'Components/Timer'
function Home() {
    const [mode, setMode] = useState({ mode: "Test", time: 1, difficulty: "Easy" })
    const [timeLeft, setTimeLeft] = useState(mode.time)
    const [key, setKey] = useState("")
    const [analytics, setAnalytics] = useState({ Speed: 0, Accuracy: 0, WPM: 0, Errors: 0 })

    return (
        <div className="Home">
            <div className="Home-Modes">
                <Modes mode={mode} setMode={setMode} />
            </div>
            <div className="Home-Main">
                <Analytics analytics={analytics} />
                <TextBox mode={mode} setAnalytics={setAnalytics} setKey={setKey} setTimeLeft={setTimeLeft} />
                <Keyboard keyPressed={key} />
            </div>
            <div className="Home-Timer">
                <Timer timeLeft={timeLeft} />
            </div>
        </div>
    )
}
export default Home