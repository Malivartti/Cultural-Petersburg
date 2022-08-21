import { Avatar, Cell } from '@vkontakte/vkui';
import React from 'react'
import TopCurrentUser from '../TopCurrentUser/TopCurrentUser';
import './index.css';
import {declensionPoints} from '../../utils/declension'

const TopList = ({ users, currentUser }) => {
  return (
    <div>
      {users.map((user, i) =>
        <Cell
          key={i}
          before={
            <div className='user__avatar'>
              <Avatar src={user.photo} />
              <div className='user__score'>
                {i + 4}
              </div>
            </div>}
          description={declensionPoints(user.score)}
        >
          {user.first_name} {user.last_name}
        </Cell>
      )}
      {currentUser && <TopCurrentUser user={currentUser} />}
    </div>
  )
}

export default TopList