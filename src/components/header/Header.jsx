import styles from "./header.module.css";
import logo from "../../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <header >
  

      <div className={styles.main_header}>
        <img src={logo} alt="logo" />
      
        <div className={styles.header_icons}>
           <button id={styles.like_btn}
      onClick={() => setLiked(!liked)} 
      className={liked ? styles.liked : ""}
    >
      <i className="fa-solid fa-heart"></i>
    </button>
          <p>|</p>
         <Link to="/shopping_cart" className={styles.shop_link}><i className="fa-solid fa-cart-shopping"></i></Link>
          <i
            className={`fa-solid fa-bars ${styles.hamburger}`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>
      </div>

      <div className={`${styles.nav_bar} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/" className={styles.link}>Home</Link></li>
          <li><Link to="/shop" className={styles.link}>Shop</Link></li>
          <li><Link to="/about" className={styles.link}>About Us</Link></li>
          <li><Link to="/contact" className={styles.link}>Contact Us</Link></li>
        </ul>
        <p className={styles.phone}>
          <i className="fa-solid fa-phone-volume"></i> +998 00 000 00 00
        </p>
      </div>
    </header>
  );
}

export default Header;
