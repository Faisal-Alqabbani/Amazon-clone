import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }] = useStateValue();
  const FunctionalArticle = forwardRef((props, ref) => (
    <div ref={ref}>{props.children}</div>
  ));
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <div className="checkout__title">
            <h3>Hello, {user?.email}</h3>
            <h2>Your Shopping Basket</h2>
            <FlipMove>
              {basket.map((item) => (
                <FunctionalArticle key={item.id}>
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                  />
                </FunctionalArticle>
              ))}
            </FlipMove>

            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
          </div>
        </div>
      </div>
      {/* The Right side of page */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
