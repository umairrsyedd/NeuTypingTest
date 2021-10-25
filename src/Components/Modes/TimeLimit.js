import React from 'react'
import "./TimeLimit.css"
export default function TimeLimit() {
    return (
        <>
            <div className="Modes__Time">
                <div className="Modes__Time__TimeHeading">Test Mode</div>
                <div className="Modes__Time__TimeBoxes">
                    <div className="TimeBoxes__Box TimeBoxes__1min">1m</div>
                    <div className="TimeBoxes__Box TimeBoxes__3min">2m</div>
                    <div className="TimeBoxes__Box TimeBoxes__5min">3m</div>
                </div>
            </div>
        </>
    )
}
