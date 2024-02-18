import React, { useContext, useEffect, useState } from "react";
import "./Accessories.scss";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import { Link } from "react-router-dom";

const Accessories = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("relevancy");

  useEffect(() => {
    axios.get("http://localhost:8080/accesories")
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
  const {handleAddWishlist} = useContext(MainContext)
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
              <span>Accessories</span>
              <span className="smalls">
                Scarves, hats, and hair accessories that tie it all together
              </span>
            </div>
            <div className="small__category">
            <div className="section">
                <img
                  src="https://i.etsystatic.com/5294424/c/1869/1869/23/0/il/1253c9/5139686065/il_300x300.5139686065_2wcp.jpg"
                  alt=""
                />
                <span>Keychains</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5297211/c/630/630/0/19/il/6e8064/1653206188/il_300x300.1653206188_e37m.jpg"
                  alt=""
                />
                <span>Hats & Caps</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5491963/r/il/9fd474/461948355/il_300x300.461948355_64cm.jpg"
                  alt=""
                />
                <span>Scarves & Wraps</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5207113/r/il/9d93ce/1300244677/il_300x300.1300244677_ehr8.jpg"
                  alt=""
                />
                <span>Hair Accessories</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/5715409/c/900/900/0/0/il/2cc3a5/1075906626/il_300x300.1075906626_k0qi.jpg"
                  alt=""
                />
                <span>Patches & Pins</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/32861059/r/il/798b77/3983876348/il_300x300.3983876348_99xs.jpg"
                  alt=""
                />
                <span>Sunglasses & Eyewear</span>
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
                  <Link to={`/${item._id}`}><img src={item.image} alt="" /></Link>
                    
                    <div className="favourites" onClick={()=>{handleAddWishlist(item)}}>
                      <FaRegHeart />
                    </div>
                  </div>
                  <div className="card__down">
                    <div className="product__card__title">
                      <span>{item.name?.slice(0, 45)}</span>
                    </div>
                    <div className="stars">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <div className="product__price">
                      <span>USD {item.price}</span>
                    </div>
                    <div className="ad__by">
                      <span>Ad by {item.adBy}</span>
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

export default Accessories;




