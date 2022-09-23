import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClassComponent from './StateClassComponent';
import StateFunction from './StateFunction';
import Exam56_1 from './Exam56-1';
import Exam56_2 from './Exam56-2';
import Event from './Event';
import EventLecture from './EventLecture';
import EventClassLecture from './EventClassLecture';
import HandlerEx from './ex/Handler_ex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateClassComponent />
    <StateFunction />
    <Exam56_1 />
    <Exam56_2 />
    <Event /> */}
    <EventLecture />
    <EventClassLecture />
    <HandlerEx />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
