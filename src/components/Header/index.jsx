import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";
import { HomePage } from "../../pages/HomePage";

export const Header = ({setIsCartVisible}) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.headerBurguer}>
         <div className={styles.boxHeader}>
            <img className={styles.logo} src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               <button className={styles.addCar} onClick={() => setIsCartVisible(true)}>
                  <MdShoppingCart size={21} />
                  <span className={styles.numberCount}>0</span>
               </button>
            </div>           
         </div>
      </header>
   );
};
