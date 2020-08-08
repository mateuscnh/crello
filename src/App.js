import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import main from './styles/theme/light';
import GlobalStyle from './styles/global';

import Board from './components/Board';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
