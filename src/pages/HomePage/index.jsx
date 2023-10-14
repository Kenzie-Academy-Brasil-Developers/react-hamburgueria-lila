import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../services/api.js"
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";


// useEffect montagem - carrega os produtos da API e joga em productList OK
// useEffect atualização - salva os produtos no localStorage (carregar no estado)OK
// adição, exclusão, e exclusão geral do carrinho
// renderizações condições e o estado para exibir ou não o carrinho
// filtro de busca
// estilizar tudo com sass de forma responsiva


export const HomePage = ({setVisible}) => {
   const [cartList, setCartList] = useState([]);
   const [productList, setProductList] = useState([]);
   const [isCartVisible, setIsCartVisible] =useState(false);
   const [favorites, setFavorites] = useState([]);

   const addFavorite = (productToAdd) => {
      const hasProducts = favorites.some((favorite) => favorite.id === productToAdd.id)

      if (!hasProducts) {
        setFavorites([...favorites, productToAdd]);
      } else {
        toast("Esse produto já foi adicionado.")
      }

   };
   
   console.log(favorites);
   
   const addCartList = (product) => {
      setCartList([...cartList, product]);
   };

   const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible)
   };
   
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
     localStorage.setItem('cartList', JSON.stringify(cartList));
   }, [cartList]);

   // onDismount
   useEffect(() => {
   }, []);


   return (
      <>
         <Header setVisible={setVisible}/>
         <main>
            <ProductList productList={productList} addCartList={addCartList} setFavorites={setFavorites} addFavorite={addFavorite}/> 
            {/* <button onClick={() => setIsCartVisible(!isCartVisible)}>Toggle Cart</button> */}
            <CartModal cartList={cartList} setVisible={setVisible} />
         </main>
      </>
   );
};
