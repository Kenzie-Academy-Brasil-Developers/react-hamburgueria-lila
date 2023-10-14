import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";


export const CartModal = ({ cartList, setVisible}) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>  
         </div>
         <div>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button onClick={() => setVisible(false)}>Remover todos</button>
         </div>
      </div>
   );
};


