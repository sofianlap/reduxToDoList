import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import MyStore from './Components/Redux/store'



ReactDOM.render(
    <Provider store={MyStore}>
        <App />
    </Provider>


,document.getElementById('root'));
