import React from "react"
import "./button.css"

const ButtonItem = ({ item }) => {
  return (
    <div className="button-style" id={item[1]}>
      {item[0]}
    </div>
  )
}

export default ButtonItem
