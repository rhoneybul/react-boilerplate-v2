import React from 'react';
import { render } from 'react-dom';
import { Router, Route, BrowserHistory, IndexRoute } from 'react-router';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

render(
	<Router>
        <Route path="/" component={Main} history={BrowserHistory}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
