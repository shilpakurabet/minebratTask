/** @format */

import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>
        {state.selectedCity && state?.selectedState
          ? `You Have selected ${state?.selectedCity}, ${state?.selectedState} `
          : `Please Select State And City  `}
      </h1>
    </div>
  );
};

export default Result;
