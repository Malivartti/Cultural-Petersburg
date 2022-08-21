import { Avatar, Cell, FixedLayout } from '@vkontakte/vkui'
import React from 'react'
import {declensionPoints} from '../../utils/declension'

const TopCurrentUser = ({ user }) => {
  return (
    <FixedLayout filled vertical="bottom">
      <Cell
        before={
          <div className='user__avatar'>
            <Avatar src={user.photo} />
          </div>
        }
        description={`${user.place} место | ${declensionPoints(user.score)}`}
      >
        {user.first_name} {user.last_name}
      </Cell>
    </FixedLayout>
  )
}

export default TopCurrentUser