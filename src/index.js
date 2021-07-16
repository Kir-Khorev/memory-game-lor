import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import GameService from './services/';
import GameServiceContext from './components/game-service-context';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store';
import './index.css';

const gameService = new GameService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <GameServiceContext.Provider value={gameService}>
        <App />
      </GameServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);