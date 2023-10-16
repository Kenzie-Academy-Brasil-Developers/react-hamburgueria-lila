import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../services/api.js"
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";


export const HomePage = ({setVisible, addCartList, setCurrentCartList}) => {
   const [cartList, setCartList] = useState([]);
   const [productList, setProductList] = useState([]);
   const [isCartVisible, setIsCartVisible] =useState(false);
   

   const addToCartList = (product) => {
      setCartList([...cartList, product]);
   };
   
   const removeFromCart = (productToRemove) => {
      const updateCart = cartList.filter(product => product.id !== productToRemove.id);
      setCartList(updateCart);
   }
   
   const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible)
   };


   const closeCartModal = () => {
      setIsCartVisible(false);
   }
   
   // onMount:  
   useEffect(() => {
      const getProduct = async () => {
         try {
            const { data } = await  productsApi.get("/products");
            setProductList(data); 
         } catch (error) {
            console.log(error);
         }
      };
      getProduct();
   }, []);

   
   // onUpdate:
   useEffect(() => {
      localStorage.setItem('@cartList', JSON.stringify(cartList));
   }, [cartList]);
   
   
   return (
      <>
         <Header setVisible={setVisible} productList={cartList} toogleCartVisibility={toggleCartVisibility}/>
         <main>
            <ProductList 
               productList={productList} 
               addCartList={addCartList}
               setCurrentCartList={setCurrentCartList} 
            /> 
            <button onClick={toggleCartVisibility}>Abrir carrinho</button>
            {isCartVisible && ( 
               <CartModal cartList={cartList} setVisible={setVisible}>
               <button onClick={closeCartModal}>X</button>
               </CartModal>
            )};
         </main>
      </>
   );
};




// useEffect montagem - carrega os produtos da API e joga em productList 
// useEffect atualização - salva os produtos no localStorage (carregar no estado)
// adição, exclusão, e exclusão geral do carrinho
// renderizações condições e o estado para exibir ou não o carrinho
// filtro de busca
// estilizar tudo com sass de forma responsiva