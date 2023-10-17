import { MdClose, MdSecurityUpdate } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import React, { useState } from "react";
import styles from "./style.module.scss";


export const CartModal = ({ setIsCartVisible, setCartList, cartList, removeProduct }) => {

   let total = 0;

   if (Array.isArray(cartList)) {
      total = cartList.reduce((prevValue, product) => {
         return prevValue + product.price;
      }, 0);
   }


   return (
      <div role="dialog">
         <div className={styles.containerModal}>
            <div className={styles.topBox}>
               <h2>Carrinho de compras</h2>
               <button className={styles.close} onClick={() => setIsCartVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.middleBox}>
               <ul className={styles.listBox}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
                  ))}
               </ul>
            </div>
            <div className={styles.bottomBox}>
               <div className={styles.overall}>
                  <hr className={styles.divider} />   
                  <div className={styles.totally}>
                     <span className={styles.text}>Total</span>
                     <span className={styles.number}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                  </div>
                  <button className={styles.removeAll} onClick={() => {
                     setCartList([]);
                     setIsCartVisible(false);
                  }}>
                     Remover todos
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};


