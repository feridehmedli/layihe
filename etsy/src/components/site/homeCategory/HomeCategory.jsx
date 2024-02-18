import React, { useContext, useEffect, useState } from "react";
import "./HomeCategory.scss";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MainContext } from "../../../context/Context";


const HomeCategory = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("relevancy");
  const {handleAddWishlist} = useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:8080/homeCategory")
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
              <span>HomeCategory</span>
              <span className="smalls">
              Kitchen and dining, storage solutions, rugs, lighting, wall decor, and furniture—everything you need to make your home yours
              </span>
            </div>
            <div className="small__category">
            <div className="section">
                <img
                  src="https://i.etsystatic.com/23863790/c/2000/2000/0/973/il/407021/3626665636/il_300x300.3626665636_4roj.jpg"
                  alt=""
                />
                <span>Home Decor</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/7814711/c/2752/2752/242/248/il/c30404/1267378713/il_300x300.1267378713_lx3v.jpg"
                  alt=""
                />
                <span>Furniture</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/6653527/r/il/a967b1/1533169234/il_300x300.1533169234_crel.jpg"
                  alt=""
                />
                <span>Lighting</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/6328095/c/999/999/0/0/il/8d6880/5536228252/il_300x300.5536228252_qbja.jpg"
                  alt=""
                />
                <span>Outdoor & Gardening</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/22663455/r/il/66c6df/3959764572/il_300x300.3959764572_el30.jpg"
                  alt=""
                />
                <span>Storage & Organization</span>
              </div>
              <div className="section">
                <img
                  src="https://i.etsystatic.com/8444652/c/2521/2521/0/131/il/51af91/1364864265/il_300x300.1364864265_pbyb.jpg"
                  alt=""
                />
                <span>Kitchen & Dining</span>
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

export default HomeCategory;





