import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App'


 

const root = createRoot(document.getElementById('root'));
let Render=()=>root.render(<App/>);
setInterval(Render,1000);

