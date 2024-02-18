import React, { useContext, useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import "./Hero.scss";

const Hero = () => {
  const [data, setData] = useState([]);
  const { handleAddWishlist } = useContext(MainContext);
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/recentlyfavourited/").then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/human/").then((res) => {
      setLoginData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero__items">
          {loginData.length > 0 && (
            <div className="welcome">
              <span>
                Welcome,
                <a href="" style={{ color: "black" }}>
                  {loginData[loginData.length-1].name}
                </a>
                !
              </span>
            </div>
          )}
          <div className="recently">
            <span className="Recently">Recently favourited & more</span>{" "}
            <FaArrowRightLong />
          </div>
          <div className="cards">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div key={index}>
                  <div className="card__items">
                    <div className="card__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="price">
                      <span> USD {item.price}</span>
                    </div>
                    <div
                      className="favourite"
                      onClick={() => {
                        handleAddWishlist(item);
                      }}
                    >
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
