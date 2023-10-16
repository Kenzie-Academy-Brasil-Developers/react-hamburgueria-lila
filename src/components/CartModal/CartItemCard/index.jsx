import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProduct }) => {
   const { id } = product;
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button onClick={() => removeProduct(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};


