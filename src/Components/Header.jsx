import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Assets/headerLogo.svg";
import "../ComopnentsCss/Header.css";
import { use } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";
function Header({ className, menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false;
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <header className={`header ${className}`}>
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="header-logo" />
      </Link>

      {/* Desktop Buttons */}
      <div className={`header-buttons ${menuOpen ? "hidden" : ""}`}>
        {isLoggedIn ? (
          <>
            <Link to="/signup">
              <button className="mdb-btn">Log out</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup-client">
              <button className="mdb-btn">
                {" "}
                {language === "En" ? "Sign up" : "تسجيل"}
              </button>
            </Link>
            <Link to="/login-client">
              <button className="mdb-btn">
                {" "}
                {language === "En" ? "Log in" : "تسجيل دخول"}
              </button>
            </Link>

            <button className="mdb-btn" onClick={toggleLanguage}>
              {language === "En" ? "عربي" : "English"}
            </button>
          </>
        )}
      </div>

      {/* Hamburger Icon */}
      <div
        className={
          className === "SLHeader" ? "SLHeader-icon" : "hamburger-icon"
        }
        // "SLHeader-icon hamburger-icon "
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <Link onClick={toggleLanguage}>
            {" "}
            {language === "En" ? "عربي" : "English"}
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/signup-client" onClick={toggleMenu}>
                {language === "En" ? "تسجيل خروج" : "log out"}
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup-client" onClick={toggleMenu}>
                Sign up
              </Link>
              <Link to="/login-client" onClick={toggleMenu}>
                Log in
              </Link>
            </>
          )}
          {menuItems?.map(({ item, direction }, index) => (
            <Link key={index} to={direction} onClick={toggleMenu}>
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
