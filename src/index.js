import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import '@css/style';

// const app = React.createElement('h1', { className: 'app' }, 'Welcome to Todo Manager!');
const root = createRoot(document.getElementById('container'));
root.render(<App />);
