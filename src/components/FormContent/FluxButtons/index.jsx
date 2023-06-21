import { useContext } from 'react'

import './style.css'

import {FormContext} from '../../../context/form'

export default function FluxButtons(){
    const [formState, dispatch] = useContext(FormContext);

    const checkErrror = () => {
        return formState.phone !== number ? console.log('a') : console.log('b')
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
                    onClick={() => `${formState.formStep !== 4 ? dispatch({type: "NEXT_STEP"})  : dispatch({type: "SEND_FORM"})}`}>
                        { formState.formStep !== 4 ? "Next Step" : "Confirm" }
            </button>
        </div>

    )
}