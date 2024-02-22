import React, { useContext, useEffect, useState } from "react";
import "./Jewellery.scss";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Jewellery = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("relevancy");
  const { handleAddWishlist,handleAddToBasket } = useContext(MainContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jewellery");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
              <span>Jewellery</span>
              <span className="smalls">
                Rings, earrings, and necklaces to instantly raise your
                jewelry-box game
              </span>
            </div>
            <div className="small__category">
              <div className="section">
                <img
                  src="https://i.etsystatic.com/8595828/c/3000/3000/0/0/il/2aa7b1/2294321673/il_300x300.2294321673_5ybn.jpg"
                  alt="Rings"
                />
                <span>Rings</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7770785/r/il/d55a82/4328838368/il_300x300.4328838368_iyyu.jpg"
                  alt="Necklaces"
                />
                <span>Necklaces</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/17246174/r/il/2cf410/2546323062/il_300x300.2546323062_d78f.jpg"
                  alt="Earrings"
                />
                <span>Earrings</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5204269/c/1100/1100/0/0/il/88e8eb/1053449136/il_300x300.1053449136_ngza.jpg"
                  alt="Bracelets"
                />
                <span>Bracelets</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7704307/r/il/ed36fc/2341970317/il_300x300.2341970317_gqku.jpg"
                  alt="Watches"
                />
                <span>Watches</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/10204022/c/2586/2586/320/142/il/09c121/2731910039/il_300x300.2731910039_d8wd.jpg"
                  alt="Cremation & Memorial Jewelry"
                />
                <span>Cremation & Memorial Jewelry</span>
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
                    <Link to={`/${item._id}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className="favourites">
                      <FaRegHeart onClick={() => handleAddWishlist(item)} />
                    </div>
                  </div>
                  <div className="card__down">
                    <div className="product__card__title">
                      <span>{item.name.slice(0, 45)}</span>
                    </div>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <IoIosStar key={i} />
                      ))}
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
                          toast.success("Product was added to basket");
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
    </div>
  );
};

export default Jewellery;
