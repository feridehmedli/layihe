import React, { useState, useEffect, useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import "./ViewedSect.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import { Link } from "react-router-dom";

const ViewedSection = () => {
  const {handleAddWishlist} = useContext(MainContext)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/accesories/").then((res) => {
      setData(res.data);
    });
  }, []);

  const firstThreeItems = data.slice(5,10);
  
  return (
    <div>
      <div className="view">
        <div className="view__items">
          <div className="because__item">
            <div className="because__you__viewed">
              <span>Because you viewed</span>
            </div>
            <div className="small__photo">
              <img
                src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_75x75.5696970998_ihhb.jpg"
                alt=""
              />
              <img
                src="https://i.etsystatic.com/26734404/r/il/2e3e08/5712771256/il_75x75.5712771256_3zg2.jpg"
                alt=""
              />
              <img
                src="https://i.etsystatic.com/17436998/r/il/79f75b/4140208066/il_75x75.4140208066_kzi9.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="cardss">
            {firstThreeItems && firstThreeItems.length > 0 && firstThreeItems.map((item, index) => (
              <div className="card__items" key={index}>
                <Link to={`${item._id}`} >
                <div className="card__image">
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>
                </Link>
                <div className="price">
                  <span>USD {item.price}</span>
                </div>
                <div className="favourite" onClick={()=>{handleAddWishlist(item)}}>
                  <FaRegHeart />
                </div>
              </div>
            ))}
            <div className="end__cards">
              <div className="end__cards__items">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/10889806/r/il/f852c4/5699166696/il_75x75.5699166696_4e7u.jpg"
                    alt=""
                  />
                </div>
                <div className="title">pressed flower solar print</div>
                <div className="icon" >
                  <FaArrowRightLong />
                </div>
              </div>
              <div className="end__cards__items">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/10889806/r/il/f852c4/5699166696/il_75x75.5699166696_4e7u.jpg"
                    alt=""
                  />
                </div>
                <div className="title">pressed flower solar print</div>
                <div className="icon">
                  <FaArrowRightLong />
                </div>
              </div>
              <div className="end__cards__items">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/10889806/r/il/f852c4/5699166696/il_75x75.5699166696_4e7u.jpg"
                    alt=""
                  />
                </div>
                <div className="title">pressed flower solar print</div>
                <div className="icon">
                  <FaArrowRightLong />
                </div>
              </div>
              <div className="end__cards__items">
                <div className="image">
                  <img
                    src="https://i.etsystatic.com/10889806/r/il/f852c4/5699166696/il_75x75.5699166696_4e7u.jpg"
                    alt=""
                  />
                </div>
                <div className="title">pressed flower solar print</div>
                <div className="icon">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewedSection;
