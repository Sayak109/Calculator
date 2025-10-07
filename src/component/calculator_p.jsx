import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [reset, setReset] = useState(false);

  const handleNum = (num) => {
    if (reset) {
      setDisplay(String(num));
      setReset(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const handleDot = () => {
    if (reset) {
      setDisplay("0.");
      setReset(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOp = (nextOp) => {
    const curr = parseFloat(display);

    if (prev === null) {
      setPrev(curr);
    } else if (op) {
      const result = calc(prev, curr, op);
      setDisplay(String(result));
      setPrev(result);
    }

    setReset(true);
    setOp(nextOp);
  };

  const calc = (a, b, operation) => {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return a / b;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    const curr = parseFloat(display);
    if (op && prev !== null) {
      const result = calc(prev, curr, op);
      setDisplay(String(result));
      setPrev(null);
      setOp(null);
      setReset(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setReset(false);
  };

  const handleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const Btn = ({ children, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`h-16 text-xl font-light rounded-2xl transition-colors ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-80 bg-black rounded-3xl p-6 shadow-2xl">
        <div className="mb-6 text-right">
          <div className="text-5xl font-extralight text-white overflow-hidden text-ellipsis">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <Btn
            onClick={handleClear}
            className="bg-gray-400 hover:bg-gray-300 text-black"
          >
            AC
          </Btn>
          <Btn
            onClick={handleSign}
            className="bg-gray-400 hover:bg-gray-300 text-black"
          >
            +/-
          </Btn>
          <Btn
            onClick={handlePercent}
            className="bg-gray-400 hover:bg-gray-300 text-black"
          >
            %
          </Btn>
          <Btn
            onClick={() => handleOp("÷")}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            ÷
          </Btn>

          <Btn
            onClick={() => handleNum(7)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            7
          </Btn>
          <Btn
            onClick={() => handleNum(8)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            8
          </Btn>
          <Btn
            onClick={() => handleNum(9)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            9
          </Btn>
          <Btn
            onClick={() => handleOp("×")}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            ×
          </Btn>

          <Btn
            onClick={() => handleNum(4)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            4
          </Btn>
          <Btn
            onClick={() => handleNum(5)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            5
          </Btn>
          <Btn
            onClick={() => handleNum(6)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            6
          </Btn>
          <Btn
            onClick={() => handleOp("-")}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            -
          </Btn>

          <Btn
            onClick={() => handleNum(1)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            1
          </Btn>
          <Btn
            onClick={() => handleNum(2)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            2
          </Btn>
          <Btn
            onClick={() => handleNum(3)}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            3
          </Btn>
          <Btn
            onClick={() => handleOp("+")}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            +
          </Btn>

          <Btn
            onClick={() => handleNum(0)}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white"
          >
            0
          </Btn>
          <Btn
            onClick={handleDot}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            .
          </Btn>
          <Btn
            onClick={handleEquals}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            =
          </Btn>
        </div>
      </div>
    </div>
  );
}
