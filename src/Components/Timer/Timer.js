import React, { useState, useEffect } from 'react'
import "./Timer.css"

export default function Timer({ isActive, setIsActive, mode }) {
    const [timer, setTimer] = useState({ Minutes: mode.time, Seconds: 0 })
    function Tick() {
        if (timer.Seconds === 0 && timer.Minutes === 0) {
            setIsActive(false)
        }
        if (timer.Seconds === 0) {
            setTimer({ Minutes: timer.Minutes - 1, Seconds: 59 })
        }
        else {
            setTimer({ Minutes: timer.Minutes, Seconds: timer.Seconds - 1 })
        }
    }
    useEffect(() => {
        if (isActive) {
            const timerId = setInterval(() => Tick(), 1000);
            return () => clearInterval(timerId);
        }
    });

    return (
        <div className="Timer">
            {mode.mode === "Test" ? <> <div className="Timer__Button">
                <div className="Timer__Button__Heading">
                    Time Left
                </div>
                <div className="Timer__Button__Body">
                    {timer.Minutes}m {timer.Seconds}s
                </div>
            </div></> : <> <iframe className="Spotify" src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0" width="100%" height="380" frameBorder="" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></>}

        </div>
    )
}
