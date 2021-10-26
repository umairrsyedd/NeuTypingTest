import React from 'react'
import "./Timer.css"

export default function Timer() {
    return (
        <div className="Timer">
            <div className="Timer__Button">
                <div className="Timer__Button__Heading">
                    Time Left
                </div>
                <div className="Timer__Button__Body">
                    1m:30s
                </div>
            </div>
        </div>
    )
}
