import React from 'react';
import { createRoot } from 'react-dom/client';
import { Frame } from '@components';
import '@css/style';

// const app = React.createElement('h1', { className: 'app' }, 'Welcome to Todo Manager!');
const root = createRoot(document.getElementById('root'));
root.render(<Frame />);
