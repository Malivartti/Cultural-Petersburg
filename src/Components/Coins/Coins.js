import React from 'react'
import './index.css';

import ICONS from '../../img/icons'

const Coins = ({ number }) => {
  return (
    <div className='coins'><ICONS.coins width={14} height={14}/> {number} баллов</div>
  )
}

export default Coins