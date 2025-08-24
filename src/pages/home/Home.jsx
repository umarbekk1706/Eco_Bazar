import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./home.module.css";
import Card from "../../components/card/Card";
import fruit from "../../assets/img/fruit.png";
import news from "../../assets/img/news_img.png";
import news1 from "../../assets/img/news_img1.png";
import news2 from "../../assets/img/news_img2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header></Header>
      <main className="container">
        <section className={styles.ad}>
          <div className={styles.ad_bg}>
            <div className={styles.left_banner}>
              <div className={styles.banner_content}>
                <h2>Fresh & Healthy <br /> Organic Food</h2>
                <p>
                  Sale up to <span className={styles.discount}>30% OFF</span><br />
                  <small>Free shipping on all your order.</small>
                </p>
                 <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
              </div>
            </div>
          </div>
          <div className={styles.right_banner}>
            <div className={`${styles.small_banner} ${styles.banner1}`}>
              <div>
                <h4>SUMMER SALE</h4>
                <h2>75% OFF</h2>
                <p>Only Fruit & Vegetable</p>
              </div>
              <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
            </div>

            <div className={`${styles.small_banner} ${styles.banner2}`}>
              <div>
                <h4>BEST DEAL</h4>
                <h2>Special Products<br />Deal of the Month</h2>
                 <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
              </div>
            </div>
          </div>

        </section>
        <section className={styles.info}>
          <div className={styles.info_card}>
            <i className="fa-solid fa-truck-moving"></i>
            <div className={styles.card_info}>
              <p><strong>Free Shipping</strong></p>
              <p>Free shipping on all your order</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <i className="fa-solid fa-headset"></i>
            <div className={styles.card_info}>
              <p><strong>Customer Support 24/7</strong></p>
              <p>Instant access to Support</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <i className="fa-solid fa-bag-shopping"></i>
            <div className={styles.card_info}>
              <p><strong>100% Secure Payment</strong></p>
              <p>We ensure your money is save</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <i className="fa-solid fa-box"></i>
            <div className={styles.card_info}>
              <p><strong>Money-Back Guarantee</strong></p>
              <p>30 Days Money-Back Guarantee</p>
            </div>
          </div>
        </section>

        <section className={styles.popular_products}>
          <h1 className={styles.products_h1} >Popular Products</h1>
          <div className={styles.products_box}>
            <Card />
          </div>
        </section>
        <section className={styles.sale}>
          <div className={styles.sale_content}>
            <p><strong>Summer Sale</strong></p>
            <h2><span>37%</span> OFF</h2>
            <p>
              Free on all your order, Free Shipping and  30 days money-back guarantee
            </p>
             <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
          </div>
        </section>
        <section className={styles.news}>
          <h1>Latest News</h1>
          <div className={styles.news_box}>
            <div className={styles.news_card}>
              <img src={news} alt="img" />
              <div className={styles.news_content}>
                <div className={styles.news_info}>
                  <p><i className="fa-regular fa-bookmark"></i> Food</p>
                  <p><i className="fa-regular fa-user"></i> By Admin</p>
                  <p><i className="fa-regular fa-comment"></i> 65 Comments</p>
                </div>
                <p className={styles.news_infop}>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
              </div>
            </div>
            <div className={styles.news_card}>
              <img src={news1} alt="img" />
              <div className={styles.news_content}>
                <div className={styles.news_info}>
                  <p><i className="fa-regular fa-bookmark"></i> Food</p>
                  <p><i className="fa-regular fa-user"></i> By Admin</p>
                  <p><i className="fa-regular fa-comment"></i> 65 Comments</p>
                </div>
                <p className={styles.news_infop}>Eget lobortis lorem lacinia. Vivamus pharetra semper,.</p>
                <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
              </div>
            </div>
            <div className={styles.news_card}>
              <img src={news2} alt="img" />
              <div className={styles.news_content}>
                <div className={styles.news_info}>
                  <p><i className="fa-regular fa-bookmark"></i> Food</p>
                  <p><i className="fa-regular fa-user"></i> By Admin</p>
                  <p><i className="fa-regular fa-comment"></i> 65 Comments</p>
                </div>
                <p className={styles.news_infop}>Maecenas blandit risus elementum mauris malesuada.</p>
                <Link to="/shop" className={styles.shop_link}>Shop Now →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer/>
    </>
  )
}

export default Home;