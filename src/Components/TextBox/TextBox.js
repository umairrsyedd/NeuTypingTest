import React, { useState, useEffect } from 'react'
import { EasyWords } from 'Data/EasyWords'
import GenerateText from 'Utils/GenerateText';
import Words from './Words.js'
import "./TextBox.css"
import AddClasses from 'Utils/AddClasses.js';
import RemoveClasses from 'Utils/RemoveClasses.js';
export default function TextBox({ mode, setAnalytics, setIsActive, isActive }) {
    const [text, setText] = useState(GenerateText(EasyWords));
    const [current, setCurrent] = useState({ Word: 0, Letter: 0 });
    const [inputEnd, setInputEnd] = useState(false)

    function reset() {
        setText(GenerateText(EasyWords));
        setCurrent({ Word: 0, Letter: 0 });
        setInputEnd(false)
        document.querySelectorAll('.Letter--Correct').forEach(word => {
            word.classList.remove('Letter--Correct')
        })
        document.querySelectorAll('.Letter--Wrong').forEach(word => {
            word.classList.remove('Letter--Wrong')
        })
    }
    function KeyHandler({ key }) {
        if (current.Word === 0 && current.Letter === 0) {
            setIsActive(true)
        }
        else if (current.Word === text.length - 1 && current.Letter === text[current.Word].length - 1) {
            setInputEnd(true)
            reset()
        }
        if (!inputEnd && isActive) {
            key === " " ? key = "␣" : key = key
            if (key === text[current.Word][current.Letter]) {
                AddClasses(current, ['Letter--Correct'])
                // setAnalytics(analytics => {
                //     return {
                //         ...analytics,
                //         correctCharsTyped: analytics.correctCharsTyped + 1
                //     }
                // })
                if (current.Letter === text[current.Word].length - 1) {
                    setCurrent({ Word: current.Word + 1, Letter: 0 })
                }
                else {
                    setCurrent({ Word: current.Word, Letter: current.Letter + 1 })
                }
            }
            else {
                AddClasses(current, ['Letter--Wrong'])
                // setAnalytics(analytics => {
                //     return {
                //         ...analytics,
                //         wrongCharsTyped: analytics.wrongCharsTyped + 1
                //     }
                // })
            }

        }
    }

    return (
        <div className="TextBox" tabIndex="0" onKeyPress={KeyHandler}>
            <div className="TextBox__Wrapper">
                <Words text={text} />
            </div>
        </div >
    )
}
