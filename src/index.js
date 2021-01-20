import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'


const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootEl)
}


if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  })
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
