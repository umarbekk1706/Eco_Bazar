import styles from "./not_found.module.css";
import { Link } from "react-router-dom";
import not_fount from "../../../public/images/404.png";

function Not_found() {
    return (
        <div className={styles.not_found}>
          <img src={not_fount} alt="404" />
            <h1>Not found</h1>
            <p>Unfortunately, the page you are looking for does not exist or has been removed.</p>
            <Link to="/">Back to Home</Link>
        </div>

    )
}

export default Not_found;