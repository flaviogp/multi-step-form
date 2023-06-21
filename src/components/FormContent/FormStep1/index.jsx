import React, { useContext } from "react";

import "./style.css";

import HeadForm from "../HeadForm";

import { FormContext } from "../../../context/form";

export default function FormStep1() {
  const [formState, dispatch] = useContext(FormContext);
  return (
    <div className="form-step-one">
      <HeadForm
        title="Personal info"
        subTitle="Please provide your name, email address, and phone number"
      />
      <form className="form" action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) =>
            dispatch({ type: "CHANGE_NAME", payload: e.target.value })
          }
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={(e) =>
            dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
          }
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          placeholder="(dd)99999-9999"
          onChange={(e) =>
            dispatch({ type: "CHANGE_PHONE", payload: e.target.value })
          }
        />
      </form>
    </div>
  );
}
