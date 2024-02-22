import React from "react";
import "./FavouritesCategory.scss";
import { Link } from "react-router-dom";

const FavouritesCategory = () => {
  return (
    <div>
      <div className="favour__category">
        <div className="favour__category__items">
          <div className="favour__title">
            <span className="big">Shop our top categories</span>
            <span>Shop now</span>
          </div>
          <div className="favour__sect">
            <Link
              to="/accesories"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="sect__one">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/14367613/r/il/31778d/4901714835/il_680x540.4901714835_87vm.jpg"
                    alt=""
                  />
                </div>
                <div className="sect__title">
                  <span>Accesories</span>
                </div>
              </div>
            </Link>
            <Link
              to="/jewellery"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="sect__one">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/7770785/r/il/c2ca12/4170703056/il_680x540.4170703056_6bd5.jpg"
                    alt=""
                  />
                </div>
                <div className="sect__title">
                  <span>Jewelry</span>
                </div>
              </div>
            </Link>
            <Link
              to="/artCategory"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="sect__one">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/24971419/r/il/1902d6/2507719880/il_680x540.2507719880_5x9l.jpg"
                    alt=""
                  />
                </div>
                <div className="sect__title">
                  <span>Art & Collectibles</span>
                </div>
              </div>
            </Link>
            <Link
              to="/homeCategory"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="sect__one">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/14304132/c/645/512/77/358/il/f819eb/3087535516/il_680x540.3087535516_9vr4.jpg"
                    alt=""
                  />
                </div>
                <div className="sect__title">
                  <span>Home & Living</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesCategory;
