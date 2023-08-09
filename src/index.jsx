import _ from 'lodash';
import { render } from 'react-dom';
import React from 'react';
import App from './App.jsx';
// // // // // //

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

render(<App />, root);