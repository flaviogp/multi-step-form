import React, { useContext } from "react";

import './style.css';

import HeadForm from '../HeadForm';

import FluxButtons from '../FluxButtons'
import { FormContext } from "../../../context/form";
export default function FormStep4(){
    const [formState, dispatch] = useContext(FormContext)

    const totalPrice = () => {
        const plan = parseFloat(formState.plan.price);
        let priceServices = [];
        let totalServices = 0
        if(formState.services.length > 1){
            formState.services.map(service => priceServices.push(parseFloat(service.price)))
            totalServices = priceServices.reduce((acc, value) => acc += value)
        }
        return totalServices === 0 ? 0 : totalServices + plan;
    }
    return(
        <div className="form-step-four">
            <HeadForm 
                title="Finishing up"
                subTitle="Double-check everything looks OK before confirming"
            />
            <div className="chosen_plans">
                <div className="chosen_plan">
                    <div>
                        <h3>{`${formState.plan.name} (${formState.mounthly ? "Mounthly" : "Yearly"})`}</h3>
                        <button onClick={() => dispatch({type:"RESELECT_PLAN"})}>Change</button>
                    </div>
                    <span>{`+$${formState.plan.price}/${formState.mounthly ? "mo" : "yr"}`}</span>
                </div>
                <div className="chosen_addons">
                    {formState.services && formState.services.map((service, index) =>{
                        return(
                            <div key={`${service}${index}`}>
                                <p>{service.desc}</p>
                                <span>{`+$${service.price}/mo`}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="total_price">
                <p>{`Total (per ${formState.mounthly ? "mounth" : "year"})`}</p>
                <span>{`$${totalPrice()}/${formState.mounthly ? "mo" : "yr"}`}</span>
            </div>
        </div>
    )
}