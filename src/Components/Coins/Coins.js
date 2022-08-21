import React from 'react'
import './index.css';

import ICONS from '../../img/icons'
import { declensionPoints } from '../../utils/declension';

const Coins = ({ value }) => {
  return (
    <div className='coins'><ICONS.coins width={14} height={14} />{declensionPoints(value)}</div>
  )
}

export default Coins