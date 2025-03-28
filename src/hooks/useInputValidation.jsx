import React, { useState } from 'react'

const useInputValidation = (initialValue = '', validator = null) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  const changeHandler = e => {
    let { value } = e.target;
    setValue(value);
    // if(validator)
  }

  return { value, error, changeHandler }
}

export default useInputValidation
