import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

ReactDOM.render(
	<App initialContests={window.initialData.contests} />,
	document.getElementById('root')
);
