import React from "react"

const FormInput = ({ formData, inputData, setInputData, placeholder }) => {

  const handleFormInputData = (data, input) => {
    formData[data] = input
    setInputData(formData)
  }

  return (
    <div className={"flex margin-buffer"}>
      {inputData.map((data, index) => {
        return (
          <div
            key={placeholder[index]}
            className="input-container full-width margin-buffer">
            <input
              className="input"
              value={formData[data] || undefined}
              placeholder={placeholder[index]}
              onChange={(event) => handleFormInputData(data, event.target.value)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default FormInput
