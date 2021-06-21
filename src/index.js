import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { configure } from '@testing-library/react';
import { configureStore } from './store/contigureStore';
import "react-toastify/dist/ReactToastify.min.css"



const store =configureStore()
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>

    </Provider>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
