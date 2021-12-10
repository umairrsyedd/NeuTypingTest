import React, { useState } from 'react'
import Accuracy from './Accuracy'
import Speed from './Speed'
import Errors from './Errors'
import "./Analytics.css"
export default function Analytics({ modeType, analytics, timeUsed }) {
    return (
        <div className="Analytics">
            {modeType.mode === "Test" ?
                <>
                    <Speed analytics={analytics} timeUsed={timeUsed} />
                </> :
                <></>}

            <Accuracy analytics={analytics} />
            <Errors errors={analytics.wrongCharsTyped} />
        </div>
    )
}
