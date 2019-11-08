import React from "react"
import "./Calculator.css"
import ButtonItem from "../Button/button"
import { calculatorItem } from "../../utils/items"

const Calculator = ({
  currentState,
  setStateToInitialValue,
  setStateToCurrentValue
}) => {
  const displayOnClick = e => {
    console.log(e.target)
    if (e.target.innerText === "AC") {
      setStateToInitialValue()
    } else {
      setStateToCurrentValue(e)
    }
  }

  return (
    <div className="calculator-container">
      {/* 6. My calculator should contain an element to display values with a corresponding id="display" */}
      <div id="display">{currentState}</div>
      <div className="calculator">
        {calculatorItem.map((e, i) => (
          <ButtonItem
            key={i}
            item={e}
            displayOnClick={displayOnClick}
          ></ButtonItem>
        ))}
      </div>
    </div>
  )
}

export default Calculator
