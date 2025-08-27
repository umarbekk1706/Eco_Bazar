// import styles from "./shopping_cart.module.css";
// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";

// function Shopping_cart() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     return (
//         <div>
//             <Header />
//             <main className="container">
//                 <h1>My Shopping Cart</h1>
//                 <div className={styles.cart_box}>
//                     <div className={styles.products_box}>
//                         <div className={styles.products_card}>
//                             {cart.map((item) => (
//                                 <div key={item.id} >
//                                     <h2 className={styles.product_name}>{item.name}</h2>
//                                     <p className={styles.product_category}>{item.category}</p>
//                                     <div className={styles.buy_box}>
//                                         <p className={styles.prise}>${item.price}</p>
//                                     </div>
//                                 </div>
//                             ))}

//                         </div>
//                     </div>
//                     <div className={styles.total_card}>

//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     )
// }

// export default Shopping_cart;





import { useEffect, useState } from "react";
import styles from "./shopping_cart.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Shopping_cart() {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const increaseQty = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const decreaseQty = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const ordered = () => {
        alert(`ordered for $${totalPrice}`);
    };

    return (
        <div>
            <Header />
            <main className={styles.shopping_cart}>


                <div className="container">
                    <h2 className={styles.title}>Shopping Cart</h2>
                    <div className={styles.cartBox}>
                        {cart.length === 0 ? (
                            <p className={styles.empty}>Your cart is empty</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className={styles.card}>
                                    <div className={styles.info}>
                                        <h4>{item.name}</h4>
                                        <p>Price: ${item.price}</p>
                                        <p>Total: ${item.price * item.quantity}</p>
                                    </div>
                                    <div className={styles.qty}>
                                        <button onClick={() => decreaseQty(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className={styles.delete}>
                                        Remove
                                    </button>
                                </div>
                            ))
                        )}

                    </div>
                    <div className={styles.order}>
                        <h3 className={styles.total}>Grand Total: ${totalPrice}</h3>
                        <button onClick={() => ordered()} className={styles.order_btn}>Order now!</button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Shopping_cart;
