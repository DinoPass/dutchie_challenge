import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './src/app';

function renderApp() {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

renderApp();
