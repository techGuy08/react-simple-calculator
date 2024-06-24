import "./App.css";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
function App() {
  const [output, setOutput] = useState("");
  const [operator, setOperator] = useState("");
  const [prevVal, setPrevVal] = useState(null);
  const [formula, setFormula] = useState("");
  const [isEqual, setIsEqual] = useState(false);
  const projectName = "javascript-calculator";
  const handleNumberClick = function (e) {
    const value = e.target.innerText;
    let screen = output;
    if (isEqual) {
      screen = "";
      setIsEqual(false);
      setFormula("");
      setOperator("");
    }
    if (value === "." && !screen.toString().includes(".")) {
      if (Number(screen)) {
        screen += ".";
      } else {
        screen = "0.";
      }
    }
    if (
      (Number(screen) === 0 &&
        screen[screen.length - 1] !== "." &&
        value !== ".") ||
      Number.isNaN(Number(screen))
    ) {
      screen = value;
    } else if (value !== ".") {
      screen += value;
    }

    setOutput(screen);
  };
  const handleOperatorClick = function (e) {
    const op = {
      "+": "+",
      "/": "/",
      x: "*",
      "-": "-",
    };
    const value = e.target.innerText;
    let num = Number(output);
    if (operator === "") {
      setFormula(Number(output));
    } else {
      if (!Object.values(op).includes(output)) {
        if (!prevVal) {
          setFormula(formula + operator + num);
        } else {
          let trailEq = num === 0 ? "" : operator + num;
          setFormula(prevVal + trailEq);
          setPrevVal("");
          setIsEqual(false);
        }
      }
    }
    setOutput(op[value]);
    setOperator(op[value]);
  };
  const handleEqualsClick = (e) => {
    let value = output;
    let isEmpty = formula.length === 0;

    if (isEmpty) {
      setFormula(value);
      setIsEqual(true);
    } else if (!isEqual) {
      if (Number.isNaN(Number(output))) {
        return false;
      }
      let eq = formula + operator + output;
      if (!Number.isNaN(Number(output))) {
        let res = eval(eq);
        setFormula(eq + "=" + res);
        setOutput("");
        setPrevVal(res);
        setIsEqual(true);
      } else {
        let res = eval(eq);
        setFormula(res);
      }
    }
  };
  const handleClearClick = (e) => {
    setFormula("");
    setIsEqual(false);
    setOperator("");
    setOutput("");
    setPrevVal("");
  };
  return (
    <div className="app">
      <div className={`${projectName}`}>
        <div className="calculator-head">
          <div className="formula">{formula}</div>
          <div className="output" id="display">
            {output}
          </div>
        </div>
        <div className="calculator-body">
          <Buttons
            output={output}
            onNumberClick={handleNumberClick}
            onOperatorClick={handleOperatorClick}
            onEqualsClick={handleEqualsClick}
            onClearClick={handleClearClick}
          />
        </div>
      </div>
      <div className="footer">
        <div class="author">
          Designed and Coded By <br />
          <a
            href="https://github.com/techGuy08"
            target="_blank"
            rel="noreferrer"
          >
            Amine S.
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
