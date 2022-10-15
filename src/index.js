import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from '../src/App';
import { Profile } from './components/Profile';
import { ThemeProvider } from 'styled-components';
import { theme } from './helpers/theme';

import user from './data/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </App>
    </ThemeProvider>
  </React.StrictMode>
);
