import { ProductList } from "./components/ProductList";
import { HomePage } from "./pages/HomePage";
import React, { useState } from 'react';
import { CartModal } from "./components/CartModal";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";


function App() {
  const [isVisible, setVisible] = useState(false);

  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([]);

  return (
    <>
      <HomePage setVisible={setVisible} cartList={cartList} setCartList={setCartList} productList={productList} setProductList={setProductList}/>
      {isVisible ? <CartModal cartList={cartList}  setVisible={setVisible}/> : null}
      {productList && productList.length > 0 && (
        <ProductList product={productList}/>
      )}   
      <ToastContainer/> 
    </>
  )
}

export default App
