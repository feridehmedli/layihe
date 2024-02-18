import React, { useContext, useEffect, useState } from "react";
import "./ArtCategory.scss";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MainContext } from "../../../context/Context";


const ArtCategory = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("relevancy");
  const {handleAddWishlist} = useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:8080/art")
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
              <span>Art & Collectibles</span>
              <span className="smalls">
              Custom artwork, portraits, and totally original paintings and prints to turn your home into a gallery
              </span>
            </div>
            <div className="small__category">
            <div className="section">
                <img
                  src="https://i.etsystatic.com/6996104/c/1140/1140/92/38/il/2fd2b5/5532101087/il_300x300.5532101087_611q.jpg"
                  alt=""
                />
                <span>Painting</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7923668/c/998/998/1/0/il/3e9953/1440705435/il_300x300.1440705435_ec5o.jpg"
                  alt=""
                />
                <span>Prints</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/37142812/r/il/681104/4908658418/il_300x300.4908658418_53sz.jpg"
                  alt=""
                />
                <span>Sculpture</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/25379704/r/il/f26ec0/3438965000/il_300x300.3438965000_qiwo.jpg"
                  alt=""
                />
                <span>Glass Art</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/14409281/r/il/e81b60/4651013203/il_300x300.4651013203_2j18.jpg"
                  alt=""
                />
                <span>Drawing & Illustration</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/28239647/r/il/7e7b9c/4316976210/il_300x300.4316976210_6hok.jpg"
                  alt=""
                />
                <span>Collectibles</span>
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
                    <img src={item.image} alt="" />
                    <div className="favourites" >
                      <FaRegHeart onClick={()=>{handleAddWishlist(item)}} />
                    </div>
                  </div>
                  <div className="card__down">
                    <div className="product__card__title">
                      <span>{item.name.slice(0, 45)}</span>
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

export default ArtCategory;






