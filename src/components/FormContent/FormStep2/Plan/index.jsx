import { useContext } from 'react';
import './style.css';

import { FormContext } from '../../../../context/form';
export default function Plan({plan, price, img}){
    const [formState, dispatch] = useContext(FormContext);
    return(
        <div className="plan">
                <input type="radio" name="radio" id={plan} onChange={(e)=> dispatch({type: "CHANGE_PLAN", payload: e.target.id})}/>
            <label htmlFor={plan}>
                <img src={img} alt={plan} />
                <div className="info">
                    <h2>{plan}</h2>
                    <p>{price}</p>
                </div>
            </label>
        </div>
    )
}