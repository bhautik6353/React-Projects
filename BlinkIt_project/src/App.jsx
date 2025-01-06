import React, { useEffect } from 'react';
import './CSS/blinkit.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header';
import { Provider} from 'react-redux';
import { Store } from './store/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductContainer from './Components/Container';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<ProductContainer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}
