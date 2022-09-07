import React, { useState } from 'react'
import ICONS from '../../../img/icons'
import './index.css'

const MyInputFile = ({onChange}) => {
  const [file, setFile] = useState(null);

  function onChangeFile(e) {
    const value = e.target.files[0]
    setFile(value)
    onChange(value)
  }

  return (
    <div className='input-file'>
      <div className=''>
        <label className="input-file__title" htmlFor='inputfile'>{<ICONS.shareExternal />} Загрузить фото</label>
        <input className="input-file__input" type="file" id="inputfile" onChange={onChangeFile} />
      </div>
      {file && <img className='input-file__img' src={URL.createObjectURL(file)} alt="" />}
    </div>
  )
}

export default MyInputFile