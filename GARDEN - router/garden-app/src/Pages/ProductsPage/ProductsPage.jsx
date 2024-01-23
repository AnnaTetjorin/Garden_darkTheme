import { useState } from "react";
import { ProductItemPage } from "../../components/Products/ProductItemPage";
import { ProductsList } from "../../components/Products/ProductsList";
import { ThemeContext } from "../../context/themeContext";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";

function ProductsPage() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <Header />
        <ProductItemPage />
        <ProductsList />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
}

export default ProductsPage;

//content="main"
