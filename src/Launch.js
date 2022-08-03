import React, { useState, useEffect } from 'react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import App from './App'
import { User } from './context';

const Launch = () => {
  const [scheme, setScheme] = useState('bright_light')
  const [fetchedUser, setUser] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme(data.scheme)
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <User.Provider value={fetchedUser}>
            <App />
          </User.Provider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider >
  )
}

export default Launch