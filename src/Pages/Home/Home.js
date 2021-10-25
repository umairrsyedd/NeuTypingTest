import React from 'react'
import "./Home.css"
import Modes from "Components/Modes"
import Analytics from "Components/Analytics"
import TextBox from "Components/TextBox"
import Keyboard from "Components/Keyboard"

function Home() {
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
export default Home