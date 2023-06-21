import React, {useContext} from "react";

import './style.css';

import {FormContext} from '../../context/form';
import FluxButtons from './FluxButtons'

import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";

export default function FormContent(){
    const [formState] = useContext(FormContext)

    return(
        <div className="form-content">
            { formState.formStep === 1 && <FormStep1 />}
            { formState.formStep === 2 && <FormStep2 />}
            { formState.formStep === 3 && <FormStep3 />}
            { formState.formStep === 4 && <FormStep4 />}
            { formState.formStep === 5 && <FormStep5 />}
            {formState.formStep <= 4 && <FluxButtons />}
        </div>
    )
}