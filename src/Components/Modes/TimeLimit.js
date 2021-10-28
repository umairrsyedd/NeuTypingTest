import React, { useState } from 'react'
import "./TimeLimit.css"
export default function TimeLimit({ changeTimeLimit, modeType }) {
    const [timeLimit, setTimeLimit] = useState(1)
    const handleChange = (time) => {
        setTimeLimit(time)
        changeTimeLimit(time)
    }
    return (
        <>
            <div className="Modes__Time">{
                <div className="Modes__Time__TimeBoxes">
                    {
                        modeType === "Test" ? <> <button value='1' className={timeLimit == 1 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)}>1m</button>
                            <button value='3' className={timeLimit == 3 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)}>3m</button>
                            <button value='5' className={timeLimit == 5 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)} >5m</button>
                        </> : null
                    }

                </div>


            }

            </div>
        </>
    )
}
{/* <button value='1' className={timeLimit == 1 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)}>1m</button>
                    <button value='3' className={timeLimit == 3 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)}>3m</button>
                    <button value='5' className={timeLimit == 5 ? 'TimeBoxes__Box  TimeBoxes--Active ' : 'TimeBoxes__Box TimeBoxes--InActive'} onClick={(e) => handleChange(e.target.value)} >5m</button> */}