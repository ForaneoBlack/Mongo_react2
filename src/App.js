import React from 'react';
import './App.css';
import ProductContextProvider from "./contexts/ProductContext";
import ProductList from "./components/ProductList";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <ProductList/>
      </ProductContextProvider>
    </div>
  );
}

export default App;
