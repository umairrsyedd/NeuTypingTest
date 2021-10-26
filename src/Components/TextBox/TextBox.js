import React, { useState, useEffect } from 'react'
import { EasyWords } from 'Data/EasyWords'
import GenerateText from 'Utils/GenerateText';
import Words from './Words.js'
import "./TextBox.css"
import AddClasses from 'Utils/AddClasses.js';
import RemoveClasses from 'Utils/RemoveClasses.js';
export default function TextBox({ mode, handleAnalytics, handleKey, handleTimer }) {
    const [text, setText] = useState(GenerateText(EasyWords));
    const [current, setCurrent] = useState({ Word: 0, Letter: 0 });
    const [inputEnd, setInputEnd] = useState(false)
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [analytics, setAnalytics] = useState({ Speed: 0, Accuracy: 0, WPM: 0, Errors: 0 })
    function toggleActive() {
        setIsActive(!isActive)
    }
    function KeyHandler({ key }) {
        let correctLetter = false;
        handleKey(key);
        if (current.Word === text.length - 1 && current.Letter === text[current.Word].length - 1) {
            setInputEnd(true)
            toggleActive()
        }
        if (!inputEnd) {
            // AddClasses(current, ['Letter--Active'])
            // RemoveClasses(current, ['Letter--Active'])
            if (key === ' ') {
                key = '␣'
            }

            // Checks If the key pressed is the same as the current letter
            if (key === text[current.Word][current.Letter]) {
                AddClasses(current, ['Letter--Correct'])
                setAnalytics((prev) => {
                    return {
                        ...prev,
                        Errors: prev.Errors + 1
                    }
                })
                handleAnalytics(analytics)
                // Increments the Word and Letter
                if (current.Letter === text[current.Word].length - 1) {
                    setCurrent({ Word: current.Word + 1, Letter: 0 })
                } else {
                    setCurrent({ Word: current.Word, Letter: current.Letter + 1 })
                }

                console.log(current)
            }
            else {
                AddClasses(current, ['Letter--Wrong'])
                setAnalytics((prev) => {
                    return {
                        ...prev,
                    }
                })
            }
        }
    }
    return (
        <div className="TextBox" tabIndex="0" onKeyPress={KeyHandler} >
            <div className="TextBox__Wrapper">
                <Words text={text} />
            </div>
        </div >
    )
}
