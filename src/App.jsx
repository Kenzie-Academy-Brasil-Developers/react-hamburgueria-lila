import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
 
function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
      const json = await response.json();
      setProductList(json);
    }
    getProducts();
  }, []);

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
