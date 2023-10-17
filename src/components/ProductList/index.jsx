import { ProductCard } from "../ProductList/ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addCartList}) => {

   if (!productList || !Array.isArray(productList)) {
      return <div>Lista de produtos vazia.</div>
   }
   
   return (
      <ul className={styles.containerProducts}>
         {productList.map((product) => (
            <ProductCard 
               key={product.id} 
               product={product} 
               addCartList={addCartList} 
            />
         ))}
      </ul>
   );
};

