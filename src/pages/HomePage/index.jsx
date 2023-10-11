import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = ({setVisible}) => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   
   // useEffect montagem - carrega os produtos da API e joga em productList OK
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)OK
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   const getProducts = async () => {
      try {
         const { data } = await  productApi.get("/products");
         setProductList(data); 
      } catch (error) {
         console.log(error)
      }
   }


   return (
      <>
         <Header setVisible={setVisible}/>
         <main>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
