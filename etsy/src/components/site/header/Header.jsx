// Header.jsx
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar__items">
          <div className="navbar__logo">
            <Link to="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png" alt="" />
            </Link>
          </div>
          <div className="categories" onClick={toggleCategories}>
            <div className="categ__title">
            <RxHamburgerMenu className="hamburger" />
            <span>Categories</span>
            </div>
            <div className="categories__items">
            {showCategories && (
              <div className="categories-dropdown">
                <Link to="/accesories">Accesories</Link>
                <Link to="/jewellery">Jewelry</Link>
                <Link to="/homeCategory">Home & Living</Link>
                <Link to="/artCategory">Art & Collectibles</Link>
              </div>
            )}
            </div>
          </div>
          <div className="search__bar">
            <input type="text" placeholder="Search for anything" />
            <div className="search__icon">
              <IoSearch className="search" />
            </div>
          </div>
          <div className="right__sect">
            <div className="dropdown">
              <Link to="/wishlist">
                <div className="favourites right">
                  <FaRegHeart />
                </div>
              </Link>
              <div className="dropdown-content">Favourites</div>
            </div>
            <div className="dropdown">
              <div className="notif__item right">
                <div className="notif">
                  <IoMdNotificationsOutline />
                  <IoIosArrowDown className="small" />
                </div>
              </div>
              <div className="dropdown-content">Notification</div>
            </div>
            <Link to="/login">
              <div className="dropdown ">
                <div className="profile__item ">
                  <div className="profile">
                    <CgProfile />
                    <IoIosArrowDown className="small" />
                  </div>
                </div>
                <div className="dropdown-content">Profile</div>
              </div>
            </Link>
            <div className="cart ">
              <Link to="/basket">
                <LuShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
