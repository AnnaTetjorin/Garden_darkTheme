import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

// <Link to="/categories"></Link>
