import React from "react"
import "./button.css"

const ButtonItem = ({ item, displayOnClick }) => {
  return (
    <button className="button-style" id={item[1]} onClick={displayOnClick}>
      {item[0]}
    </button>
  )
}

export default ButtonItem
