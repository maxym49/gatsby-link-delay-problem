import React, { useState, useImperativeHandle, forwardRef} from "react"
import PropTypes from "prop-types"
import "./text-area.scss"

const TextArea = forwardRef(({ type, label }, ref) => {
  const [val, setVal] = useState("")
  const [inputStyle, setInputStyle] = useState({})
  const [labelStyle, setLabelStyle] = useState({})

  const changeStyle = isFocused => {
    if (isFocused) {
      setInputStyle({
        border: "2px solid #ff6584",
      })
      setLabelStyle({
        transform: "translate(-8px, -34px)",
        color: "#ff6584",
      })
    }
    if (!isFocused && val.length) {
      setInputStyle({
        border: "2px solid #e9e9e9",
      })
      setLabelStyle({
        transform: "translate(-8px, -34px)",
        color: "#919191",
      })
    }
    if (!isFocused && !val.length) {
      setInputStyle({
        border: "2px solid #e9e9e9",
      })
      setLabelStyle({
        transform: "translate(0)",
        color: "#919191",
      })
    }
  }
  useImperativeHandle(ref, () => ({
    getVal() {
      return val
    },
    setVal(value) {
      setVal(value)
    },
  }))
  return (
    <>
      <label className="label-text-area">
        <p style={labelStyle}>{label}</p>
        <textarea
          style={inputStyle}
          onFocus={() => changeStyle(true)}
          onBlur={() => changeStyle(false)}
          value={val}
          onChange={({ target: { value } }) => setVal(value)}
        />
      </label>
    </>
  )
})

TextArea.propTypes = {
  label: PropTypes.string,
}

TextArea.defaultProps = {
  label: "",
}

export default TextArea
