import { useState, useEffect } from 'react';
import './nav-bar.css';
import { Link } from 'wouter';

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar-container ${isVisible ? 'navbar-visible' : 'navbar-hidden'} position-fixed`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Marketify</a>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown movil">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/products/category/jewelery" className="dropdown-item">Jewelery</Link></li>
                  <li><Link to="/products/category/electronics" className="dropdown-item">Electronics</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/products/category/men's clothing" className="dropdown-item">Men's Clothing</Link></li>
                  <li><Link to="/products/category/women's clothing" className="dropdown-item">Women's Clothing</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown pc">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/products/category/jewelery" className="dropdown-item">Jewelery</Link></li>
                  <li><Link to="/products/category/electronics" className="dropdown-item">Electronics</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/products/category/men's clothing" className="dropdown-item">Men's Clothing</Link></li>
                  <li><Link to="/products/category/women's clothing" className="dropdown-item">Women's Clothing</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
