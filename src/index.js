import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Questions from './components/Questions';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter , Switch, Route} from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
<Switch>
    <Route exact path='/' component={App}></Route>
    <Route  path='/start' component={Questions}></Route>
</Switch>
</BrowserRouter>

    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
