import React, { Component } from "react"
import Calculator from "../Calculator/Calculator"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="text-center">
        <h1>Calculator</h1>
        <Calculator />
      </div>
    )
  }
}

export default App
