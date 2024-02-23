import React, { useContext, useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { MainContext } from "../../../context/Context";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const [data, setData] = useState([]);
  const { handleAddWishlist } = useContext(MainContext);
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/accesories/").then((res) => {
      setData(res.data);
    });

    const fetchLoginData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/human/");
        setLoginData(response.data);
      } catch (error) {
        console.error("Error fetching login data:", error);
      }
    };

    fetchLoginData();
  }, []);

  const firstThreeItems = data.slice(10,15);

  return (
    <div className="hero">
      <div className="hero__items">
        {loginData.length > 0 && (
          <div className="welcome">
            <span>
              Welcome,{" "}
              <Link to='/wishlist' href="" style={{ color: "black" }}>
                {loginData[loginData.length - 1].name}
              </Link>
              !
            </span>
          </div>
        )}
        <div className="recently">
          <span className="Recently">Recently favorited & more</span>{" "}
          <FaArrowRightLong />
        </div>
        <div className="cards">
          {firstThreeItems && firstThreeItems.length > 0 ? (
            firstThreeItems.map((item, index) => (
              <div key={index} className="card__items">
                <Link to={`${item._id}`}>
                <div className="card__image">
                  <img src={item.image} alt="" />
                </div>
                </Link>
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
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
