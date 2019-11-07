import React from "react"
import "./button.css"

const ButtonItem = ({ item, displayOnClick }) => {
  return (
    <div className="button-style" id={item[1]} onClick={displayOnClick}>
      {item[0]}
    </div>
  )
}

export default ButtonItem
