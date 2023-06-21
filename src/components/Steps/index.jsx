import React from "react";
import './style.css'

import Step from '../Step'

export default function Steps(){
    return(
        <div className="steps">
            <div className="step-content">
                <Step step={1} info={"Your info"}/>
                <Step step={2} info={"Select Plan"}/>
                <Step step={3} info={"Add-Ons"}/>
                <Step step={4} info={"Summary"}/>
            </div>

        </div>
    )
}