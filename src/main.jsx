import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import AppProvider from './context/app_context.jsx'
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>  
    </CookiesProvider>      
  </StrictMode>,
)
