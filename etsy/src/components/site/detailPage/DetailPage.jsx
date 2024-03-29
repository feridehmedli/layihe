import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { MainContext } from "../../../context/Context";
import "./DetailPage.scss";
import toast from "react-hot-toast";

const DetailPage = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/accesories/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

  const { handleAddToBasket } = useContext(MainContext);

  return (
    <div className="detail">
      <div className="detail__items">
        <div className="detail__left">
          <div className="detail__image">
            <img src={detail.image} alt="" />
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
              <span style={{ color: "green" }}>{detail.price}</span>
            </span>
          </div>
          <div className="product__description">
            <span>{detail.desc}</span>
          </div>
          <div className="add__to__cart">
            <button
              onClick={() => {
                handleAddToBasket(detail);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
