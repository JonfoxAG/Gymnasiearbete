import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsiveAppBar from './Navbarcomponent';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createRoot } from 'react-dom/client'; // Updated import


// Render MyComponent in the first div with id 'root'
const rootElement = document.getElementById('navbar');
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot in React 18
  root.render(<ResponsiveAppBar />);
}

// Render MyComponent in another div with id 'other-root'
const otherElement = document.getElementById('othernavbar');
if (otherElement) {
  const otherRoot = createRoot(otherElement); // Use createRoot in React 18
  otherRoot.render(<ResponsiveAppBar />);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
