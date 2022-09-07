import React, { useContext } from 'react'
import { View, Epic, Tabbar, TabbarItem, Panel, SplitCol, SplitLayout, Group, Cell, ModalRoot } from '@vkontakte/vkui'
import './index.css';

import Home from "../Home/Home";
import Challenges from '../Challenges/Challenges';
import Rating from "../Rating/Rating";
import Store from "../Store/Store";
import Account from "../Account/Account";
import Moderation from "../Moderation/Moderation";
import CardPage from "../CardPage/CardPage";
import Locations from "../Locations/Locations";
import CreateChallenge from '../CreateChallenge/CreateChallenge';

import ICONS from '../../img/icons';
import { AppNavigation } from '../../context';
import ConfirmChallengeExecution from '../../Modals/ConfirmChallengeExecution/ConfirmChallengeExecution';


const Main = ({ id, isDesktop }) => {
  const { activeStory, setActiveStory, popout, activeModal, setActiveModal } = useContext(AppNavigation)
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <SplitLayout
          popout={popout}
          modal={
            <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
              <ConfirmChallengeExecution id="confirmchallengeexecution" />
            </ModalRoot>
          }
        >
          {isDesktop && (
            <SplitCol fixed width={170} maxWidth={170}>
              <Panel>
                <Group>
                  <Cell
                    disabled={activeStory === "home"}
                    style={
                      activeStory === "home"
                        ? {
                          backgroundColor: "var(--button_secondary_background)",
                          borderRadius: 8,
                        }
                        : {}
                    }
                    data-story="home"
                    onClick={onStoryChange}
                    before={<ICONS.home />}
                  >
                    Главная
                  </Cell>

                  <Cell
                    disabled={activeStory === "challenges"}
                    style={
                      activeStory === "challenges"
                        ? {
                          backgroundColor: "var(--button_secondary_background)",
                          borderRadius: 8,
                        }
                        : {}
                    }
                    data-story="challenges"
                    onClick={onStoryChange}
                    before={<ICONS.challenges />}
                  >
                    Вызовы
                  </Cell>

                  <Cell
                    disabled={activeStory === "rating"}
                    style={
                      activeStory === "rating"
                        ? {
                          backgroundColor: "var(--button_secondary_background)",
                          borderRadius: 8,
                        }
                        : {}
                    }
                    data-story="rating"
                    onClick={onStoryChange}
                    before={<ICONS.rating />}
                  >
                    Рейтинг
                  </Cell>

                  <Cell
                    disabled={activeStory === "store"}
                    style={
                      activeStory === "store"
                        ? {
                          backgroundColor: "var(--button_secondary_background)",
                          borderRadius: 8,
                        }
                        : {}
                    }
                    data-story="store"
                    onClick={onStoryChange}
                    before={<ICONS.store />}
                  >
                    Магазин
                  </Cell>

                  <Cell
                    disabled={activeStory === "account"}
                    style={
                      activeStory === "account"
                        ? {
                          backgroundColor: "var(--button_secondary_background)",
                          borderRadius: 8,
                        }
                        : {}
                    }
                    data-story="account"
                    onClick={onStoryChange}
                    before={<ICONS.account />}
                  >
                    Аккаунт
                  </Cell>

                </Group>
              </Panel>
            </SplitCol>
          )}
          <SplitCol
            animate={!isDesktop}
            spaced={isDesktop}
            width={isDesktop ? "790px" : "100%"}
            maxWidth={isDesktop ? "790px" : "100%"}
          >
            <Epic
              activeStory={activeStory}
              tabbar={
                !isDesktop && (
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
              <Home id="home"/>
              <Challenges id="challenges" />
              <Rating id="rating" />
              <Store id="store" />
              <Account id="account" />
              <Moderation id="moderation" />
              <CardPage id="cardPage" />
              <Locations id="locations" />
              <CreateChallenge id='createchallege' />
            </Epic>
          </SplitCol>
        </SplitLayout>
      </Panel>
    </View>
  )
}

export default Main