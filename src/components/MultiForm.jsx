import React from "react";
import "./forms.css";
const MultiForm = ({ setStep, step }) => {
  const submitHandler = (event, number) => {
    event.preventDefault();
    setStep(number);
  };

  return (
    <div className="multi_form_main">
      {step === 1 && (
        <div className="form">
          <form onSubmit={(event) => submitHandler(event, 2)}>
            <div className="form_item">
              <label>name *</label>
              <input required type="text" placeholder="enter your name" />
            </div>
            <div className="form_item">
              <label>detail *</label>
              <textarea required rows={5} placeholder="type here..." />
            </div>
            <button className="form_action">Next</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="form">
          <form onSubmit={(event) => submitHandler(event, 3)}>
            <div className="form_item">
              <label>name *</label>
              <input required type="text" placeholder="enter your name" />
            </div>
            <div className="form_item">
              <label>email *</label>
              {/* <textarea required rows={5} placeholder="type here..." /> */}
              <input required type="email" placeholder="enter your email" />
            </div>
            <button className="form_action">Next</button>
          </form>
        </div>
      )}
      {step >= 3 && (
        <div className="form">
          <form onSubmit={(event) => submitHandler(event, 4)}>
            <div className="form_item">
              <label>name *</label>
              <input required type="text" placeholder="enter your name" />
            </div>
            <div className="form_item">
              <label>email *</label>
              {/* <textarea required rows={5} placeholder="type here..." /> */}
              <input required type="email" placeholder="enter your email" />
            </div>
            <div className="form_item">
              <label>mobile number *</label>
              {/* <textarea required rows={5} placeholder="type here..." /> */}
              <input required type="text" placeholder="enter your mobile number" />
            </div>
            <button className="form_action">
              {step < 3 ? "Next" : "Save"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MultiForm;
