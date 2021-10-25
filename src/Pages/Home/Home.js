import React, { useState, useEffect } from 'react'
import "./Home.css"
// Grid 1 
import Modes from "Components/Modes"
// Grid 2
import Analytics from "Components/Analytics"
import TextBox from "Components/Content"
import Keyboard from "Components/Keyboard"

export default function Home() {
    return (
        <div className="Home">
            <div className="Home-Modes">
                <Modes />
            </div>
            <div className="Home-Main">
                <Analytics />
                <TextBox />
                <Keyboard />
            </div>
        </div>
    )
}
