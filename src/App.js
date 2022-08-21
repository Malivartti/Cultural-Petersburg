import React, { useState } from 'react';
import { useAdaptivity, ViewWidth, Root, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './global.css'

import Onboarding from './panels/Onboarding/Onboarding';
import Main from './panels/Main/Main';
import Moderation from './panels/Moderation/Moderation';
import CardPage from './panels/CardPage/CardPage';
import { AppNavigation, AppData } from './context/index';
import Locations from './panels/Locations/Locations';
import CreateChallenge from './panels/Account/CreateChallenge/CreateChallenge';


const App = () => {
	const [activeView, setActiveView] = useState('onboarding');
	const [activeStory, setActiveStory] = useState("home");
	const [cardData, setCardData] = useState(null)
	const [locationData, setLocationData] = useState(null)
	const { viewWidth } = useAdaptivity();
	const isDesktop = viewWidth >= ViewWidth.TABLET;

	return (
		<AppNavigation.Provider value={{ setActiveView, activeStory, setActiveStory }}>
			<AppData.Provider value={{ setCardData, setLocationData }}>
				<SplitLayout
					style={{ justifyContent: "center" }}
				>
					<SplitCol
						animate={!isDesktop}
						spaced={isDesktop}
						width={isDesktop ? "560px" : "100%"}
						maxWidth={isDesktop ? "560px" : "100%"}
					>
						<Root activeView={activeView}>
							<Onboarding id="onboarding" />
							<Main id="main" />
							<Moderation id="moderation" />
							<CardPage id="cardPage" data={cardData} />
							<Locations id="locations" data={locationData} />
							<CreateChallenge id='createchallege' />
						</Root>
					</SplitCol>
				</SplitLayout>
			</AppData.Provider>
		</AppNavigation.Provider>
	);
}

export default App;
