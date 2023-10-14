import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addCartList, setFavorites, addFavorite}) => {
   console.log(productList)
   
   return (
      <ul className={styles.containerProducts}>
         {productList.map((product) => (
            <ProductCard 
               key={product.id} 
               product={product} 
               addCartList={addCartList} 
               setFavorites={setFavorites} 
               addFavorite={addFavorite}
            />
         ))}
      </ul>
   );
};

