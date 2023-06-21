
import './style.css'

import HeadForm from '../HeadForm';
import ServiceOpition from './ServiceOpition';
import FluxButtons from '../FluxButtons'

export default function FormStep3(){
    const services = [
        {
            title: "Online service",
            info: "Access to multiplayer",
            price: "1"
        },
        {
            title:"Large storage",
            info:"Extra 1TB of cloud save",
            price:"2"
        },
        {
            title:"Customizable profile",
            info:"Custom theme on your profile",
            price:"2"
        }
    ]

    return(
        <div className="form-step-three">
            <HeadForm 
                title="Pick add-ons"
                subTitle="Add-ons help enhanceyour gaming experience"
            />
            <div className="check-service">
                {services.map(service => {
                    return(
                        <ServiceOpition
                        title={service.title}
                        info={service.info}
                        price={service.price}
                        key={service.title}
                        />
                    )
                })}
            </div>

        </div>
    )
}


// <ServiceOpition 
// title="Online service"
// info="Access to multiplayer"
// price="1"
// />
// <ServiceOpition 
// title="Large storage"
// info="Extra 1TB of cloud save"
// price="2"
// />
// <ServiceOpition 
// title="Customizable profile"
// info="Custom theme on your profile"
// price="2"
// />
