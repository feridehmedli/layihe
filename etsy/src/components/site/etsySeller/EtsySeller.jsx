import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import "./EtsySeller.scss";
import { MainContext } from "../../../context/Context";
import axios from "axios";

const EtsySeller = () => {
  const [data, setData] = useState([]);
  const { handleAddWishlist } = useContext(MainContext);

  useEffect(() => {
    axios.get("http://localhost:8080/recentlyfavourited/").then((res) => {
      setData(res.data);
    });
  }, []);

  const firstThreeItems = data.slice(10, 18);

  return (
    <div>
      <div className="seller">
        <div className="seller__items">
          <div className="seller__title">
            <span className="sponsor">Sponsored</span>
            <span>By Etsy sellers</span>
          </div>
          <div className="cardss">
            {firstThreeItems.map((item, index) => (
              <div className="card__items" key={index}>
                <div className="card__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="price">
                  <span>USD {item.price}</span>
                </div>
                <div className="favourite" onClick={() => handleAddWishlist(item)}>
                  <FaRegHeart />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtsySeller;
