import React from "react";

import './style.css';
import ConfirmImg from '../../../assets/images/icon-thank-you.svg'

export default function FormStep5(){
    return(
        <div className="form-step-five">
            <img src={ConfirmImg} alt="subscrition confirmed" />
            <h2>Thank you!</h2>
            <p>
                Thanks for confirm your subscription! We hope you have
                fun using our platform, If you ever need support, please feel
                free to email us at support@loremgaming.com.
            </p>
        </div>
    )
}