import styles from "./card.module.css";
import { useEffect,useState } from "react";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
     <div className={styles.product_card}>
    {products.length === 0 ? (
      <p>Loading products...</p>
    ) : (
      products.map((item) => (
        <div className={styles.card}>


        <div key={item.id} className="border rounded-lg p-3 shadow">
          <img src={item.image} alt={item.name} className={styles.product_img} />
          <h2 className={styles.product_name}>{item.name}</h2>
          <p className={styles.product_category}>{item.category}</p>
          <div className={styles.buy_box}>
<p className={styles.prise}>${item.price}</p>
          <button className={styles.buy_btn}>
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
          </div>
          
        </div>
                </div>
      ))
    )}
  </div>
  )
}

export default Card;