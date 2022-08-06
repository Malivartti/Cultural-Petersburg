import React, { useState } from 'react';
import { useAdaptivity, ViewWidth, Root, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './global.css'

import Onboarding from './panels/Onboarding/Onboarding';
import Main from './panels/Main/Main';


const App = () => {
	const [activeView, setActiveView] = useState('onboarding');
	const { viewWidth } = useAdaptivity();
	const isDesktop = viewWidth >= ViewWidth.TABLET;

	return (
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
					<Main id="main" />
				</Root>
			</SplitCol>
		</SplitLayout>
	);
}

export default App;
