import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowSingleProduct } from "../../components/SingleProduct/ShowSingleProduct";
import { ThemeContext } from "../../context/themeContext";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";

function SingleProductPage() {
  const [theme, setTheme] = useState("light");
  const [singleProduct, setSingleProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    ShowSingleProduct(id, setSingleProduct);
  }, [id]);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <Header />
        <ShowSingleProduct />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
}

export default SingleProductPage;
