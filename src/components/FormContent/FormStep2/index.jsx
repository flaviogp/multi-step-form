import { useContext } from 'react';

import './style.css'
import arcadeImg from '../../../assets/images/icon-arcade.svg'
import advancedImg from '../../../assets/images/icon-advanced.svg'
import proImg from '../../../assets/images/icon-pro.svg'

import Plan from './Plan'
import HeadForm from '../HeadForm';
import FluxButtons from '../FluxButtons'

import { FormContext } from '../../../context/form';
export default function FormStep2(){
    const [formState, dispatch] = useContext(FormContext);

    return(
        <div className="form-step-two">
            <HeadForm 
                title="Slect your plan"
                subTitle="You have the option of monthly or yearly billing"
            />
            <div className="check-plans">
                <Plan plan='arcade' 
                      price={`R$ ${formState.mounthly === true ? "15,00" : "45,00"}`} 
                      img={arcadeImg}/>
                <Plan plan='advanced'
                      price={`R$ ${formState.mounthly === true ? "20,00" : "50,00"}`} 
                      img={advancedImg}/>
                <Plan plan='pro'
                      price={`R$ ${formState.mounthly === true ? "25,00" : "55,00"}`} 
                      img={proImg}/>
            </div>
            <div className="check-mounthly-yearly">
                <p>Mounthly</p>
                <input type="checkbox" name="" id="mounthly-yearly" onChange={()=> dispatch({type: "CHANGE_METHOD"})}/>
                <p>Yearly</p>
            </div>
        </div>
    )
}