import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { logoLight } from "../../../images";

function NavBar() {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  //change color on scroll
  useEffect(() => {
    let lastScrollTop;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) setIsTransparent(false);
      else setIsTransparent(true);

      const st = window.scrollY;
      if (st > lastScrollTop) {
        setScrollDirection("down");
        // console.log('down');
      } else {
        setScrollDirection("up");
        // console.log('up');
      }
      lastScrollTop = window.scrollY;
      // console.log(scrollDirection);

      if (window.scrollY < 100) setScrollDirection("up");
    });
  }, []);

  //set active
  // const onClicked = e => {
  //     const currentActive = document.querySelector('.navbar-item.is-active');
  //     currentActive.classList.toggle('is-active');
  //     e.currentTarget.classList.toggle('is-active');
  // }

  const onBurgerClicked = (e) => {
    e.preventDefault();

    const target = e.currentTarget.dataset.target;
    const $target = document.getElementById(target);
    e.currentTarget.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  };

  const onBurgerIClicked = (e) => {
    // e.preventDefault();
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("is-active");
    const navbarBurger = document.getElementById("navbar-burger");
    navbarBurger.classList.toggle("is-active");
  };

  return (
    <nav
      className={`navbar ${
        scrollDirection === "down" ? "go-up" : ""
      } has-background-primary py is-fixed-top custom-navbar ${
        isTransparent ? "transparent" : "has-shadow"
      } ${location.pathname === "/app" ? "is-hidden" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        {/* logo */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item asd">
            &nbsp;&nbsp;
            <span className="navbar-item" alt="https://cryptofamily3.com">
              <img src={logoLight} alt="Crypto Family logo" />
            </span>
            <h1 className="title is-5 has-text-white">&nbsp; Crypto Family</h1>
          </Link>

          <a
            id="navbar-burger"
            role="button"
            className="navbar-burger has-text-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={onBurgerClicked}
            href="https://nowhere.com"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* items */}
        <div
          id="navbar"
          className={`navbar-menu has-background-primary-mobile`}
        >
          <div className="navbar-end">
            <Link
              to="/"
              className={`navbar-item has-text-light  ${
                location.pathname === "/" ? "is-active" : ""
              }`}
              onClick={onBurgerIClicked}
            >
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              &nbsp;
              <h1>Home</h1>
            </Link>

            <Link
              to="/token"
              className={`navbar-item has-text-light  ${
                location.pathname === "/token" ? "is-active" : ""
              }`}
              onClick={onBurgerIClicked}
            >
              <span className="icon">
                <i className="fas fa-coin"></i>
              </span>
              &nbsp;
              <h1>Coin</h1>
            </Link>

            <Link
              to="/bridge"
              className={`navbar-item has-text-light  ${
                location.pathname === "/bridge" ? "is-active" : ""
              }`}
              onClick={onBurgerIClicked}
            >
              <span className="icon">
                <i className="fa-solid fa-link-horizontal"></i>
              </span>
              &nbsp;
              <h1>Bridge</h1>
            </Link>

            <Link
              to="/dex"
              className={`navbar-item has-text-light  ${
                location.pathname === "/dex" ? "is-active" : ""
              }`}
              onClick={onBurgerIClicked}
            >
              <span className="icon">
                <i className="fas fa-exchange-alt"></i>
              </span>
              &nbsp;
              <h1>DEX</h1>
            </Link>

            <Link to="/app" className="navbar-item has-text-light">
              <span className="icon">
                <i className="fad fa-browser"></i>
              </span>
              &nbsp;
              <h1>App</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
