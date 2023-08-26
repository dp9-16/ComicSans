// import _ from 'lodash';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App.jsx';
import './styles.css';

const root = createRoot(document.getElementById('root'))

root.render(<App />);