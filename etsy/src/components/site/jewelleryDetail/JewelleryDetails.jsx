import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./JewelleryDetails.scss";
import { FaStar } from "react-icons/fa6";

const JewelleryDetails = () => {
  const [jewelleryDetail, setJewelleryDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/jewellery/${id}`).then((res) => {
      setJewelleryDetail(res.data);
      console.log(res.data);
    });
  }, [id]);
  const myFunc = () => {
    console.log(jewelleryDetail)
  };
  return (
    <div className="detail">
      <div className="detail__items">
        <div className="detail__left">
          <div className="detail__image">
            <img  src={jewelleryDetail.image} alt="" />
          </div>
          <div className="comments">
            <div className="comments__items">
              <div className="raiting__star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>
                Amazing, I'm so happy with this purchase!! I'm in the process of
                making it, I can't wait to see the results!
              </span>
              <div className="user__pp">
                <img
                  src="https://i.etsystatic.com/iusa/7f5c01/102311162/iusa_75x75.102311162_i91k.jpg?version=0"
                  alt=""
                />
                <span>C.A Taylor</span>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__right">
          <div className="product__price">
            <span>
              <span>USD</span>{" "}
              <span style={{ color: "green" }}>{jewelleryDetail.price}</span>
            </span>
          </div>
          <div className="product__description">
            <span>{jewelleryDetail.desc}</span>
          </div>
          <div className="add__to__cart">
            <button >Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelleryDetails;
