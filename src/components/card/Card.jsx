import { useEffect, useState } from "react";
import styles from "./card.module.css";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
     
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {

      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className={styles.productCard}>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.name} className={styles.productImg} />
            <h2 className={styles.productName}>{item.name}</h2>
            <p className={styles.productCategory}>{item.category}</p>
            <div className={styles.buyBox}>
              <p className={styles.price}>${item.price}</p>
              <button className={styles.buyBtn} onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
