import { createContext, useReducer } from "react";

const initialState = {
  formStep: 1,
  name: "",
  email: "",
  phone: "",
  mounthly: true,
  plan: {
    name: "",
    price: "",
  },
  services:[],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, formStep: state.formStep + 1 };
    case "PREVIOUS_STEP":
      if(state.formStep === 4){
        return { ...state, formStep: state.formStep - 1, services:[]
        };
      }
      if(state.formStep === 3){
        return { 
          ...state, 
          formStep: state.formStep - 1,
          plan: {
            name: "",
            price: "",
          }      
        };
      }
      if(state.formStep === 2){
        return { 
          ...state, 
          formStep: state.formStep - 1,
          name: "",
          email: "",
          phone: ""        
        };
      }
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_PHONE":
      return { ...state, phone: action.payload };
    case "CHANGE_METHOD":
      return {
        ...state,
        mounthly: !state.mounthly,
      };
    case "CHANGE_PLAN":
      let newState = { ...state, plan: { name: action.payload } };
      if (action.payload === "arcade") {
        if (state.mounthly === true) {
          newState = { ...newState, plan: { ...newState.plan, price: 15 } };
        } else {
          newState = { ...newState, plan: { ...newState.plan, price: 45 } };
        }
      } else if (action.payload === "advanced") {
        if (state.mounthly === true) {
          newState = { ...newState, plan: { ...newState.plan, price: 20 } };
        } else {
          newState = { ...newState, plan: { ...newState.plan, price: 50 } };
        }
      } else if (action.payload === "pro") {
        if (state.mounthly === true) {
          newState = { ...newState, plan: { ...newState.plan, price: 25 } };
        } else {
          newState = { ...newState, plan: { ...newState.plan, price: 55 } };
        }
      }
      return newState;

    case "ADD_SERVICE":
      const service = action.payload
      return {
        ...state,
        services: [...state.services, service]
      }
    case "REMOVE_SERVICE":
      const oldServices = [...state.services]
      const newServices = oldServices.filter((arr) => arr['desc'] !== action.payload);
      return {
        ...state,
        services: newServices
      }
    case "RESELECT_PLAN" :
      return{
        ...state, 
        formStep: 2,  
        plan: {
          name: "",
          price: "",
        },
        services:[] 
      }
    case "SEND_FORM" :{
      console.log(state)
      return { ...state, formStep: state.formStep + 1 };
      }

    default:
      return state;
  }

};

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const value = useReducer(formReducer, initialState);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
