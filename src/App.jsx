import React, { useState } from 'react';
import { ProductList } from "./components/ProductList";
import { HomePage } from "./pages/HomePage";
import { CartModal } from "./components/CartModal";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const localCartList = localStorage.getItem("@CARTLIST");

  const [isVisible, setVisible] = useState(false);
  const [products, setProduct] = useState([]);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []);
  
  const [currentCartList, setCurrentCartList] = useState(null);

  const addCartList = (product) => {
  setCartList([...cartList, product]);
  };  

  const addProducts = (productToAdd) => {
     const hasProducts = products.some((product) => product.id === productToAdd.id)

     if (!hasProducts) {
       setProduct([...products, productToAdd]);
       toast.success("Produto adicionado  ao carrinho");
     } else {
       toast.error("Esse produto já foi adicionado.");
     }
  };

  const removeProduct = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
    toast.success("Produto removido com sucesso!")
;  };

  return (
    <>
      <HomePage 
        addProduct={addProducts} 
        setVisible={setVisible} 
        addCartList={addCartList}
        setCurrentCartList={setCurrentCartList} 
        // productList={products}
        />
     
      {/* <ProductList products={products}  setCurrentCartList={setCurrentCartList}/> */}

      {currentCartList ? (
        <CartModal product={currentCartList} />
      ) : null};


      {isVisible ? ( 
        <CartModal 
          cartList={cartList}  
          setVisible={setVisible} 
          removeProduct={removeProduct}
        /> 
      ): null}

      <ToastContainer position="bottom-right" autoClose={2 * 1000} /> 
    </>
  )
}

export default App
