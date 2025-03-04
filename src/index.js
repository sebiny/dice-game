import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// 리엑트 프로젝트에서는 단하나의 html을 사용을 한다.
//App컴포넌트가 최상위 컴포넌트이다.