import { ProductList } from "./components/ProductList";
import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
import { CartModal } from "./components/CartModal";
import { productsApi } from "./services/api"

function App() {
  const [isVisible, setVisible] = useState(false);

  const localProductList = localStorage.getItem("@MYPRODUCTLIST");

  const [cartList, setCartList] = useState([]);
  const [category, setCategory] = useState("");
  const [productList, setProductList] = useState(localProductList ? JSON.parse(localProductList) : []);

  useEffect(() => {
    const getProducts = async () => {      
      try {
        const { data } = await productsApi.get("/products", {
          params: {
            category: category !== "" ? category : undefined
          },
        });
        setProductList(data);
     } catch (error) {
      console.log(error)   
     }   
   };
    getProducts();
  }, [category]);

  return (
    <>
      <HomePage setVisible={setVisible}/>
      {isVisible ? <CartModal cartList={cartList}  setVisible={setVisible}/> : null}
      <ProductList productList={productList}/>
    </>
  )
}

export default App
