import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Register1 from './components/register1/register1';
import Register2 from './components/register2/register2';
import Register3 from './components/register3/register3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register1 />
    <Register2 />
    <Register3 />
  </React.StrictMode>
);

reportWebVitals();
