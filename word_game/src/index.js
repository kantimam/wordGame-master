import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateWrapper from './StateWrapper';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Loading from './Loading';

ReactDOM.render(
    <React.Suspense fallback={<Loading/>}>
        <BrowserRouter>
            <StateWrapper />
        </BrowserRouter> 
    </React.Suspense>,
    
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
