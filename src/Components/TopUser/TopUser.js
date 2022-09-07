import { Avatar, Tappable } from '@vkontakte/vkui'
import React from 'react'
import './index.css'

const TopUser = ({ user, place }) => {
  return (
    <Tappable>
      <div className={`top-user top-user_${place}`}>
        <div className={`top-user__avatar top-user__avatar_${place}`}>
          <Avatar size={place === "first" ? 90 : 70} src={user.photo} />
        </div>
        <div className={`top-user__name top-user__name_${place}`}>{user.first_name}</div>
        <div className={`top-user__name top-user__name_${place}`}>{user.last_name}</div>
        <div className="top-user__score">{user.score} баллов</div>
      </div>
    </Tappable>
  )
}

export default TopUser