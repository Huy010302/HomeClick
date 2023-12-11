import React from 'react';
import '../src/assets/scss/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product' element={<Product />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
