import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import {useHistory} from 'react-router-dom'
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  //   const totalPrice = () => {
  //     let price = 0;
  //     basket.map((item) => {
  //       price += item.price;
  //     });
  //     return price;
  //   };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e)=> history.push('payment')}>Proceed to checkout!</button>
    </div>
  );
}

export default Subtotal;
