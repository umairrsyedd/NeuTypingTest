import React, { useState, useEffect } from 'react'

export default function Accuracy({ analytics }) {
    const [accuracy, setAccuracy] = useState(0)
    useEffect(() => {
        let correctCharsTyped = analytics.correctCharsTyped
        let wrongCharsTyped = analytics.wrongCharsTyped
        let accuracy = correctCharsTyped / (correctCharsTyped + wrongCharsTyped) * 100
        setAccuracy(accuracy.toFixed(1))
    }, [analytics])
    return (
        <div className="Analytics__Boxes ">
            <div className="Analytics__Box">
                <div className="Analytics__Box__Title">
                    <span>Accuracy</span>
                </div>
                <div className="Analytics__Box__Content">
                    {accuracy === 'NaN' ? 0 : accuracy}%
                </div>
            </div>
        </div>
    )
}
Accuracy.defaultProps = {
    accuracy: 0
}