import React, {useContext} from "react";

import './style.css'

import {FormContext} from '../../context/form'

export default function Step({step, info}){

    const [formState] = useContext(FormContext); 

    return(
        <div className="step-container">
            <div className={formState.formStep === step ? "step step-selected" : "step"}> {step} </div>
            <div className="info-step">
                <span> {`Step ${step}`} </span>
                <p> {info} </p>
            </div>
        </div>
    )
}