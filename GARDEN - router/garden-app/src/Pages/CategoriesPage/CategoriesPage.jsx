import { useState } from "react";
import { CategoriesList } from "../../components/Categories/CategoriesList";
import { CategoryItemPage } from "../../components/Categories/CategoryItemPage";
import { ThemeContext } from "../../context/themeContext";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";

function CategoriesPage() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <Header />
        <CategoryItemPage />
        <CategoriesList style={{ display: "none" }} />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
}

export default CategoriesPage;
