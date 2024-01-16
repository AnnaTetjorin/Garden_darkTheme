import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styles from "./categories.module.css";

export const CategoryItemPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.buttonsDark : styles.buttons}>
      <div
        className={
          theme === "dark"
            ? styles.mainUndCategoryButtonsDark
            : styles.mainUndCategoryButtons
        }
      >
        <button className={styles.mainButton}>Main Page</button>
        <div className={styles.shortLine}></div>
        <button className={styles.categoryButton}>Categories</button>
      </div>
    </div>
  );
};
