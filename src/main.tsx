import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';
import { createRoot } from 'react-dom/client';
import { MenuPage } from './pages/Menu/MenuPage';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <CartProvider>
       <Routes>
         <Route index element={<App />}/>
         <Route path="/menu" element={<MenuPage />} />
       </Routes>
      </CartProvider>
    </StrictMode>
  </BrowserRouter>
);
