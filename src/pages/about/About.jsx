import styles from './about.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import info1 from "../../assets/img/about_img.png";
import info2 from "../../assets/img/about_img2.png";
import info3 from "../../assets/img/about_img3.png";
function About() {
    return (
        <div >
            <Header />
            <main className="container">
                <div className={styles.about}>
 <div className={styles.info_box}>
                    <div className={styles.info}>
                        <div className={styles.info_des}>
                            <h1>100% Trusted Organic Food Store</h1>
                            <p>Eco Bazar is your reliable online destination for fresh, organic, and eco-friendly products. We deliver 100% natural and trusted food directly from farmers and local producers to your doorstep. With Eco Bazar, you can shop confidently, knowing every product is carefully selected for quality, purity, and sustainability.</p>
                        </div>
                        <img src={info1} alt="img" />
                    </div>
                    <div className={styles.info}>
                        <img src={info2} alt="img" />
                        <div className={styles.info_des}>
                            <h1>100% Trusted Organic Food Store</h1>
                            <p>Eco Bazar is your reliable online destination for fresh, organic, and eco-friendly products. We deliver 100% natural and trusted food directly from farmers and local producers to your doorstep. With Eco Bazar, you can shop confidently, knowing every product is carefully selected for quality, purity, and sustainability. </p>
                        </div>

                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_des}>
                            <h1>We Delivered, You Enjoy Your Order.</h1>
                            <p>Eco Bazar makes healthy living simple.
                                We bring fresh, organic, and eco-friendly products right to your door —
                                so all you need to do is enjoy your order.</p>
                        </div>
                        <img src={info3} alt="img" />
                    </div>
                </div>
                </div>
               
            </main>
            <Footer />
        </div>
    )
}

export default About;