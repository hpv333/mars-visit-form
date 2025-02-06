import React from "react";

const Navigation = ({ step, nextStep, prevStep }) => {
  return (
    <div className="navigation-buttons">
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 && <button onClick={nextStep}>Next</button>}
    </div>
  );
};

export default Navigation;
