import React from "react"
import "./Calculator.css"
import ButtonItem from "../Button/button"
import { calculatorItem } from "../../utils/items"

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div id="display">100</div>
      <div className="calculator">
        {calculatorItem.map((e, i) => (
          <ButtonItem key={i} item={e}></ButtonItem>
        ))}
      </div>
    </div>
  )
}

export default Calculator
