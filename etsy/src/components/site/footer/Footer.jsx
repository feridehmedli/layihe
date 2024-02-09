import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { GrPinterest } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import "./Footer.scss";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__items__one">
          <div className="world__icon">
            <TbWorld/>
          </div>
          <div className="electricity">
            <span>Etsy is powered by 100% renewable electricity.</span>
          </div>
        </div>
        <div className="footer__items">
          <div className="footer__left">
            <div className="etsy__logo">
              <div className="etsy__logo__img">
                <img
                  src="https://play-lh.googleusercontent.com/giKCCPigafUbKQ1AkXVxSjQ1PggetEI96ORNKxxhQdvGAFhto71kO4zf7gZ9oOdLIQe5=w240-h480-rw"
                  alt=""
                />
              </div>
              <div className="download__button">
                <button>Download the Etsy App</button>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div className="section__one">
              <h5>Shop</h5>
              <div className="spans">
                <span>Gift cards</span>
                <span>Etsy Registry</span>
                <span>Sitemap</span>
                <span>Etsy blog</span>
                <span>Etsy United Kingdom</span>
                <span>Etsy Germany</span>
                <span>Etsy Canada</span>
              </div>
            </div>
            <div className="section__two">
              <h5>Sell</h5>
              <div className="spans">
                <span>Sell on Etsy</span>
                <span>Teams</span>
                <span>Forums</span>
                <span>Affiliates & Creators</span>
              </div>
            </div>
            <div className="section__three">
              <h5>About</h5>
              <div className="spans">
                <span>Etsy, Inc.</span>
                <span>Policies</span>
                <span>Investors</span>
                <span>Careers</span>
                <span>Press</span>
                <span>Impact</span>
                <span>Legal imprint</span>
              </div>
            </div>
            <div className="section__four">
              <h5>Help</h5>
              <div className="spans">
                <span>Help Center</span>
                <span>Privacy settings</span>
              </div>
              <div className="icons">
                <FaInstagram className="icon" />
                <IoLogoFacebook className="icon" />
                <GrPinterest className="icon" />
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__items__two">
          <div className="right">
            <div className="world__icon">
              <TiWorld />
            </div>
            <div className="countries">
              <span>Azerbaijan</span>
              <span>|</span>
              <span>English(US)</span>
              <span>|</span>
              <span>$(USD)</span>
            </div>
          </div>
          <div className="left">
            <div className="privacy">
              <span>© 2024 Etsy, Inc.</span>
              <span>Terms of Use</span>
              <span>Privacy</span>
              <span>Interest-based ads</span>
              <span>Local Shops</span>
              <span>Regions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
