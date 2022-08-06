import { Avatar, HorizontalCell } from '@vkontakte/vkui'
import React from 'react'
import './index.css'

const TopUser = ({user, place}) => {
  return (
    <HorizontalCell
      className={`top-user top-user_${place}`}
      header={
        <div>
          <div className={`top-user__name top-user__name_${place}`}>{user.first_name}</div>
          <div className={`top-user__name top-user__name_${place}`}>{user.last_name}</div>
          <div className="top-user__score">{user.score} баллов</div>
        </div>
      } >
      <Avatar size={place === "first" ? 90 : 70} src={user.photo} />
    </HorizontalCell>
  )
}

export default TopUser