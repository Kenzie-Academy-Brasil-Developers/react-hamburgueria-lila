import { productsApi } from "../../../services/api.js";
import styles from "./style.module.scss";

export const ProductCard = ({ product, addCartList, addFavorite }) => {
    return(
        <li className={styles.productCard} role="list">
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
