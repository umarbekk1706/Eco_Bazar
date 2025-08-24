import styles from "./shop.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
function Shop() {
  return (
    <div>
      <Header/>
      <main className="container">
        <div className={styles.box}>
         <Card></Card>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Shop;