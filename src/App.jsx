import React from "react";
import Calculator from "./component/calulator";
import Calculator_p from "./component/calculator_p";
import CalculatorNoEval from "./component/calculator_02";

const App = () => {
  return (
    <div>
      <h1>Calculator</h1>
      {/* <Calculator /> */}
      <CalculatorNoEval />
      {/* <Calculator_p /> */}
    </div>
  );
};

export default App;
