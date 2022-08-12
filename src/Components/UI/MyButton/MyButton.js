import { Button } from '@vkontakte/vkui'
import React from 'react'
import './index.css'

const MyButton = ({children, className = '', ...props}) => {
  return (
    <Button className={`my-button ${className}`} {...props}>{children}</Button>
  )
}

export default MyButton