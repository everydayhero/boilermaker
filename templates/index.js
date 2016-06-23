import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './containers/Root';
{{#if useRedux}}
import configureStore from './store/configureStore';

const store = configureStore();
{{/if}}

const doRender = () => {
  render(
    <AppContainer
      component={Root}
      {{#if useRedux}}props={store}{{/if}}
    />,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    doRender();
  })
} else {
  doRender();
}
