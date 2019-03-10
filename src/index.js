import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'; 
import Store from './Redux/Store'

//import Store from './Redux/Store.js;'
const MyApp = (
    <Provider store = {Store}>
        <App />
    </Provider>
)


ReactDOM.render(MyApp, document.getElementById('root'));


