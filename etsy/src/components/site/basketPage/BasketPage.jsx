import React, { useContext } from "react";
import { MainContext } from "../../../context/Context";
import "./BasketPage.scss";
import { RiDeleteBinFill } from "react-icons/ri";
import toast from "react-hot-toast";

const BasketPage = () => {
  const {
    basketItems,
    decreaseFromBasket,
    removeFromBasket,
    handleAddToBasket,
  } = useContext(MainContext);

  const calculateTotalPrice = () => {
    const totalPrice = basketItems.reduce((total, item) => {
      return total + item.item.price * item.count;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="basket">
      {basketItems.length === 0 ? (
        <div className="empty-basket-message" style={{"fontWeight" : "lighter","fontSize":"30px"}}>Basket is empty</div>
      ) : (
        <div className="basket__items">
          <div className="total__price">
            <span>Total Price : {calculateTotalPrice()} $</span>
          </div>
          <div className="basket__card">
            <div className="card__itemss">
              {basketItems.map((item, index) => (
                <div key={index} className="card__item">
                  <div className="card__images">
                    <img src={item.item.image} alt="" />
                  </div>
                  <div className="card__titles">
                    <span>{item.item.name?.slice(0, 45)}</span>
                  </div>
                  <div className="button__class">
                    <div className="decrease">
                      <button
                        disabled={item.count === 1}
                        onClick={() => decreaseFromBasket(item)}
                      >
                        -
                      </button>
                    </div>
                    <div className="count">
                      <span style={{ fontWeight: "bold" }}>{item.count}</span>
                    </div>
                    <div className="increase">
                      <button onClick={() => handleAddToBasket(item)}>+</button>
                    </div>
                  </div>
                  <div className="price__class">
                    <span style={{ fontWeight: "lighter" }}>Price :</span>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {item.item.price} $
                    </span>
                  </div>
                  <div className="delete__basket" onClick={() => { toast.error("Product was deleted from basket") }}>
                    <RiDeleteBinFill
                      onClick={() => {
                        removeFromBasket(item);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
