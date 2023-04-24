
import "./navbar.css";
import CartWidget from "../CartWidget/CarWidget";
import logo from "../../assets/react.svg"


export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="logo">ViVapes </h1>
        <nav className="navbar">
          <p className="navbar__link">Inicio</p>
          <p className="navbar__link">Contacto</p>
          <p className="navbar__link">Faq´s</p>
          <p className="navbar__link">Productos</p>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};
