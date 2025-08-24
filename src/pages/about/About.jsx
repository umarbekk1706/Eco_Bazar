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
            <main className={styles.about}>
               <div className={styles.info_box}>
 <div className={styles.info}>
                  <div className={styles.info_des}>
                      <h1>100% Trusted Organic Food Store</h1>
                      <p>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
                  </div>
                     <img src={info1} alt="img" />
                </div>
                <div className={styles.info}>
                     <img src={info2} alt="img" />
                  <div className={styles.info_des}>
                      <h1>100% Trusted Organic Food Store</h1>
                      <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
                  </div>
                    
                </div>
                 <div className={styles.info}>
                  <div className={styles.info_des}>
                      <h1>We Delivered, You Enjoy Your Order.</h1>
                      <p>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                  </div>
                     <img src={info3} alt="img" />
                </div>
               </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;