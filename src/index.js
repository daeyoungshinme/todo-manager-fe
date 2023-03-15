import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/css/style.css';

const app = React.createElement('h1', { className: 'app' }, 'Welcome to Todo Manager!');

const rootNode = createRoot(document.getElementById('root'));
rootNode.render(app);
