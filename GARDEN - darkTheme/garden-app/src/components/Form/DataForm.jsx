import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import imgFiveHands from "../../media/formHands.svg";
import styles from "./form.module.css";

function Form() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.divFormDark : styles.divForm}>
      <div className={styles.greenDiv}>
        <h2>5% off on the first order</h2>
        <form>
          <div className={styles.imgWrapper}>
            <img
              className={styles.formHands}
              src={imgFiveHands}
              alt="five hands"
            />
          </div>
          <div className={styles.divInputs}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <button className={styles.whiteButton}>Get a discount</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
