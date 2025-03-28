import { useState } from 'react'

const useFileInput = () => {
  const [preview, setPreview] = useState(null)

  const changeHandler = e => {
    let { files } = e.target
    setPreview(URL.createObjectURL(files[0]));
  }

  return { preview, changeHandler }
}

export default useFileInput
