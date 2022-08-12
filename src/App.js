import React, { useState } from 'react';
import { useAdaptivity, ViewWidth, Root, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './global.css'

import Onboarding from './panels/Onboarding/Onboarding';
import Main from './panels/Main/Main';
import Moderation from './panels/Moderation/Moderation';
import CardPage from './panels/CardPage/CardPage';
import { AppNavigation, CardPageData, MainNavigation } from './context/index';



const App = () => {
	const [activeView, setActiveView] = useState('onboarding');
	const [activeStory, setActiveStory] = useState("home");
	const [cardData, setCardData] = useState(null)
	const { viewWidth } = useAdaptivity();
	const isDesktop = viewWidth >= ViewWidth.TABLET;

	return (
		<AppNavigation.Provider value={{setActiveView, activeStory, setActiveStory}}>
				<CardPageData.Provider value={setCardData}>
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
								<Onboarding id="onboarding" setActiveView={setActiveView} />
								<Main id="main" setActiveView={setActiveView} />
								<Moderation id="moderation" setActiveView={setActiveView} />
								<CardPage id="cardPage" setActiveView={setActiveView} data={cardData} clearData={() => setCardData(null)} />
							</Root>
						</SplitCol>
					</SplitLayout>
				</CardPageData.Provider>
		</AppNavigation.Provider>
	);
}

export default App;
