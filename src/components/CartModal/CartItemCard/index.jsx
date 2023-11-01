import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
   const { id } = product;
   return (
      <li className={styles.container}>
         <div className={styles.productBox}>
            <div className={styles.textProduct}>
               <img src={product.img} alt={product.name} />
               <div className={styles.productPrice}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>

            </div>
            <div>
               <button onClick={() => removeProduct(product.id)} aria-label="delete" title="Remover item">
                  <MdDelete size={21} />
               </button>
            </div>
         </div>
      </li>
   );
};


