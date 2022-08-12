import React, { useContext, useState } from 'react'
import { View, Epic, Tabbar, TabbarItem, Panel } from '@vkontakte/vkui'
import './index.css';

import Home from "../Home/Home";
import Challenges from '../Challenges/Challenges';
import Rating from "../Rating/Rating";
import Store from "../Store/Store";
import Account from "../Account/Account";
import ICONS from '../../img/icons';
import { AppNavigation } from '../../context';

const Main = ({ id }) => {
  const {activeStory, setActiveStory} = useContext(AppNavigation)
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <Epic
          activeStory={activeStory}
          tabbar={
            (
              <Tabbar>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "home"}
                  data-story="home"
                  text="Главная"
                >
                  <ICONS.home />
                </TabbarItem>

                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "challenges"}
                  data-story="challenges"
                  text="Вызовы"
                >
                  <ICONS.challenges />
                </TabbarItem>

                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "rating"}
                  data-story="rating"
                  text="Рейтинг"
                >
                  <ICONS.rating />
                </TabbarItem>

                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "store"}
                  data-story="store"
                  text="Магазин"
                >
                  <ICONS.store />
                </TabbarItem>

                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "account"}
                  data-story="account"
                  text="Аккаунт"
                >
                  <ICONS.account />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          <Home id="home" />
          <Challenges id="challenges" />
          <Rating id="rating" />
          <Store id="store" />
          <Account id="account"/>
        </Epic>
      </Panel>
    </View>
  )
}

export default Main