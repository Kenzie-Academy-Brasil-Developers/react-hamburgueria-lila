import { MdClose, MdSecurityUpdate } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import React, { useState } from "react";
import styles from "./style.module.scss";


export const CartModal = ({ cartList, product, setVisible: modalVisible, removeProduct}) => {
   const [visible, setVisible] = useState(false);

   let total = 0;

      if(Array.isArray(cartList)){
         total = cartList.reduce((prevValue, product) => {
            return prevValue + product.price;
         }, 0);
      } 


   return (
      <div role="dialog">
         {visible && (
            <div className={styles.containerModal}>
               <div className={styles.topBox}>
                  <h2>Carrinho de compras</h2>
                  <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
                     <MdClose size={21} />
                  </button>  
               </div>
               <div>
                  <ul>
                     {product.map((product) => (
                        <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
                     ))}
                  </ul>
               </div>
               <div className={styles.lowerBox}>
                  <div className={styles.overall}>
                     <span>Total</span>
                     <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                  </div>
                  <button className={styles.removeAll} onClick={() => {
                     setCurrentCartList([]);
                     setVisible(false);
                  }}>
                     Remover todos
                  </button>
               </div>
            </div>
         )};
      </div>
   );
};


