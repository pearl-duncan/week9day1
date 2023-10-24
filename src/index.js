import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //FROM APP.JS

const root = ReactDOM.createRoot(document.getElementById('root')); //CONNECTS THIS PAGE TO OUR INDEX.HTML PAGE
root.render(
  //<React.StrictMode>
    <App /> 
  //</React.StrictMode>
);


