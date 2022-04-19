import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'; // parent of card


// since robots is not default but const i.e. returning
// mutiple things so we destructure it
// import {robots} from './robots'

import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  
);


