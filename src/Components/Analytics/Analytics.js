import React from 'react'
import Accuracy from './Accuracy'
import Speed from './Speed'
import Errors from './Errors'
export default function Analytics() {
    return (
        <div className="Analytics">
            <Speed />
            <Errors />
            <Accuracy />
        </div>
    )
}
