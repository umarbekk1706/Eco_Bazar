import styles from "./shop.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
function Shop() {

  return (
    <div>
      <Header/>
      <main className="container">
        <div className={styles.box}>
         <Card></Card>
        </div>
          <h1 className={styles.cart_link}><Link to="/shopping_cart"><i className="fa-solid fa-cart-shopping"></i> Go to Shopping cart</Link></h1>
      </main>
      <Footer/>
    </div>
  )
}

export default Shop;