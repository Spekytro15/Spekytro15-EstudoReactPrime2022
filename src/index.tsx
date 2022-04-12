import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
reportWebVitals();
