import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './ClassComponent';
import TestComponent from './Test';
import Test2Component from './Test2';
import EX541Component from './EX54';
import EX542Component from './EX54-2';

import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 개발자모드 같은 것 */}
  <ClassComponent name= {1} location="문래">문자</ClassComponent>
  <App />
  <TestComponent></TestComponent>
  <Test2Component></Test2Component>
  <EX541Component></EX541Component>
  <EX542Component title= "모던자바스크립트 딥다이브" author='이웅모' price='40,500원' type='IT'></EX542Component>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();// 리액트 애플리케이션 성능측정
