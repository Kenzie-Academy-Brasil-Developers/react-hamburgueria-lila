import React from "react";
import styles from "./style.module.scss";

export const ProductCard = ({product, addCartList}) => {
    return(
        <li className={styles.container} role="list">
            <div className={styles.productCardHearder}>
                <img  src={product.img} alt={product.name} />   
            </div>
            <div className={styles.productCardMain}>
                <h3 className={styles.title}>{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className={styles.toAddButton} onClick={() => addCartList(product)}>Adicionar</button>
            </div>
        </li>
    )
}
