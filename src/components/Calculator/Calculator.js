import React, { useEffect } from "react"
import "./Calculator.css"
import ButtonItem from "../Button/button"
import { calculatorItem, keycodes } from "../../utils/items"

const Calculator = ({
  currentState,
  setStateToInitialValue,
  setStateToCurrentValue
}) => {
  useEffect(() => {
    document.addEventListener("keydown", displayOnClickKeyBoard)
    return () => {
      document.removeEventListener("keydown", displayOnClickKeyBoard)
    }
  })

  // Mouse Event
  const displayOnClick = e => {
    if (e.target.innerText === "AC") {
      setStateToInitialValue()
    } else {
      setStateToCurrentValue(e)
    }
  }

  //This method will run if KeyBoard Event ie key press is trigged
  const displayOnClickKeyBoard = e => {
    const { key, keyCode } = e

    if (keyCode === 27) {
      setStateToInitialValue()
    } else if (keycodes.includes(keyCode)) {
      setStateToCurrentValue(key)
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
