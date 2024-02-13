import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import "./Hero.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";
import axios from 'axios'
const Hero = () => {
  const [data,setData] = useState()
  useEffect(()=>{
    axios.get("http://localhost:8080/human/login").then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <div>
      <div className="hero">
        <div className="hero__items">
          <div className="welcome">
            <span>
              Welcome,
              <a href="" style={{ color: "black" }}>
                Farid
              </a>
              !
            </span>
          </div>
          <div className="recently">
            <span className="Recently">Recently favourited & more</span>{" "}
            <FaArrowRightLong />
          </div>
          <div className="cards">
            <div className="card__items">
              <div className="card__image">
                <img
                  src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_340x270.5696970998_ihhb.jpg"
                  alt=""
                />
              </div>
              <div className="price">
                <span>USD 13.34</span>
              </div>
              <div className="favourite">
                <FaRegHeart />
              </div>
            </div>
            <div className="card__items">
              <div className="card__image">
                <img
                  src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_340x270.5696970998_ihhb.jpg"
                  alt=""
                />
              </div>
              <div className="price">
                <span>USD 13.34</span>
              </div>
              <div className="favourite">
                <FaRegHeart />
              </div>
            </div>
            <div className="card__items">
              <div className="card__image">
                <img
                  src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_340x270.5696970998_ihhb.jpg"
                  alt=""
                />
              </div>
              <div className="price">
                <span>USD 13.34</span>
              </div>
              <div className="favourite">
                <FaRegHeart />
              </div>
            </div>
            <div className="card__items">
              <div className="card__image">
                <img
                  src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_340x270.5696970998_ihhb.jpg"
                  alt=""
                />
              </div>
              <div className="price">
                <span>USD 13.34</span>
              </div>
              <div className="favourite">
                <FaRegHeart />
              </div>
            </div>
            <div className="card__items">
              <div className="card__image">
                <img
                  src="https://i.etsystatic.com/10889806/r/il/a91214/5696970998/il_340x270.5696970998_ihhb.jpg"
                  alt=""
                />
              </div>
              <div className="price">
                <span>USD 13.34</span>
              </div>
              <div className="favourite">
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
