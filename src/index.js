import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from '../src/App';
import { Profile } from './components/Profile';
import { Statistics } from 'components/Statistics';
import { ThemeProvider } from 'styled-components';
import { theme } from './helpers/theme';

import user from './data/user.json';
import data from './data/data.json';

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
        <Statistics title="Upload stats" stats={data} />
      </App>
    </ThemeProvider>
  </React.StrictMode>
);
