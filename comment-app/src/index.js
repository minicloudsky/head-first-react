import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentApp from './CommentApp';
import reportWebVitals from './reportWebVitals';
// import User from './User';
import Word from './Word';
import Clock from './Clock';
// import AutoFocusInput from './AutoFocusInput';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentApp />
    <Word name="聪哥" city="上海"></Word>
    {/* <User></User> */}
    <Clock></Clock>
    <br></br>
    <hr></hr>
    {/* <AutoFocusInput></AutoFocusInput> */}
    <Card content={
   <div>
     <p>维哥好帅呀</p>
    <button>维哥我爱你</button>
   </div>
  }></Card>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
