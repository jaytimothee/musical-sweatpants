import React from "react"

const FormInput = ({ formData, inputData, setInputData, placeholder }) => {

  return (
    <div className={"flex margin-buffer"}>
      {inputData.map((data, index) => {
        return (
          <div
            key={placeholder[index]}
            className="input-container full-width margin-buffer">
            <input
              className="input"
              onChange={(event) => console.log('event', event, 'index', index)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default FormInput
