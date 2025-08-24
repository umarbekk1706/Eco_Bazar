import styles from './contact.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Contact() {
  return (
    <div>
        <Header/>
        <main className={styles.contact}>
           <h1>Contact us</h1>
           <div className={styles.adress}>
              <div className={styles.adress_card}>
                 <i className="fa-solid fa-location-dot"></i>
                 <h3>Uzbekistan</h3>
              </div>
              <div className={styles.adress_card}>
                <i className="fa-solid fa-envelope"></i>
                 <h3> Ecobazar@gmail.com</h3>
                 <h3> Help.Ecobazar@gmail.com</h3>
              </div>
              <div className={styles.adress_card}>
                <i className="fa-solid fa-phone-volume"></i>
                 <h3>+998 00 000 00 00</h3>
              </div>
           </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Contact