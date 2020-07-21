import React from 'react';
import { ThemeProvider } from 'styled-components';

import main from './styles/theme/light';
import GlobalStyle from './styles/global';

import Board from './components/Board';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <Board />
    </ThemeProvider>
  );
}

export default App;
