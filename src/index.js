import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Store from "./redux/Store/Store";
import {AppContainer} from "./AppContainer";


ReactDOM.render(
      <Provider store={Store}>
    <AppContainer/>
      </Provider>,
  document.getElementById('root')
);
