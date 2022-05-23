import React from 'react';

const Buttons = ({ currentStep, onPrevStep, onNextStep, onSubmit }) => {
  return (
    <div className="button-bar">
      <button
        className="btn-prev"
        disabled={currentStep === 1}
        onClick={onPrevStep}
      >
        Back
      </button>
      {currentStep !== 4 && (
        <button
          className="btn-next"
          disabled={currentStep === 4}
          onClick={onNextStep}
        >
          Next
        </button>
      )}
      {currentStep === 4 && (
        <button
          className="btn-next"
          disabled={currentStep !== 4}
          onClick={onSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Buttons;
