import logo from "../../assets/img/f_logo.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer >
      <div className="container" id={styles.container}>
    <div> 
         <img src={logo} alt="logo" />
         <p>Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis dui, eget bibendum magna <br /> congue nec.</p>
           <h4>+998 00 000 00 00</h4>
    </div>
    <div>
      <h3>My Account</h3>
        <ul>
          <li>My Account</li>
          <li>Order History</li>
          <li>Shoping Cart</li>
          <li>Wishlist</li>
        </ul>
    </div>
    <div>
      <h3>Helps</h3>
        <ul>
          <li>Contact</li>
          <li>Faqs</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
    </div>
    <div>
      <h3>Proxy</h3>
        <ul>
          <li>About</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Track Order</li>
        </ul> 
    </div>
    <div>
      <h3>Categories</h3>
        <ul>
          <li>Fruit & Vegetables</li>
          <li>Meat & Fish</li>
          <li>Bread & Bakery</li>
          <li>Beauty & Healthr</li>
        </ul>
    </div>
          </div>
    </footer>
  )
}

export default Footer