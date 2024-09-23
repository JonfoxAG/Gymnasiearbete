import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './Footer';
import ResponsiveAppBar from './Navbarcomponent';
import reportWebVitals from './reportWebVitals';
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

const thirdElement = document.getElementById('thirdnavbar');
if (thirdElement) {
  const thirdRoot = createRoot(thirdElement); // Use createRoot in React 18
  thirdRoot.render(<ResponsiveAppBar />);
}

const footerElement = document.getElementById('footer');
if (footerElement) {
  const footer = createRoot(footerElement);
  footer.render(<Footer/>);
}
const secondfooter = document.getElementById('secondfooter');
if (secondfooter) {
  const otherfooter = createRoot(secondfooter);
  otherfooter.render(<Footer/>);
}

const threefooter = document.getElementById('threefooter');
if (threefooter) {
  const thirdfooter = createRoot(threefooter);
  thirdfooter.render(<Footer/>);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
