import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import logoPlant from "../../media/logoPlant.svg";
import menu from "../../media/menu.svg";
import shoppingCart from "../../media/shoppingCart.svg";
import styles from "./header.module.css";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={theme === "dark" ? styles.divHeaderDark : styles.divHeader}
      >
        <nav>
          <img className={styles.logo} src={logoPlant} />
          <ul>
            <li
              className={
                theme === "dark" ? styles.liDarkTheme : styles.liLightTheme
              }
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }
              >
                Main Page
              </NavLink>
            </li>
            <li
              className={
                theme === "dark" ? styles.liDarkTheme : styles.liLightTheme
              }
            >
              <NavLink
                to="/categories"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }
              >
                Categories
              </NavLink>
            </li>
            <li
              className={
                theme === "dark" ? styles.liDarkTheme : styles.liLightTheme
              }
            >
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }
              >
                All products
              </NavLink>
            </li>
            <li
              className={
                theme === "dark" ? styles.liDarkTheme : styles.liLightTheme
              }
            >
              <NavLink
                to="/sales"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }
              >
                All sales
              </NavLink>
            </li>
          </ul>
          <div className={styles.buttonThemeUndShoppingCart}>
            <button className={styles.themeButton} onClick={changeTheme}>
              Theme: {theme}
            </button>
            <img className={styles.shoppingCart} src={shoppingCart} />
          </div>
          <img className={styles.menu} src={menu} />
        </nav>
      </div>
    </>
  );
};

export default Header;
