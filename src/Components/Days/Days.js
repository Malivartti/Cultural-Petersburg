import React from 'react'
import './index.css';

import ICONS from '../../img/icons'
import { declensionDays } from '../../utils/declension';

const Days = ({ value }) => {
  return (
    <div className='days'><ICONS.clock width={14} height={14} fill="#595e64"/>{declensionDays(value)}</div>
  )
}

export default Days