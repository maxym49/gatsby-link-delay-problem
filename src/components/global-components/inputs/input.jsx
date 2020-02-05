import React, { useState, useRef, useImperativeHandle, forwardRef } from "react"
import PropTypes from "prop-types"
import "./input.scss"

const Input = forwardRef(({ type, label }, ref) => {
  const [val, setVal] = useState("")
  const [inputStyle, setInputStyle] = useState({})
  const [labelStyle, setLabelStyle] = useState({})

  const fileInput = useRef(null)

  const changeStyle = isFocused => {
    if (isFocused) {
      setInputStyle({
        borderBottom: "2px solid #ff6584",
      })
      setLabelStyle({
        transform: "translate(-8px, -24px)",
        color: "#ff6584",
      })
    }
    if (!isFocused && val.length) {
      setInputStyle({
        borderBottom: "2px solid #e9e9e9",
      })
      setLabelStyle({
        transform: "translate(-8px, -24px)",
        color: "#919191",
      })
    }
    if (!isFocused && !val.length) {
      setInputStyle({
        borderBottom: "2px solid #e9e9e9",
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
    getFileVal() {
      return fileInput.current.files[0]
    },
    setFileVal(value) {

    },
  }))
  return (
    <>
      <label>
        <p style={labelStyle}>{label}</p>
        {type === "file" ? (
          <>
            <input
              className="file-input"
              onFocus={() => changeStyle(true)}
              onBlur={() => changeStyle(false)}
              type={type}
              value={val}
              ref={fileInput}
              onChange={({ target: { value } }) => setVal(value)}
            />
            <input
              readOnly
              className="file-input-fake"
              style={inputStyle}
              type="text"
              value={fileInput.current ? (fileInput.current.files[0] ? fileInput.current.files[0].name : "") : ""}
            />
          </>
        ) : (
          <input
            style={inputStyle}
            onFocus={() => changeStyle(true)}
            onBlur={() => changeStyle(false)}
            type={type}
            value={val}
            onChange={({ target: { value } }) => setVal(value)}
          />
        )}
      </label>
    </>
  )
})

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
}

Input.defaultProps = {
  type: "text",
  label: "",
}

export default Input
