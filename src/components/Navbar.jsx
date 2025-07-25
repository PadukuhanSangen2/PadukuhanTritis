import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTiktok, FaInstagram, FaSearch } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');
  

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/profil', label: 'Profil' },
    { path: '/potensi', label: 'Potensi' },
    { path: '/galeri', label: 'Galeri' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="address-text">Pedukuhan Tritis, Kalurahan Planjan, Kapanewon Saptosari</span>
          <div className="social-icons">
            <a href="#" className="me-3"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@diptatarunatrits?_t=ZS-8yHbLe8JimF&_r=1" className="me-3"><FaTiktok /></a>
            <a href="https://www.instagram.com/diptatarunatritis?igsh=MWFpYnVhZXUweXl3dw=="><FaInstagram /></a>
          </div>
        </div>
      </div>


      {/* Main Navbar */}
      <div className="main-navbar-wrapper py-2 shadow-sm">
        <nav className="navbar navbar-expand-lg custom-navbar rounded-pill px-4 py-2 mx-auto">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src="/logopng.png" alt="logo" className="logo-img me-2" />
              <span className="fw-bold text-white">Pedukuhan Tritis</span>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
              <span className="custom-toggler-icon">
                <span></span>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto align-items-center">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      className={`nav-link mx-2 ${activePath === item.path ? 'active text-warning fw-semibold' : ''}`}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item ms-3">
                  <a href="#" className="nav-link text-white">
                    <FaSearch />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
