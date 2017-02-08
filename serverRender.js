import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/component/app';

import config from './config';
import axios from 'axios';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
  .then(res => {
    return {
      initialMarkup: ReactDOMServer.renderToString(<App initialContests={res.data.contests}/>),
      initialData: res.data
    };
  });

export default serverRender;
