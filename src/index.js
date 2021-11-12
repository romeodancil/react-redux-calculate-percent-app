import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducer'

function saveToStorage(state) {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('history', serializedState)
	} catch(e) {
		console.error('ERROR', e)
	}

}

function loadFromStorage() {
	try {
		const serializedState = localStorage.getItem('history')
		if (serializedState === null) return undefined
		return JSON.parse(serializedState)
	} catch(e) {
		console.error('ERROR', e)
		return undefined
	}
}

const existingState = loadFromStorage()
let store = createStore(
  reducers,
  existingState,
  applyMiddleware(reduxThunk)
);

store.subscribe(() => saveToStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
