import React, { useState, useContext, useEffect } from "react";
import "./Wishlist.scss";
import { MainContext } from "../../../context/Context";
import { IoIosStar, IoIosHeart } from "react-icons/io";
import axios from "axios";

const Wishlist = () => {
  const { wishlist, handleDeleteWishlist } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginData, setLoginData] = useState([]);

  const filteredWishlist = wishlist.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios.get("http://localhost:8080/human/").then((res) => {
      setLoginData(res.data);
    });
  }, []);

  return (
    <div className="wishlist">
      <div className="wishlist__up">
      <div className="wishlist__username">
        {loginData.length > 0 && (
          <div className="userName">
            <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className="profile__photo" />
            <span>{loginData[loginData.length - 1].name}</span>
          </div>
        )}
      </div>

      <div className="favourite__items__title">
        <span>Favourite items :</span>
        <div className="items__sayi">
          <span>{wishlist.length}</span> items
        </div>
      </div>
      <div className="wishlist__search">
        <input
          type="text"
          placeholder="Search in wishlist"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      </div>

      

      <div className="wishlist__item">
        {filteredWishlist.map((item, index) => (
          <div className="wishlist__card" key={index}>
            <div className="wishlist__card__items">
              <div className="wishlist__card__image">
                <img src={item.image} alt="" />
                <div
                  onClick={() => {
                    handleDeleteWishlist(item._id);
                  }}
                >
                  <IoIosHeart className="favourite__icon" />
                </div>
              </div>

              <div className="wishlist__card__down">
                <div className="wishlist__card__title">
                  <span>{item.name.slice(0, 45)}</span>
                </div>

                <div className="raiting">
                  <span>
                    5.0
                    <IoIosStar />
                  </span>
                  <span className="adBy">{item.adBy}</span>
                </div>

                <div className="wishlist__price">
                  <span>USD {item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
