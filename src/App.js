import React, { useState, useEffect, useRef } from 'react';
import { Root, ViewWidth, useAdaptivity } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './global.css';
import bridge from '@vkontakte/vk-bridge';

import Onboarding from './panels/Onboarding/Onboarding';
import Main from './panels/Main/Main';
import { AppNavigation, AppData } from './context/index';

const App = () => {
	const isPopstate = useRef(false)
	const [activeView, setActiveView] = useState('onboarding');
	const [activeModal, setActiveModal] = useState(null)
	const [popout, setPopout] = useState(null)
	const [activeStory, setActiveStory] = useState("home");
	const [cardData, setCardData] = useState(null)
	const [locationData, setLocationData] = useState(null)

	const { viewWidth } = useAdaptivity();
	const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET

	useEffect(() => {
		if (isPopstate.current) {
			isPopstate.current = false
			return
		}
		history.pushState({page: activeStory}, "", "")
	}, [activeStory])

	function handlePopstate() {
		isPopstate.current = true
    if (history.state === null) {
      bridge.send('VKWebAppClose', { 'status': 'success' })
    } else {
			bridge.send('VKWebAppDisableSwipeBack')
      setActiveStory(history.state.page)
    }
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopstate)
    return () => window.removeEventListener('popstate', handlePopstate)
  })

	return (
		<AppNavigation.Provider value={{ activeModal, setActiveModal, activeStory, setActiveStory, popout, setPopout }}>
			<AppData.Provider value={{ cardData, setCardData, locationData, setLocationData }}>
				<Root activeView={activeView}>
					<Onboarding id="onboarding" isDesktop={isDesktop} setActiveView={setActiveView} />
					<Main id="main" isDesktop={isDesktop} />
				</Root>
			</AppData.Provider>
		</AppNavigation.Provider>
	);
}

export default App;
