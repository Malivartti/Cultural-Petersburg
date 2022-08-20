import { Button } from '@vkontakte/vkui'
import React from 'react'
import './index.css'

const MyButton = ({children, className = '', ...props}) => {
  return (
    <Button className={`my-button ${className}`} {...props} size="l">{children}</Button>
  )
}

export default MyButton