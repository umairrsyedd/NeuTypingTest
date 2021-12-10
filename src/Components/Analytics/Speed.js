import React, { useState, useEffect } from 'react'

export default function Speed({ analytics, timeUsed }) {
    const [speed, setSpeed] = useState(0)
    useEffect(() => {
        let correctCharsTyped = analytics.correctCharsTyped
        let words = 0
        if (correctCharsTyped >= 5) {
            words = correctCharsTyped / 5
        }
        let time = timeUsed
        setSpeed(Math.round((words / time) * 60))
    }, [timeUsed, analytics])
    return (
        <div className="Analytics__Boxes ">
            <div className="Analytics__Box">
                <div className="Analytics__Box__Title">
                    <span>Speed</span>
                </div>
                <div className="Analytics__Box__Content">
                    {speed === 'NaN' ? 0 : speed} WPM
                </div>
            </div>
        </div>
    )
}
Speed.defaultProps = {
    analytics: {
        correctCharsTyped: 0,
        incorrectCharsTyped: 0,
    },
    timeUsed: 0,
}
