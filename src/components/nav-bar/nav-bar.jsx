import { useState, useEffect } from 'react';
import './nav-bar.css';
import { Link } from 'wouter';

export const NavBar = () => {
  const [opacity, setOpacity] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setOpacity(false);
    } else {
      setOpacity(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${opacity ? "" : "header-opacity"}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Marketify</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
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
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
