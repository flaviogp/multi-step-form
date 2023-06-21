import React, {useState, useContext} from 'react';
import './style.css';


import { FormContext } from '../../../../context/form';
export default function ServiceOpition({title, info, price, check}){
    const [isChecked, setIsChecked] = useState(false)
    const [formState, dispatch] = useContext(FormContext)

    return(
        <label className={!isChecked ? "service" : "service service-active"} htmlFor={title}>
            <input type="checkbox" name="" id={title} 
                onChange={(e) => {
                    setIsChecked(!isChecked)
                    const data = {desc: title, price: price}
                    if(e.target.checked){
                        dispatch({type:"ADD_SERVICE", payload: data})
                    }else{
                        dispatch({type:"REMOVE_SERVICE", payload: data.desc})
                    }
                }}
            />
            <div className="service-info">
                <p>{title}</p>
                <span>{info}</span>
            </div>
            <span className="price">{`+$${price}/mo`}</span>
        </label>
    )
}