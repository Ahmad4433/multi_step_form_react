import React, { useState } from "react";
import "./forms.css";
import MultiForm from "./MultiForm";
const FormBar = () => {
  const [step, setStep] = useState(1);

  const stepHanler = (number) => {
    if (step < 2 && number === 3) {
      return;
    }
    setStep(number);
  };

  return (
    <div className="form_bar_main">
      <div className="form_bar_container">
        <div
          onClick={() => stepHanler(1)}
          className={step >= 1 ? "filled" : "circle"}
        >
          <div className="inner_circle"></div>
        </div>
        <div className="bar">
          <div className={step >= 2 ? "inner_bar_full" : "inner_bar"}></div>
        </div>
        <div
          onClick={() => stepHanler(2)}
          className={step >= 2 ? "filled" : "circle"}
        >
          <div className="inner_circle"></div>
        </div>
        <div className="bar">
          <div className={step >= 3 ? "inner_bar_full" : "inner_bar"}></div>
        </div>
        <div
          onClick={() => stepHanler(3)}
          className={step >= 3 ? "filled" : "circle"}
        >
          <div className="inner_circle"></div>
        </div>
      </div>
      <div className="form_bar_title">
        <span className={step >= 1 ? "colored" : "light"}>step 1</span>
        <span className={step >= 2 ? "colored" : "light"}>step 2</span>
        <span className={step >= 3 ? "colored" : "light"}>step 3</span>
      </div>
      <div>
        <MultiForm setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default FormBar;
