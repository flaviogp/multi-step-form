import { useContext, useState } from 'react'

import './style.css'

import {FormContext} from '../../../context/form'

export default function FluxButtons(){
    const [formState, dispatch] = useContext(FormContext);


    const handleClick = () => {
        let err = 0;
        if(formState.formStep === 1 && formState.name.length < 3){
            err++;
            dispatch({ type: "ERROR", payload: 'Nome precisa ter pelo menos 3 caracteres' })
        }
        const validEmailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(formState.formStep === 1 && !validEmailReg.test(formState.email)){
            err++;
            dispatch({ type: "ERROR", payload: 'insira um email valido!' })
        }
        const validPhoneReg = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
        if(formState.formStep === 1 && !validPhoneReg.test(formState.phone)){
            err++;
            dispatch({ type: "ERROR", payload: 'insira um telefone valido!' })
        }

        if(formState.formStep === 2 && !formState.plan.selected){
            err++;
            dispatch({ type: "ERROR", payload: 'Selecione um plano' })
        }


        if(err !== 0) return false
        dispatch({ type: "ERROR", payload: '' })
        return `${formState.formStep !== 4 ? dispatch({type: "NEXT_STEP"})  : dispatch({type: "SEND_FORM"})}`
    }
    return(
        <div className="buttons">
            {
                formState.formStep !== 1 ?
                <button className="back" 
                        onClick={() => dispatch({type: "PREVIOUS_STEP"})}>Go Back</button> :
                <button disabled >Go Back</button>

            }

            <button className={ formState.formStep !== 4 ? "next" : "confirm" } 
                    onClick={() => handleClick()}>
                        { formState.formStep !== 4 ? "Next Step" : "Confirm" }
            </button>
        </div>

    )
}