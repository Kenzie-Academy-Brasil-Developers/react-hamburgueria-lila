import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../services/api.js"
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import styles from "./style.module.scss";

const EXAMPLE_DATA = [
   {
      "id": 1,
      "name": "Hamburguer",
      "category": "Sanduíches",
      "price": 14,
      "img": "https://i.imgur.com/Vng6VzV.png"
   },
   {
      "id": 2,
      "name": "X-Burguer",
      "category": "Sanduíches",
      "price": 16,
      "img": "https://i.imgur.com/soOUeeW.png"
   },
   {
      "id": 3,
      "name": "Big Kenzie",
      "category": "Sanduíches",
      "price": 18,
      "img": "https://i.imgur.com/eEzZzcF.png"
   },
   {
      "id": 4,
      "name": "Fanta Guaraná",
      "category": "Bebidas",
      "price": 5,
      "img": "https://i.imgur.com/YuIbfCi.png"
   },
   {
      "id": 5,
      "name": "Coca-Cola",
      "category": "Bebidas",
      "price": 4.99,
      "img": "https://i.imgur.com/KC2ihEN.png"
   },
   {
      "id": 6,
      "name": "Milkshake Ovomaltine",
      "category": "Bebidas",
      "price": 4.99,
      "img": "https://i.imgur.com/iNkD4Pq.png"
   }
]

export const HomePage = () => {
   const localCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : []);
   const [productList, setProductList] = useState([]);
   const [isCartVisible, setIsCartVisible] = useState(false);

   const addCartList = (productToAdd) => {
      const hasProducts = cartList.find((product) => product.id === productToAdd.id)

      if (!hasProducts) {
         setCartList((cartList) => [...cartList, productToAdd]);
         toast.success("Produto adicionado  ao carrinho");
      } else {
         toast.error("Esse produto já foi adicionado.");
      }
   };

   const removeProduct = (productId) => {
      const newCartList = cartList.filter((product) => product.id !== productId);
      setCartList(newCartList);
      toast.success("Produto removido com sucesso!")
         ;
   };

   const closeCartModal = () => {
      setIsCartVisible(false);
   }

   // onMount:  
   useEffect(() => {
      const getProduct = async () => {
         try {
            const { data } = await productsApi.get("/products");
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
         {isCartVisible ? (
            <CartModal
               cartList={cartList}
               setIsCartVisible={setIsCartVisible}
               removeProduct={removeProduct}
               setCartList={setCartList}
            />
         ) : null}
         <Header setIsCartVisible={setIsCartVisible} />
         <main className={styles.maincontainer}>
            <ProductList
               productList={productList}
               addCartList={addCartList}
            />
         </main>
      </>
   );
};


