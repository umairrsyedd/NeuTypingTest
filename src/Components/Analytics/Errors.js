import React, { useState } from 'react'

export default function Errors({ errors }) {
    return (
        <div className="Analytics__Boxes ">
            <div className="Analytics__Box">
                <div className="Analytics__Box__Title">
                    <span>Errors</span>
                </div>
                <div className="Analytics__Box__Content">
                    {errors}
                </div>
            </div>
        </div>
    )
}
//default props
Errors.defaultProps = {
    errors: 0
}