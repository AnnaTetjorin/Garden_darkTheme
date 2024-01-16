import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import MainPage from "./Pages/MainPage/MainPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import "./App.css"
import { ThemeContext } from "./context/themeContext";
import { useState } from "react";


const App = () => {
  const [theme, setTheme] = useState('light')

  function changeTheme () {
    setTheme((theme === 'light') ? 'dark' : 'light')
   }
 
  return (
  <ThemeContext.Provider value={{ theme, changeTheme }}>
    <div className="app">
      <MainPage/>
      <CategoriesPage/>
      <SingleProductPage/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
