import React, { useContext, useEffect, useState } from "react";
import "./Jewellery.scss";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import toast from "react-hot-toast";

const Jewellery = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("relevancy");
  const { handleAddToBasket } = useContext(MainContext);
  const { handleAddWishlist } = useContext(MainContext);
  useEffect(() => {
    axios
      .get("http://localhost:8080/jewellery")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedData = [...data];

  if (sortOption === "lowtohigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "hightolow") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="acces">
      <div className="accesories">
        <div className="accesories__items">
          <div className="section__ones">
            <div className="category__title">
              <span>Jewelry</span>
              <span className="smalls">
              Rings, earrings and necklaces to instantly raise your jewelry-box game
              </span>
            </div>
            <div className="small__category">
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7770785/r/il/d55a82/4328838368/il_300x300.4328838368_iyyu.jpg"
                  alt=""
                />
                <span>Necklaces</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/8595828/c/3000/3000/0/0/il/2aa7b1/2294321673/il_300x300.2294321673_5ybn.jpg"
                  alt=""
                />
                <span>Rings</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/17246174/r/il/2cf410/2546323062/il_300x300.2546323062_d78f.jpg"
                  alt=""
                />
                <span>Earrings</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5152054/r/il/61e16f/1818566504/il_300x300.1818566504_ohit.jpg"
                  alt=""
                />
                <span>Bracelets</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7704307/r/il/ed36fc/2341970317/il_300x300.2341970317_gqku.jpg"
                  alt=""
                />
                <span>Watches</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/10204022/c/2586/2586/320/142/il/09c121/2731910039/il_300x300.2731910039_d8wd.jpg"
                  alt=""
                />
                <span>Cremation & Memorial Jewelry</span>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="sort">
            <select
              name="filter"
              id="filter"
              onChange={handleSortChange}
              value={sortOption}
            >
              <option value="relevancy">Relevancy</option>
              <option value="lowtohigh">From cheap to expensive</option>
              <option value="hightolow">From expensive to cheap</option>
            </select>
          </div>
          <div className="product__card">
            {sortedData.map((item, index) => (
              <div className="product__card__items" key={index}>
                <div className="product__card__image">
                  <img src={item.image} alt="" />
                  <div className="favourites">
                    <FaRegHeart
                      onClick={() => {
                        handleAddWishlist(item);
                      }}
                    />
                  </div>
                </div>
                <div className="card__down">
                  <div className="product__card__title">
                    <span>{item.name.slice(0, 45)}</span>
                  </div>
                  <div className="stars">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                  </div>
                  <div className="product__prices">
                    <span>USD {item.price}</span>
                  </div>
                  <div className="ad__by">
                    <span>Ad by {item.adBy}</span>
                    <div className="addToCartButton">
                      <button
                        onClick={() => {
                          handleAddToBasket(item);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
