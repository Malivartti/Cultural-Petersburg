import { Avatar, Cell, FixedLayout } from '@vkontakte/vkui'
import React from 'react'

const TopCurrentUser = ({ user }) => {
  return (
    <FixedLayout filled vertical="bottom">
      <Cell
        before={
          <div className='user__avatar'>
            <Avatar src={user.photo} />
            <div className='user__score'>99+</div>
          </div>
        }
        description={`${user.score} баллов`}
      >
        {user.first_name} {user.last_name}
      </Cell>
    </FixedLayout>
  )
}

export default TopCurrentUser