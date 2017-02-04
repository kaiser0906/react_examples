import React from 'react';
import ReactDom from 'react-dom';
// import App from './components/App';
// import StateExample from './StateExam';
// import RandomNumber from './RandomNumber';
import App from './components/App2';


const rootElement = document.getElementById('app');


ReactDom.render(<App />, rootElement);
// ReactDom.render(<StateExample />, rootElement);
// ReactDom.render(<RandomNumber />, rootElement);
