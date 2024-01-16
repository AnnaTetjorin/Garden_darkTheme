import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Category } from "./Category";
import styles from "./categories.module.css";

export const CategoriesList = ({ content, style }) => {
  const { theme } = useContext(ThemeContext);
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:3333/categories/all");
      const data = await response.json();
      setCategoriesList(() => [...data]);
    };
    fetchCategories();
  }, []);
  return (
    <div
      className={
        theme === "dark" ? styles.divCategoriesDark : styles.divCategories
      }
    >
      <div className={styles.h1SpanCategories}>
        <h1 className={theme === "dark" ? styles.h1Dark : styles.h1Light}>
          Categories
        </h1>
        <div className={styles.line} style={style}></div>
        <span style={style}>All categories</span>
      </div>
      <div className={styles.showAllCategories}>
        {content === "main"
          ? categoriesList
              .map((category) => <Category key={category.id} {...category} />)
              .splice(0, 4)
          : categoriesList.map((category) => (
              <Category key={category.id} {...category} />
            ))}
      </div>

      <button className={styles.hidden_button}>All categories</button>
    </div>
  );
};
