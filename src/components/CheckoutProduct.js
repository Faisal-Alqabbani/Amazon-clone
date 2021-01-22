import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./CheckoutProdcut.css";
function CheckoutProduct({ id, title, image, price, rating, hidebtn }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromTheBasket = () => {
    // remove the item from the basket!
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct" key={id}>
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {hidebtn ? (
          ""
        ) : (
          <button onClick={removeFromTheBasket}>Remove From Basket!</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
