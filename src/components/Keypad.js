import React from "react";
import { useDispatch } from "react-redux";
import { buttonClicked, clear, result } from "../redux/actions/inputActions";

function Keypad(props) {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(buttonClicked(value));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleResult = () => {
    dispatch(result());
  };

  return (
    <div id="keypad">
      <div className="column left">
        <button id="clear" className="ac" onClick={() => handleClear()}>
          AC
        </button>
        <button
          id="divide"
          className="small op"
          onClick={() => handleClick("/")}
        >
          /
        </button>

        <button
          id="seven"
          className="small num"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          id="eight"
          className="small num"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          id="nine"
          className="small num"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          id="four"
          className="small num"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          id="five"
          className="small num"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button id="six" className="small num" onClick={() => handleClick("6")}>
          6
        </button>
        <button id="one" className="small num" onClick={() => handleClick("1")}>
          1
        </button>
        <button id="two" className="small num" onClick={() => handleClick("2")}>
          2
        </button>
        <button
          id="three"
          className="small num"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <button
          id="zero"
          className="big-horizontal zero"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          id="decimal"
          className="small op"
          onClick={() => handleClick(".")}
        >
          .
        </button>
      </div>
      <div className="column right">
        <button
          id="multiply"
          className="small op"
          onClick={() => handleClick("*")}
        >
          x
        </button>
        <button
          id="subtract"
          className="small op"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button id="add" className="small op" onClick={() => handleClick("+")}>
          +
        </button>
        <button id="equals" className="equal" onClick={() => handleResult()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Keypad;
