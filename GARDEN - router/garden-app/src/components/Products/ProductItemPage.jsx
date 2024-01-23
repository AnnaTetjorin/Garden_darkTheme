import { Link } from "react-router-dom";
import styles from "./products.module.css";

export const ProductItemPage = () => {
  return (
    <div className={styles.mainCategoriesToolsButtons}>
      <Link to="/">
        <button className={styles.mainButton}>Main Page</button>
      </Link>
      <div className={styles.shortLine}></div>
      <Link to="/categories">
        <button className={styles.categoryButton}>Categories</button>
      </Link>
      <div className={styles.shortLine}></div>
      <button className={styles.toolsButton}>Tools and euqipment</button>
    </div>
  );
};
