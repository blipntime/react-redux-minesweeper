import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

import todoApp from './reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
let store = createStore(todoApp)

render( <AppContainer><Provider store={store}><App/></Provider></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
