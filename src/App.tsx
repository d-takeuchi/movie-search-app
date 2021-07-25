import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router/Router';
import './App.css';
import { SearchProvider } from './providers/SearchProvider';

export default function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SearchProvider>
  );
}
