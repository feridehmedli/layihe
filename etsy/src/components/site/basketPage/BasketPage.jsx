import React, { useContext, useDebugValue } from "react";
import { MainContext } from "../../../context/Context";

const BasketPage = () => {
  const { basketItems, decreaseFromBasket, removeFromBasket, handleAddToBasket } =
    useContext(MainContext);

  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => {
      return total + item.item.price * item.count;
    }, 0);
  };

  return (
    <div>
      {basketItems.map((item, index) => {
        return (
          <div key={index}>
            {item.item.name}
            {item.count}
            <button onClick={() => { handleAddToBasket(item) }}>Increase</button>
            <button disabled={item.count == 1} onClick={() => { decreaseFromBasket(item) }}>Decrease</button>
            <button onClick={() => { removeFromBasket(item) }}>Delete</button>
          </div>
        );
      })}
      <span>Total Price : {calculateTotalPrice()}</span>
    </div>
  );
};

export default BasketPage;
