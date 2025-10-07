// src/CalculatorNoEval.js
import React, { useState } from "react";
import "../Calculator.css";
import "../App.css";

const CalculatorNoEval = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleClick = (value) => {
    setError("");
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = calculateExpression(input);
        setInput(result.toString());
      } catch {
        setError("Invalid Expression");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const calculateExpression = (expr) => {
    const nums = [];
    const ops = [];

    const precedence = (op) => (op === "+" || op === "-" ? 1 : 2);

    const applyOp = () => {
      const b = nums.pop();
      const a = nums.pop();
      const op = ops.pop();

      switch (op) {
        case "+":
          nums.push(a + b);
          break;
        case "-":
          nums.push(a - b);
          break;
        case "*":
          nums.push(a * b);
          break;
        case "/":
          nums.push(a / b);
          break;
        default:
          throw new Error("Invalid operator");
      }
    };

    let i = 0;
    while (i < expr.length) {
      const ch = expr[i];

      if (ch === " ") {
        i++;
        continue;
      }

      if (!isNaN(ch) || ch === ".") {
        let numStr = "";
        while (i < expr.length && (!isNaN(expr[i]) || expr[i] === ".")) {
          numStr += expr[i++];
        }
        nums.push(parseFloat(numStr));
        continue;
      }

      if (["+", "-", "*", "/"].includes(ch)) {
        while (
          ops.length > 0 &&
          precedence(ops[ops.length - 1]) >= precedence(ch)
        ) {
          applyOp();
        }
        ops.push(ch);
      }
      i++;
    }

    while (ops.length > 0) applyOp();

    if (nums.length !== 1) throw new Error("Invalid expression");
    return nums[0];
  };

  return (
    <div className="calculator">
      <div className="display">{error || input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorNoEval;
