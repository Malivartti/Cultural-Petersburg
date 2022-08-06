import React from 'react'

import TopUser from '../TopUser/TopUser'
import './index.css'

const Top3 = ({ users }) => {
  return (
    <div className='top3'>
      <TopUser user={users[1]} place="second" />
      <TopUser user={users[0]} place="first" />
      <TopUser user={users[2]} place="third" />
    </div>
  )
}

export default Top3