import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">SPORTER</div>
      <nav className="nav">
        <Link to="/">Trang Chủ</Link>
        <Link to="/collection">Bộ Sưu Tập</Link>
        <Link to="/about">Về Chúng Tôi</Link>
        <Link to="/contact">Liên Hệ</Link>
      </nav>
      <div className="icons">
        <Link to="/search"><img src="/assets/search_icon.png" alt="Search" /></Link>
        <Link to="/user"><img src="/assets/user.svg" alt="User" /></Link>
        <Link to="/cart"><img src="/assets/cart.svg" alt="Cart" /></Link>
      </div>
    </header>
  );
}

export default Header;
