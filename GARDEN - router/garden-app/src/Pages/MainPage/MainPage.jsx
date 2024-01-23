import { useState } from "react";
import { CategoriesList } from "../../components/Categories/CategoriesList";
import Discount from "../../components/Discount/Discount";
import DataForm from "../../components/Form/DataForm";
import { SaleList } from "../../components/Sale/SaleList";
import { ThemeContext } from "../../context/themeContext";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";

function MainPage() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <Header />
        <Discount />
        <CategoriesList content="main" />
        <DataForm />
        <SaleList />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
}

export default MainPage;
