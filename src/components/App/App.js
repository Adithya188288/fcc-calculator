import React, { Component } from "react"
import Calculator from "../Calculator/Calculator"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "0"
    }
  }

  render() {
    const startCalculation = () => {
      sortCurrentValue(this.state.value)
      let result = sortCurrentValue(this.state.value)
      // eslint-disable-next-line
      result = eval(result)
      this.setState({ value: result.toString() })
    }

    // 7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of "display"
    const setStateToInitialValue = () => {
      this.setState({ value: "0" })
    }

    const setStateToCurrentValue = e => {
      let currentValue
      if (typeof e === "object") {
        currentValue = e.target.innerText
      } else {
        currentValue = e
      }

      if (currentValue === "=") {
        startCalculation()
        return
      }

      // 11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted
      if (currentValue === ".") {
        if (
          this.state.value[this.state.value.length - 1] === "." ||
          this.state.value[this.state.value.length - 2] === "."
        ) {
          return
        }
      }

      // When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
      if (
        (Number(currentValue) === 0 && this.state.value.length < 1) ||
        this.state.value.length > 11
      ) {
        return
      }

      // 8. As I input numbers, I should be able to see my input in the element with the id of "display"

      if (this.state.value.length >= 1 && Number(this.state.value) !== 0) {
        this.setState(prevState => {
          return {
            value: `${prevState.value}${currentValue}`
          }
        })
      } else {
        this.setState({ value: currentValue })
      }
    }

    return (
      <div className="text-center">
        <h1>Calculator</h1>
        <Calculator
          currentState={this.state.value}
          setStateToInitialValue={setStateToInitialValue}
          setStateToCurrentValue={setStateToCurrentValue}
        />
      </div>
    )
  }
}

function sortCurrentValue(currentState) {
  let obj = currentState.split("")
  let operator = ["+", "*", "/", "-"]
  let valueToSend = ""
  let lastOperand = []
  let doesLastOperandExist = false
  for (let i = 0; i < obj.length; i++) {
    //Evalautes to True if it an operator and is present in the array
    if (operator.includes(obj[i])) {
      lastOperand.push(obj[i])
      doesLastOperandExist = true
      //Evaluates to true if it is a character
    } else {
      //Evalates to True if any previous operand is present in the array
      //reset the last operand array and doesLastOperandExists
      if (doesLastOperandExist) {
        //Evaluates to True if the last operand is "-" and last operand -1 is not a negative character
        if (
          lastOperand[lastOperand.length - 1] === "-" &&
          lastOperand[lastOperand.length - 2] !== "-"
        ) {
          //Evaluates to true if the length of the last operand array is not equal to 1
          if (lastOperand.length !== 1) {
            valueToSend =
              valueToSend +
              lastOperand[lastOperand.length - 2] +
              lastOperand[lastOperand.length - 1] +
              obj[i]
            reset()
          }
          //Evaluates to true if the last operand length is equal to 1
          else {
            valueToSend =
              valueToSend + lastOperand[lastOperand.length - 1] + obj[i]
            reset()
          }
        } // Evalauates to true for all other operand + ,*, /
        else {
          valueToSend =
            valueToSend + lastOperand[lastOperand.length - 1] + obj[i]
          reset()
        }
      } //Evalautes to true if there is not last operand
      else {
        valueToSend = valueToSend + obj[i]
        reset()
      }
    }
  }

  return valueToSend

  //fucntion to reset the last operand array and the boolean value
  function reset() {
    lastOperand = []
    doesLastOperandExist = false
    console.log(valueToSend)
  }
}

export default App
