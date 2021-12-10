import React from 'react'
import "./Keyboard.css"
import { ReactComponent as Keyboard_SVG } from 'Assets/Keyboard.svg'
export default function Keyboard({ keyPressed }) {
    return (
        <div className="Keyboard">
            <Keyboard_SVG />
        </div>
    )
}
