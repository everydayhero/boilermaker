import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './containers/Root';

const doRender = () => {
  render(
    <AppContainer
      component={Root}
      
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
